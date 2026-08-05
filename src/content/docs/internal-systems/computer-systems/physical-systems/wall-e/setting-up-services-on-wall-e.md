---
title: "Setting up Services on WALL-E"
confluence_id: 779452436
source: Setting-up-Services-on-WALL-E_779452436.html
---

# Setting up Services on WALL-E

## NGINX

### Config file access permissions => SELinux

If `nginx` doesn’t seem to be seeing new config files (or even old ones if you moved or copied the files) then it may be an access permission issue. Look at the nginx error log file to see if it shows something like:

```
sudo tail -5 /var/log/nginx/error.log
2019/11/20 15:28:48 [emerg] 28739#0: open() "/etc/nginx/sites-enabled/dca.conf" failed (13: Permission denied) in /etc/nginx/nginx.conf:402
```

That means the permission are incorrect on the dca.conf file. This is what the file was showing:

```
ls -Z /etc/nginx/sites-available/
-rw-r--r--. root root unconfined_u:object_r:httpd_config_t:s0 anzo_nginx.conf
-rw-r--r--. root root unconfined_u:object_r:user_home_t:s0 dca.conf
-rw-r--r--. root root unconfined_u:object_r:httpd_config_t:s0 guess.conf
```

This is how I fixed it:

```
sudo chcon -Rt httpd_config_t ../sites-available/dca.conf

ls -Z /etc/nginx/sites-available/
-rw-r--r--. root root unconfined_u:object_r:httpd_config_t:s0 anzo_nginx.conf
-rw-r--r--. root root unconfined_u:object_r:httpd_config_t:s0 dca.conf
-rw-r--r--. root root unconfined_u:object_r:httpd_config_t:s0 guess.conf
```

### 503 Forbidden => SELinux

The default SELinux setup requires specific file attributes/permissions on content files in order to be used by Nginx. One attempt to access a file returned “503 Internal Service Error” as a result of incorrect file attributes.

```
$ ls -laZ *.zip | more
-rw-rw-r--. shrek shrek unconfined_u:object_r:httpd_sys_content_t:s0 gist10.0.0_webDownload.zip
-rw-rw-r--. shrek shrek unconfined_u:object_r:user_home_t:s0 gist11.0.0_webDownload.zip
-rw-r--r--. shrek shrek unconfined_u:object_r:httpd_sys_content_t:s0 gist7.1.1.zip
```

Notice the different permission on the gist11.0.0\_webDownload.zip file. Then do this:

```
$ sudo chcon -Rt httpd_sys_content_t gist11.0.0_webDownload.zip
$ ls -laZ gist11.0.0_webDownload.zip
-rw-rw-r--. shrek shrek unconfined_u:object_r:httpd_sys_content_t:s0 gist11.0.0_webDownload.zip
```

After that you could download the file.

### 500 Internal Server Error => SELinux

The default SELinux setup requires specific file attributes/permissions on content files in order to be used by Nginx. One attempt to access a site returned “500 Internal Service Error” as a result of incorrect file attributes.

In the error logs (/var/log/nginx/error.log) I saw this:

```
2019/11/20 15:33:29 [crit] 234225#0: *43 open() "/home/ssd/www/dca/htpasswd" failed (13: Permission denied), client: 10.0.1.99, server: dca.semanticarts.com, request: "GET / HTTP/2.0", host: "dca.semanticarts.com"
```

Nginx was unable to open the htpasswd file because:

```
ls -Z /home/ssd/www/dca/htpasswd
-rw-r--r--. shrek shrek unconfined_u:object_r:unlabeled_t:s0 htpasswd
```

Compared to something that did work:

```
ls -Z /home/ssd/www/default/
-rwxr-xr-x. root root unconfined_u:object_r:httpd_sys_content_t:s0 index.html
```

I was able to fix it with:

```
sudo chcon -Rt httpd_sys_content_t /home/ssd/www/dca/htpasswd*

ls -Z
-rw-r--r--. shrek shrek unconfined_u:object_r:httpd_sys_content_t:s0 htpasswd
-rw-rw-r--. shrek shrek unconfined_u:object_r:httpd_sys_content_t:s0 htpasswd-ms
-rw-rw-r--. shrek shrek unconfined_u:object_r:httpd_sys_content_t:s0 htpasswd-platts
-rw-rw-r--. shrek shrek unconfined_u:object_r:unlabeled_t:s0 HTPASSWD.txt
```

### 502 Bad Gateway

This can have many causes.

#### SELinux defaults to not allowing Nginx to

Upon initial setup to use Nginx to proxy a request to another process I got a 502 Bad Gateway error and the logs (/var/log/nginx/error.log) showed these errors:

```
2019/11/20 23:04:29 [crit] 236399#0: *51 connect() to [::1]:5100 failed (13: Permission denied) while connecting to upstream, client: 10.0.20.67, server: dca.semanticarts.com, request: "GET / HTTP/2.0", upstream: "http://[::1]:5100/", host: "dca.semanticarts.com"
2019/11/20 23:04:29 [crit] 236399#0: *51 connect() to 127.0.0.1:5100 failed (13: Permission denied) while connecting to upstream, client: 10.0.20.67, server: dca.semanticarts.com, request: "GET / HTTP/2.0", upstream: "http://127.0.0.1:5100/", host: "dca.semanticarts.com"
2019/11/20 23:04:29 [error] 236399#0: *51 no live upstreams while connecting to upstream, client: 10.0.20.67, server: dca.semanticarts.com, request: "GET /favicon.ico HTTP/2.0", upstream: "http://localhost/favicon.ico", host: "dca.semanticarts.com"
```

<https://www.nginx.com/blog/using-nginx-plus-with-selinux/>

sudo setsebool -P httpd\_can\_network\_connect 1
