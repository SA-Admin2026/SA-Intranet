---
title: "DCA & Slow Reveal deployment"
confluence_id: 771751941
source: 771751941.html
---

# DCA & Slow Reveal deployment

Here is (hopefully) the current information about deployment of the 2019 DCA and Slow Reveal.

## DCA & Slow Reveal

Latest Release Version: <https://dca.semanticarts.app>

Beta Release Version: <https://staging.semanticarts.app>

## Slow Reveal (version 1) URLs:

Slow Reveal and the old DCA server only supports connecting to a single repository. In order to use it on multiple repositories I’ve created multiple installations that point to different repositories.

When we have a new code release I download a copy to a new subdirectory here: `monolith@hal-9000:~/Development/dca/ontology-presenter` . Follow the convention of putting the date in the directory name.

Then I soft link the “current\_release” directory to the latest code directory. First remove the old one `rm ./current_release` then link the new one like this `ln -s ./dist-2019-09-09/ current_release`

[https://dca.semanticarts.com/presenter](http://dca.semanticarts.com/presenter)

- monolith@HAL
- ~/Development/dca/dca/client/build/presenter
- Server Port: 4000
- Username/Password: dca:semarts
- Repository: data-centric / ontoEdit-new
- /etc/nginx/sites-enabled/dca

[https://dca.semanticarts.com/review](http://dca.semanticarts.com/review)

- monolith@HAL
- ~/Development/dca/dca/client/build/review
- Server Port: 4000 ??
- Username/Password: dca:semarts
- Repository: data-centric / ontoEdit-new
- /etc/nginx/sites-enabled/dca

[https://presenter.semanticarts.com](http://presenter.semanticarts.com)

- monolith@HAL
- ~/Development/Platts/dca/client/build
- Server Port: 4400
- Username/Password: goplatts:commodity
- Repository: [demo-catalog / msRiskSR] this seems obviously wrong… not sure where it is getting its repository info from
- /etc/nginx/sites-enabled/dca

[https://ms.semanticarts.com](http://ms.semanticarts.com)

- monolith@HAL
- ~/Development/dca/slow-reveal-morgan-stanley-risk/client/build/presenter
- Server Port: 4004
- Username/Password: morgan/stanley
- Repository: demo-catalog / msRiskSR
- /etc/nginx/sites-enabled/dca
