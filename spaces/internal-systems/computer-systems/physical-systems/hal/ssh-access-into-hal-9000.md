---
title: "SSH Access into HAL-9000"
confluence_id: 677183594
source: SSH-Access-into-HAL-9000_677183594.html
---

# SSH Access into HAL-9000

- You will have to do this for each individual username on HAL
- The same SSH key can be used for multiple usernames

Replace all **parenthesis** inside commands:

```
Command: (keyname).pub
Typed:   hal.pub

Command: (HALuser)
Typed:   semartsdev
```

# Mac/Linux

## Creating the SSH key (Local)

1. Create an SSH key
   1. Bash Terminal:

      ```
      cd ~/.ssh/
      ssh-keygen -t rsa
      ```
   2. Assign an appropriate name and password to the key
2. Copy the contents of the **(keyname).pub** created (Should be copied as one line)
   1. Open **(keyname).pub** file in nano/vim/(any text editor):

      ```
      nano ~/.ssh/(keyname).pub
      vim ~/.ssh/(keyname).pub
      ```
   2. Copy the contents w/ ctrl-c; Remove any 'new line' characters
3. Paste and email the contents of the **(keyname).pub** file to someone who has direct access to HAL

## Authorizing the Public Key (Remote)

1. SSH/log into some **(HALuser)** by *either*  
   1. Bash Terminal:

      ```
      ssh (HALuser)@192.168.2.38
      ```
   2. Log in directly on the computer
2. Copy the contents of the received **(keyname).pub** file (Should be copied as one line)
3. Paste the contents of **(keyname).pub** into **authorized\_keys**
   1. Open **authorized\_keys** file in nano/vim/(any text editor):

      ```
      nano ~/.ssh/authorized_keys
      vim ~/.ssh/authorized_keys
      ```
   2. Append the contents of **(keyname).pub** to the end of **authorized\_keys** (Do not overwrite any lines):

## Create an Alias for SSH Access (Local)

1. Add an alias to the **.bashrc** file
   1. Open **.bashrc** file in nano/vim/(any text editor):

      ```
      nano ~/.bashrc
      vim ~/.bashrc
      ```
   2. Add an alias to the **.bashrc** file:

      ```
      alias sa-(HALuser)='ssh (HALuser)@192.168.2.38'
      ```
2. Close and then open a new terminal session
3. Test the new alias
   1. Bash Terminal:

      ```
      sa-(HALuser)
      ```
   2. Enter the password you assigned to your SSH key
4. To exit the SSH session:

   ```
   exit
   ```
