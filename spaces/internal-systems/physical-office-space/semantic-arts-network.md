---
title: "Semantic Arts Network"
confluence_id: 950388
source: Semantic-Arts-Network_950388.html
---

# Semantic Arts Network

### Internal Wireless

- SSID: Semantic Arts Internal
- Passphrase: in JT’s Lastpass account

### Guest Wireless

- SSID: Semantic Arts - Guest
- Passphrase: briefcase ovation caramel

Office Network: Conexion modem device is connected to a Cisco Meraki router connected to a Cisco Meraki ethernet switch and a Cisco Meraki WiFi access point.

All of our networking is configured via the Cisco Meraki.com interface. You must be given administrator privileges on Meraki.com to be able to see and modify the configuration.

## External Networks:

- Connexion (2024 March)

  - Fort Collins Connexion Technical Support is available 24/7/365 by calling 970-207-7873 or via e-mail at [support@fcconnexion.com](mailto:support@fcconnexion.com) should you need assistance.
  - Link Configuration:

    ```
    Default Gateway:  198.99.80.3
    Subnet Mask:      255.255.252.0
    Primary DNS:      204.133.83.240
    Secondary DNS:    23.163.32.248
    Tertiary DNS:     8.8.8.8

    Static IPs Assigned: 
    ​Static IP 1: 198.99.83.6 (Router)
    Static IP 2: 198.99.83.7 (HAL/unused)
    Static IP 3: 198.99.83.8 (WALL-E)
    ```
  - Instructions for validation of your new static IP service:

    ```
        Please enable Gratuitous ARP on your edge equipment.
        For each static IP you configure, please ping the following gateways from that IP:
        198.99.80.3 
        198.99.80.2
        198.99.80.1
    This ensures your device can reach all of the gateways required to provide service to that IP.
    ```
  - Unfortunately it seems our equipment (Cisco Meraki) does not support Gratuitous ARP for NAT'd IPs.

    <https://community.meraki.com/t5/Security-SD-WAN/MX-Doesn-t-Send-Gratuitous-ARP-on-1-1-NAT-IPs/m-p/183471>
- New office (Opera Galleria) Internet Provider

  - External Network Provider: Comcast (Xfinity)
  - Gateway IP: 173.164.47.102
  - CIDR Block Number: 173.164.47.96/29

    - Start IP Address: 173.164.47.96
    - End IP Address: 173.164.47.103
  - Subnet Mask: 255.255.255.248
  - Usable Static External IP Addresses: 173.164.47.97 - 173.164.47.101
  - External Address Mappings:

    - 173.164.47.96 : network address
    - 173.164.47.97 : Meraki router (which forwards certain ports to HAL & WALL-E)
    - 173.164.47.102 : gateway IP
    - 173.164.47.103 : broadcast address
- ~~Old Town Square Office:~~

  - ~~74.93.230.113 - external IP address~~

## Internal Networks:

- 10.0.1.0/24 - (VLAN 1: internal) internal network for devices connected to internal (Fort Collins) switch or internal wifi.
- 10.0.20.0/24 - devices connecting via the VPN get assigned IPs from this range. But it isn't set up as a VLAN or included in the others ![(question)](https://semarts.atlassian.net/wiki/s/-2141288751/6452/1a940726dccdfd22f4f3d128e6624577122d8c54/_/images/icons/emoticons/help_16.png) though there are firewall rules to route between this network and the internal network.
- 192.168.2.0/24 - (VLAN 2: DMZ) DMZ network. Only for externally accessible servers. Currently HAL and Walle.
- 192.168.4.0/24 - (VLAN 4: Wireless) This is the Wireless guest network. Internal wifi users get put onto the "internal" VLAN network.

Reserved IP Addresses:

- 10.0.1.20 - 10.0.1.39 : Computers
- 10.0.1.100 - 10.0.1.119 : Servers

  - 10.0.1.100 : SemartsServer - shared drive server
  - ~~10.0.1.101 : Plotter~~
  - 10.0.1.103 : NAS4FREE - ZFS ... is this being used?
  - 10.0.1.105 : RICOH MP C3003 printer. \*\*\* its 192.168.4.24 should we could we get on the subnet?
- 10.0.1.200 - 10.0.1.250 : Devices

  - ~~10.0.1.200 : Lanier Printer - is this gone? no response to a ping and it doesn't show up in the list of clients on the Meraki UI. But it does have a static IP address assignment.~~
- 192.168.2.0 : DMZ

  - 192.168.2.38 : HAL
  - 192.168.2.39 : Walle

---

I think the networking information below is out of date. The SonicWall and Linksys are unplugged.

I am leaving this info here because we may want to use them someday in the future and we'll want the access information, etc.

UNKNOWN ATTACHMENT

![](/wiki/plugins/servlet/confluence/placeholder/unknown-attachment?locale=en_US)

### Cable Model (from Comcast)

As of November 7, 2017:

- The password for management has been changed from the default to: cusadmin/Uve}jLX7
- New modem installed on 11/8/2017
- Speed of service is 50/10

Gateway:74.93.230.114 – this is the external static IP address  
"Useable":74.93.230.113  
DNS:75:75:75:75  
DNS2:75:75:76:76  
Subnet Mask:255:255:255:252   
Local IP:10.1.10.1   
  
Port Forwarding:  
(not necessary? Set up but never enabled)

![](../attachments/950388/950387.png)

### Netgear Wireless Router (R64000/AC1750)

- Router IP: **192.168.1.1** or routerlogin.net
- Username: **admin**
- Password: **Bex661&&**

### Wireless

- SSID: **SemanticArts**
- ~~Passphrase:~~ **~~MtKXVH2+~~**
- **New Passphrase: V23UBv+J8w$Q**
- Security:WPA 2/WPA Mixed mode
- (Same on both 5GHz and 2.4GHz)

### Guest Wireless

- SSID: SemanticArts - Guest
- password: briefcase ovation caramel
- The users will find a splash screen upon connecting that they will need to click through.

LAN IP:192.168.2.1  
DHCP Range:192.168.2.11 – 192.168.2.60  
Static IPs (aka DHCP Reservation):

- Sanas192.168.2.2
- Exchsrvr192.168.2.10
- Bluelight192.168.2.104
- Mkumba-PC1192.168.2.242
- Mkumba-Server192.168.2.243
- Lanier printer192.168.2.138
- Spitfire192.168.2.105
- TheRoad192.168.2.106
