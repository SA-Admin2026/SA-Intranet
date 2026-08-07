---
title: "VPN"
confluence_id: 19496968
source: "VPN_19496968.html"
---
We use Meraki for a VPN into SA office.

Also see [New Ontologist Orientation](/new-ontologist-orientation/).

Table of Content:

- [Windows](#VPN-Windows)
  - [Error connecting: “The connection was terminated by the remote computer before it could be completed”](#VPN-Errorconnecting:“Theconnectionwasterminatedbytheremotecomputerbeforeitcouldbecompleted”)
- [Mac](#VPN-Mac)
- [Supplementary macOS Instructions](#VPN-SupplementarymacOSInstructions)
  - [Alternative Method](#VPN-AlternativeMethod)
- [How to Set Up Windows to Split VPN Traffic](#VPN-HowtoSetUpWindowstoSplitVPNTraffic)
- [Linux Instructions](#VPN-LinuxInstructions)
  - [Manjaro - update 11/9/2021](#VPN-Manjaro-update11/9/2021)
- [Meraki License Info](#VPN-MerakiLicenseInfo)

# Manage Access Configuration

Set up who can use the VPN via the Meraki dashboard at: <https://account.meraki.com/login>

# Client Configuration Instructions

You will need:

- The server address: 198.99.83.6
- The preshared key: uvzvcpUfn6A3
- Username:  your [semanticarts.com](http://semanticarts.com) email address
- Password:  should have been mailed to you from the Cisco Meraki dashboard

Follow *all* the instructions for your OS here.  <https://documentation.meraki.com/MX-Z/Client_VPN/Client_VPN_OS_Configuration>

E.g. for **Windows 10**, jump to: <https://documentation.meraki.com/MX/Client_VPN/Client_VPN_OS_Configuration#Windows_10>

      for macOS, jump to: <https://documentation.meraki.com/MX/Client_VPN/Client_VPN_OS_Configuration#macOS>

# How update to a new IP Address

## Windows

On Windows, this is how to update IP address.

Go to window search and enter: VPN you will see the following,

![](/attachments/19496968/2219868211.png)

click on blue box that says “VPN Settings”. Then you will see this:

![](/attachments/19496968/2219999289.png)

Click on Semantic Arts, and then “Advanced Options”. The IP address in the images below are old, use 198.99.83.6 instead. You will see something like this:

![](/attachments/19496968/2219409641.png)

Click on Edit to see the following.

![](/attachments/19496968/2219409636.png)

Enter the IP address in the box that says “Server name or address”.

That’s it. Then click Save.

Then try connecting to the VPN just like you always do.

### **Error connecting:** “The connection was terminated by the remote computer before it could be completed”

Ryan was getting this error on Windows 11. According to this article: <https://www.vanishedvpn.com/how-to-fix-the-connection-was-terminated-by-the-remote-computer-before-it-could-be-completed/>

Right click on the VPN connection, go to "Properties" and make sure the 3 checkboxes are checked as shown below.

![](/attachments/19496968/2306572299.png)

## Mac

# Additional Information

To access the Shared Drive, follow [these instructions here](https://semarts.atlassian.net/wiki/spaces/InternalSystems/pages/23461899/Accessing+the+shared+drive).

## Supplementary macOS Instructions

You can connect to the VPN from a Mac using the following steps:

- Click the Apple icon in the menu bar and click on "System Preferences..."

- Click "Network"

- Under the list of connections on the left-hand side of the window that appears, click the plus sign

- A dialog box will appear. Change the Interface to "VPN", change the VPN type to "L2TP over IPSec", and change the Service Name to something unique (such as Semantic Arts)

- Change the Server Address to 198.99.83.6, and enter your [semanticarts.com](http://semanticarts.com/) email address in the Account Name

- Click the Authentication Settings... button

- In the dialog box that appears, select the Password radio button in the list labeled User Authentication and enter your VPN password in the text box to its right

If you don't know your Meraki VPN password, here's how you can reset it:

Navigate to <https://account.meraki.com/login/reset_password>

Enter your [semanticarts.com](http://semanticarts.com/) email address

Keep in mind that you will need to update any stored credentials on all other systems you use to connect to the VPN

- In the Machine Authentication list in the same dialog box, select the Shared Secret radio button and enter the following pre-shared key before clicking OK to leave the dialog box:

Pre-shared key: uvzvcpUfn6A3

- Check the "Show VPN status in menu bar" check box to allow easy access your VPN connection from your Mac's menu bar.

- Click Apply to save the connection.

- You can now click Connect to connect to the VPN. In the future, you can connect and disconnect from the small VPN icon in the menu bar that appeared when you checked the "Show VPN status in menu bar" check box.

### Alternative Method

When you need to connect,

- Make sure you have an internet connection that isn't our local net
- click on the button with vertical white stripes next ot the wifi button.  Select Connect Semarts VPN, it will take a few seconds then be there
- command K  <smb://10.0.1.100/SemanticArts>
- Connect as guest

Notes created by [Brett Brewer (Unlicensed)](https://semarts.atlassian.net/wiki/people/557058:496b8c98-710b-469a-9763-bf7ee83fb471?ref=confluence). There were screenshots that did not come through in the copy/paste.

 To Access the Shared drive, for those of you who want to connect remotely, this worked for me.

 1.       Connect to the VPN via the icon on your desk top

 2.       Enter your VPN Credentials

 Mine looks like (where “\*” masks my true credentials

Username: b\*\*\*\*\*r

Password: B\*\*\*\*\*!

 You should get a message indicating you have connected, and Sonic Wall should look like:

3.  Go to File Explorer, and A) Select Network (from the file list on the left), and B) Enter [\\semartsserver](#) into the directory path

 You should then see the SematicArts network.  If you click on it you will get the shared folders.

4.  Mapping the Network / Folder to a Drive

If you want to map to the Drive, select the network

Then, right mouse click and select Map to a Drive

You should get:

The change the Drive if desired.

 I choose “Y”, you will then see the drive in your file list

\*\*\* If you shut down your machine, or you lose the VPN connection, in the file list you will see:

One has to connect to the VPN again.

When I did, I saw the drive still disconnected.

After clicking on it, it gave me an error message and then ***displayed*** the Shared Drive

## How to Set Up Windows to Split VPN Traffic

From the Meraki site: <https://documentation.meraki.com/MX-Z/Client_VPN/Configuring_Split_Tunnel_Client_VPN>   
  
The way this should work is that you will send packets to Semantic Arts for our services and to the general Internet for everything else.

## Linux Instructions

**Update**: Sept 2024 for Ubuntu 24.04

- Follow configuration instructions at <https://inepttech.com/meraki-vpn-on-ubuntu-pop_os/>
- This was working on Ubuntu 22.04
- Unfortunately Ubuntu 24.04 has a bug that prevents connecting to VPN. See:

  - <https://askubuntu.com/questions/1518636/after-24-04-upgrade-unable-to-connect-vpn-l2tp>
  - <https://bugs.launchpad.net/ubuntu/+source/golang-github-katalix-go-l2tp/+bug/2068687>
- I got it working by following the suggestion in the launchpad.net link above. I used the following commands and it worked after:

  - sudo apt install xl2tpd
  - sudo apt purge go-l2tp

**Update**: April 15, 2021 for mint 20.x

- sudo apt-get install network-manager-l2tp-gnome network-manager-strongswan libstrongswan-standard-plugins libstrongswan-extra-plugins
- sudo systemctl stop xl2tpd
- sudo systemctl disable xl2tpd
- Follow other [instructions at this link](https://inepttech.com/meraki-vpn-on-ubuntu-pop_os/) to configure it. [The old link no longer exists, I've updated it with a new link]

Check out this page [here](https://inepttech.com/meraki-vpn-on-ubuntu-pop_os/). I installed some extra stuff then configured it with the user interface accessed by clicking the network icon in the icon tray at the bottom right

### Manjaro - update 11/9/2021

sudo pacman -Syu networkmanager-l2tp strongswan

Then configure via network UI with the same configuration for Mint as provided [above (& here)](https://inepttech.com/meraki-vpn-on-ubuntu-pop_os/).

## Meraki License Info

Meraki is a Cisco product. Licensing is through Kyle @ Sylex Consulting. Last updated November 2018.

**LIC-ENT-1YR Meraki License for MR Access Point - 1 Year**(LIC-ENT-1YR 1)

**LIC-MS220-8P-1YR Meraki License for MS220-8P 1 Year**(LIC-MS220-8P-1YR 1)

**LIC-MX60-SEC-1YR Advanced Security Cisco Meraki License for MX60 1 Year**(LIC-MX60-SEC-1YR 1)
