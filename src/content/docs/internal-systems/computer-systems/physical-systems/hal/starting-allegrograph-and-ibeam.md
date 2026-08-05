---
title: "Starting AllegroGraph and iBeam"
confluence_id: 234061839
source: Starting-AllegroGraph-and-iBeam_234061839.html
---

# Starting AllegroGraph and iBeam

**Computer**: HAL-9000

**Users**: semartsdev, monolith

> # Reference:
>
> - [SSH Access into HAL-9000](ssh-access-into-hal-9000.md)

## Start AllegroGraph

1. SSH/log into **semartsdev** by *either*
   1. Bash Terminal:

      ```
      ssh semartsdev@192.168.2.38
      ```
   2. Logging in directly on **HAL-9000**
2. Run the **startServer.sh** script by *either*
   1. sh Script:

      ```
      sh ~/Scripts/sh/startServer.sh
      ```
   2. Alias:

      ```
      ag-start
      ```

## Start Applications

1. SSH/log into **monolith** by *either*
   1. Bash Terminal:

      ```
      ssh monolith@192.168.2.38
      ```
   2. Logging in directly on **HAL-9000**
2. Run the **spinemeup.sh** script
   1. sh Script:

      ```
      sh ~/spinemup.sh
      ```
   2. Alias:

      ```
      app-start
      ```
