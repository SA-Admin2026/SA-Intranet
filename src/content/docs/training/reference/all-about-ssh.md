---
title: "All about SSH"
confluence_id: 2391834625
source: "All-about-SSH_2391834625.html"
---
`ssh`, `scp`, `sshfs` (and related commands) are very useful tools to be familiar with when working with remote computers, whether it is another computer in the same room, or a server on the other side of the planet.

This page is a combination of human generated text and AI generated text (compliments of Google Bard and ChatGPT) and some editing. In many cases I have included the output from both AI sources, just in case it helps to clarify anything. It still needs some editing but the information should be there.

There is a 30 minute recording of a demo I did on this topic. Here is the [link to the recording](https://datacentric-my.sharepoint.com/:v:/r/personal/james_metcalf_semanticarts_com/Documents/Recordings/Friday%20Staff%20Meeting-20230512_092946-Meeting%20Recording.mp4?csf=1&web=1&e=xe4CLZ).

- [Introduction](#AllaboutSSH-Introduction)
  - [Public Key Cryptography Basics](#AllaboutSSH-PublicKeyCryptographyBasics)
  - [Some Security Considerations](#AllaboutSSH-SomeSecurityConsiderations)
  - [Installation](#AllaboutSSH-Installation)
  - [Configuration](#AllaboutSSH-Configuration)
  - [Step 3: Generate SSH Key Pair](#AllaboutSSH-Step3:GenerateSSHKeyPair)
  - [Step 4: Copy Public Key to Remote Machine](#AllaboutSSH-Step4:CopyPublicKeytoRemoteMachine)
  - [Step 5: Connect to Remote Machine with SSH](#AllaboutSSH-Step5:ConnecttoRemoteMachinewithSSH)
  - [Configuring SSH](#AllaboutSSH-ConfiguringSSH)
  - [SCP](#AllaboutSSH-SCP)
  - [Using SCP (edit this later to combine this and the next section)](#AllaboutSSH-UsingSCP(editthislatertocombinethisandthenextsection))
  - [Step 6: Use SCP to Transfer Files](#AllaboutSSH-Step6:UseSCPtoTransferFiles)
  - [SSHFS](#AllaboutSSH-SSHFS)
  - [Step 7: Use SSHFS to Mount a Remote File System](#AllaboutSSH-Step7:UseSSHFStoMountaRemoteFileSystem)
  - [Using SSHFS](#AllaboutSSH-UsingSSHFS)
  - [SSH tunneling:](#AllaboutSSH-SSHtunneling:)
- [github](#AllaboutSSH-github)
- [Setting up read-only deployment keys for github repositories](#AllaboutSSH-Settingupread-onlydeploymentkeysforgithubrepositories)
- [Extra: Remote Computer Configuration](#AllaboutSSH-Extra:RemoteComputerConfiguration)

# Introduction

Secure Shell (SSH) is a network protocol for secure remote login and file transfer over an unsecured network. SSH allows you to securely connect to a remote server or computer and execute commands as if you were physically sitting in front of it. SSH also allows you to transfer files securely between your local machine and a remote server or computer.

Secure Copy (SCP) is a command-line tool that uses SSH to securely transfer files between two remote machines or between a local machine and a remote machine.

SSH File System (SSHFS) is a tool that allows you to mount a remote file system over SSH. Once the file system is mounted, you can access the remote files as if they were on your local machine.

SSH uses public key cryptography for authentication and data encryption.

## Public Key Cryptography Basics

Public key cryptography is a way of encrypting data so that only the intended recipient can decrypt it. It uses two keys: a public key and a private key. The public key can be shared with anyone, but the private key must be kept secret.

When you use SSH to connect to a remote computer, you can use public key cryptography to authenticate yourself without having to enter a password. The remote computer will have your public key stored in a file called ~/.ssh/authorized\_keys. When you connect to the remote computer, it will use your public key to encrypt a random string. Your computer will then use your private key to decrypt the random string. If the two strings match, you will be authenticated.

Public key cryptography is much more secure than using passwords. Passwords can be easily guessed or stolen, but public keys are more difficult to compromise.

## Some Security Considerations

Your private key grants access to any resources that have been configured to use it. Therefore it is important to keep it safe and secure.

Here are some tips on how to keep your SSH private key secure:

- **Do not share your private key with anyone.** The private key is like a password, and it should be kept secret.
- **Store your private key in a safe place.** You can store it on a USB drive, or you can encrypt it and store it on your computer.
- **Use a strong passphrase to protect your private key.** The passphrase should be at least 12 characters long, and it should contain a mix of uppercase and lowercase letters, numbers, and symbols.
- **Do not save your private key in your SSH configuration file.** If your SSH configuration file is compromised, anyone who has access to it will be able to use your private key to access your remote servers.
- **Keep your private key up to date.** If you ever lose your private key, you should generate a new one.
- **Use a key manager.** A key manager is a software application that can help you to store and manage your SSH keys. Key managers can help you to keep your keys safe and secure. [I (Jamie) don’t use a key agent because if anyone can access your computer they can then use your key. Yes, it is a little inconvenient to type your password in each time you need to do something, but I think the extra security is worth it.]

## Installation

The first step is to install SSH on your local machine. SSH comes pre-installed on most Unix-based systems, including Linux and macOS. If you're using a different operating system, you can download an SSH client from the internet. On Windows, you can use a third-party SSH client like PuTTY or OpenSSH.

*Starting with Windows 10 version 1809 (October 2018 Update), Microsoft has included an OpenSSH client as a feature in Windows. This means that you can use the ssh command and other OpenSSH tools natively in the Windows Command Prompt or PowerShell, without having to install any third-party software.*

*To use the OpenSSH client in Windows, you may need to enable the "OpenSSH Client" feature from the "Manage Optional Features" settings in Windows. Once enabled, you can access the ssh command and other OpenSSH tools from the Windows Command Prompt or PowerShell.*

To check if SSH is installed on your local machine, run the following command:

```
$ ssh -V
```

If you see a version number, SSH is installed on your machine.

## Configuration

To configure SSH, you will need to create a public and private key pair. The public key will be used on the remote computer, while the private key will remain only on your local computer.

To create a key pair, you can use the following command:

```
ssh-keygen
```

This will create a new key pair in the default location, which is `~/.ssh`. The public key will be named `id_rsa.pub`, and the private key will be named `id_rsa`.

Once you have created a key pair, you will need to copy the public key to the remote computer. You can do this using the following command:

```
ssh-copy-id -i ~/.ssh/id_rsa.pub user@remote_host
```

This will copy the public key to the `~/.ssh/authorized_keys` file on the remote computer.

Once you have copied the public key to the remote computer, you can connect to it using the following command:

```
ssh user@remote_host
```

This will prompt you to enter your password/passphrase for your private key. Once you have entered your password, you will be connected to the remote computer.

## Step 3: Generate SSH Key Pair

Before you can use SSH to connect to a remote machine, you need to generate an SSH key pair. The SSH key pair consists of a private key and a public key. The private key should be kept secret, and the public key should be shared with the remote machine.

To generate an SSH key pair, run the following command:

```
$ ssh-keygen
```

This will generate a new SSH key pair in the `~/.ssh` directory. The private key will be saved as `id_rsa`, and the public key will be saved as `id_rsa.pub`.

## Step 4: Copy Public Key to Remote Machine

Once you have generated your SSH key pair, you need to copy the public key to the remote machine that you want to connect to.

To copy the public key to the remote machine, you can use the `ssh-copy-id` command. The `ssh-copy-id` command will copy the public key to the remote machine and add it to the authorized keys file.

Here's an example of how to use the `ssh-copy-id` command:

```
$ ssh-copy-id user@remote-machine
```

Replace `user` with your username on the remote machine, and `remote-machine` with the hostname or IP address of the remote machine.

You will be prompted to enter your password on the remote machine. After entering your password, the public key will be copied to the remote machine.

This will work if the remote machine allows password logins. Many computers have turned that feature off for security reasons. In this case, you will need to ask whomever manages the remote computer to copy your public key to your user’s `~/.ssh/` directory.

## Step 5: Connect to Remote Machine with SSH

Now that you have configured SSH and copied your public key to the remote machine, you can use SSH to connect to the remote machine.

To connect to the remote machine, run the following command:

```
$ ssh user@remote-machine
```

Replace `user` with your username on the remote machine, and `remote-machine` with the hostname or IP address of the remote machine.

If everything is configured correctly, you should be prompted for your SSH key passphrase (if you set one) and then logged in to the remote machine.

If the remote machine is using a different port than the default port `22`, you can specify the port using the `-p` option:

```
ssh -p 2222 username@hostname
```

Once you have connected to the remote machine, you can run commands as if you were logged in locally.

## Configuring SSH

SSH has a local configuration file that is very useful to simplify the command line needed to do something, or just to remember details about the remote computer.

Once you have SSH installed, you can configure it by creating a configuration file in your home directory at `~/.ssh/config`. This file contains settings for SSH connections, including hostname, username, port number, and more.

Here is an example SSH configuration file:

```
Host example.com
    User username
    Port 22
```

This configuration sets the `Host` to `example.com`, the `User` to `username`, and the `Port` to `22`.

You can create an alias (short name) that is easier to type and remember:

```
Host ikg
        # Digital Ocean VM
        HostName 142.93.181.177
        User jamie
```

Now all you need to do is type to login (and type your private key password when it asks):

```
ssh ikg
```

Once you have this set in your config file, anywhere else in this document that you see something like `user@remote_host` you can just now just use the Host alias `ikg` from your config file.

You can configure ssh to use different keys for different hosts:

```
Host gitlab gitlab.com
    HostName gitlab.com
    IdentityFile ~/.ssh/id_ed25519
```

The config file allows comments so you I often put random notes in my config file to remind me about how to do something:

```
# Port forward
# ssh -L 127.0.0.1:10035:127.0.0.1:10035 my_ssh_host
```

## SCP

SCP (Secure Copy) is a command-line utility that can be used to copy files over an SSH connection.

To use SCP, you will need to specify the source and destination files. The source file can be a local file or a remote file. The destination file can be a local file or a remote file.

The following command will copy the file `/path/to/source_file` to the file `/path/to/destination_file` on the remote computer:

```
scp /path/to/source_file user@remote_host:/path/to/destination_file
scp filename user@remote_host:~/filename-in-home-directory
```

## Using SCP (edit this later to combine this and the next section)

`scp` (secure copy) is a command-line tool that allows you to securely transfer files between a local and a remote machine over an SSH connection. Here is the basic syntax of the `scp` command:

```
scp [options] [source] [destination]
```

Here are some examples of how to use `scp`:

Copy a file from the local machine to a remote machine:

```
scp /path/to/local/file.txt username@hostname:/path/to/remote/
```

Copy a file from a remote machine to the local machine:

```
scp username@hostname:/path/to/remote/file.txt /path/to/local/
```

Copy a directory and all its contents from the local machine to a remote machine:

```
scp -r /path/to/local/directory username@hostname:/path/to/remote/
```

Copy a directory and all its contents from a remote machine to the local machine:

```
scp -r username@hostname:/path/to/remote/directory /path/to/local/
```

## Step 6: Use SCP to Transfer Files

SCP allows you to securely transfer files between two remote machines or between a local machine and a remote machine.

To transfer a file from your local machine to a remote machine, use the following command:

```
$ scp /path/to/local/file user@remote-machine:/path/to/remote/directory
```

Replace `/path/to/local/file` with the path to the local file you want to transfer, `user` with your username on the remote machine, `remote-machine` with the hostname or IP address of the remote machine, and `/path/to/remote/directory` with the path to the remote directory where you want to transfer the file.

To transfer a file from a remote machine to your local machine, use the following command:

```
$ scp user@remote-machine:/path/to/remote/file /path/to/local/directory
```

Replace `user` with your username on the remote machine, `remote-machine` with the hostname or IP address of the remote machine, `/path/to/remote/file` with the path to the remote file you want to transfer, and `/path/to/local/directory` with the path to the local directory where you want to transfer the file.

## SSHFS

I find this to be one of the simplest ways to share files between machines. It is easier to configure than SAMBA, NFS, or most NAS systems.

SSHFS (SSH File System) is a FUSE (Filesystem in Userspace) filesystem that can be used to mount a remote directory on your local computer.

To use SSHFS, you will need to specify the remote directory and the mount point. The mount point is the directory on your local computer where the remote directory will be mounted.

The following command will mount the remote directory `/path/to/remote_directory` on the local directory `/path/to/mount_point`:

```
sshfs user@remote_host:/path/to/remote_directory /path/to/mount_point
```

Once the remote directory is mounted, you can access it as if it were a local directory.

For example, you can use the `ls` command to list the contents of the remote directory, and you can use the `cp` command to copy files to and from the remote directory.

To unmount the remote directory, you can use the following command:

```
fusermount -u /path/to/mount_point
```

## Step 7: Use SSHFS to Mount a Remote File System

SSHFS allows you to mount a remote file system over SSH. Once the file system is mounted, you can access the remote files as if they were on your local machine.

To use SSHFS, you need to install the SSHFS package. To install the SSHFS package on a Debian-based Linux distribution, run the following command:

```
$ sudo apt-get install sshfs
```

To mount a remote file system using SSHFS, use the following command:

```
$ sshfs user@remote-machine:/path/to/remote/directory /path/to/local/directory
```

Replace `user` with your username on the remote machine, `remote-machine` with the hostname or IP address of the remote machine, `/path/to/remote/directory` with the path to the remote directory you want to mount, and `/path/to/local/directory` with the path to the local directory where you want to

## Using SSHFS

`sshfs` is a tool that allows you to mount a remote file system over an SSH connection, so that you can access the remote files as if they were on your local machine. Here is the basic syntax of the `sshfs` command:

```
sshfs [user@]hostname:[directory] [mountpoint] [options]
```

Here are some examples of how to use `sshfs`:

Mount a remote directory to a local mount point:

```
sshfs username@hostname:/path/to/remote/directory /path/to/local/mount/point
```

Unmount the remote directory:

```
umount /path/to/local/mount/point
```

`sshfs` allows you to mount a remote file system as a regular user, without requiring root privileges. This makes it a convenient tool for accessing remote files securely over an SSH connection.

On Windows there are a couple of extra steps required to install and use sshfs.

## SSH tunneling:

With ssh you can securely tunnel network traffic between two machines through an encrypted SSH connection. This can be useful for accessing a remote service, such as a database or web server, as if it were running on your local machine.

Here's how you can use SSH tunneling to access a remote service:

1. Connect to the remote machine using SSH with the `-L` option to specify the local port to forward and the remote host and port to forward to. For example:

   ```
   $ ssh -L 8080:localhost:80 user@remote-machine
   ```

   This command forwards traffic from port 8080 on your local machine to port 80 on `localhost` (which is the remote machine) via the SSH connection.
2. Once you have established the SSH connection, open your web browser and go to `<http://localhost:8080`.> This will display the remote web server running on port 80 on the remote machine.

   Any traffic sent to `<http://localhost:8080`> on your local machine will be securely tunneled through the SSH connection and forwarded to the remote web server.

   You can use the same technique to access other services on the remote machine, such as a database running on port 3306:

   ```
   $ ssh -L 3306:localhost:3306 user@remote-machine
   ```

   This command forwards traffic from port 3306 on your local machine to port 3306 on `localhost` (which is the remote machine) via the SSH connection.

   You can then use a database client on your local machine to connect to `localhost` on port 3306 to access the remote database as if it were running locally.

That's how you can use SSH tunneling to securely access a remote service.

# github

I recommend using SSH keys to access github. It is more secure and makes life easier.

# Setting up read-only deployment keys for github repositories

You can configure a github repository with a read-only key that you can then leave un-secured (without a password) on a machine. This makes it easy to automate pulling updates from the repository using a script. The machine can pull from the repository but can’t push any updates. This protects from malicious changes being made if the private key is compromised either from a compromised machine or otherwise.

For details, see this other [confluence page](https://semarts.atlassian.net/wiki/spaces/SD/pages/754352144/Deploying+github.com+repositories+to+HAL+WALL-E).

# Extra: Remote Computer Configuration

Before you can use SSH to access a remote computer, it needs to be configured. If someone else manages the computer they may have already configured it. If not, here are some basic configuration instructions.

The SSH configuration file is located at `/etc/ssh/sshd_config`. You can edit this file using a text editor such as nano or vim.

The SSH configuration file contains many options, but we will only cover a few important ones:

### Port

The default SSH port is 22. However, it's a good security practice to change the default SSH port to something else. To change the SSH port, look for the following line in the configuration file:

```
#Port 22
```

Remove the `#` and change the port number to your desired port number. For example:

```
Port 2222
```

### PermitRootLogin

By default, SSH allows root login. It's a good security practice to disable root login and use a regular user account to log in to the remote machine. To disable root login, look for the following line in the configuration file:

```
#PermitRootLogin yes
```

Change `yes` to `no`:

```
PermitRootLogin no
```

### PasswordAuthentication

By default, SSH allows password authentication. It's a good security practice to disable password authentication and use public key authentication instead. To disable password authentication, look for the following line in the configuration file:

```
#PasswordAuthentication yes
```

Change `yes` to `no`:

```
PasswordAuthentication no
```

### Restart SSH

After you've made changes to the SSH configuration file, you need to restart the SSH service for the changes to take effect. To restart the SSH service, run the following command:

```
$ sudo systemctl restart ssh
```
