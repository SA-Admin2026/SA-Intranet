---
title: "Cronjob"
confluence_id: 38273028
source: Cronjob_38273028.html
---
> To execute commands or scripts (groups of commands) automatically at a specified time/date.

## Step-by-step guide

1. Login to <account>
2. Type command
   1. ```
      crontab -e
      ```
3. Append the command to the end of file.

```
 * * * * * <command_to_execute>
```

```
 ┬ ┬ ┬ ┬ ┬
 │ │ │ │ │
 │ │ │ │ │
 │ │ │ │ └───── day of week (0 - 7) (0 to 6 are Sunday to Saturday, 7 is Sunday again)
 │ │ │ └────────── month (1 - 12)
 │ │ └─────────────── day of month (1 - 31)
 │ └──────────────────── hour (0 - 23)
 └───────────────────────── min (0 - 59)
```

```

```

```
* = every
```

`For Example:`

```
0 1 * * *  command
```

```
	Executes the <command> at 0 minutes of 1 AM everyday of everymonth.
```

<!-- section-nav:start -->

## In this section

- [Analytics](analytics.md)

<!-- section-nav:end -->
