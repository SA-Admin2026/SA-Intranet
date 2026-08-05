---
title: "Threat Actor"
confluence_id: 3297935361
source: Threat-Actor_3297935361.html
---

# Threat Actor

## Current Model:

This is the current parti so far based on the research listed below and discussions at the OKE:

![image-20260429-004006.png](/offerings/attachments/3297935361/3311403010.png)

@prefix gist: <<https://w3id.org/semanticarts/ns/ontology/gist/>> .  
@prefix gistx: <<https://w3id.org/semanticarts/ns/taxonomy/gist>> .  
@prefix gist3: <<https://w3id.org/semanticarts/ns/triples/gist/>> .  
@prefix owl: <<http://www.w3.org/2002/07/owl#>> .  
@prefix rdf: <<http://www.w3.org/1999/02/22-rdf-syntax-ns#>> .  
@prefix rdfs: <<http://www.w3.org/2000/01/rdf-schema#>> .  
@prefix skos: <<http://www.w3.org/2004/02/skos/core#>> .  
@prefix bfo: <<http://purl.obolibrary.org/obo/bfo.owl>> .

gist:ThreatActor a gist:Actor  
; gist:isCategorizedBy gist:ThreatActorType  
; gist:executes gist:AttackPattern #predicate may need to be changed  
.

gistx:\_ThreatActorType\_Nation-State a gist:ThreatActorType .  
gistx:\_ThreatActorType\_Cybercriminal a gist:ThreatActorType .  
gistx:\_ThreatActorType\_Hacktivist a gist:ThreatActorType .  
gistx:\_ThreatActorType\_TerroristGroup a gist:ThreatActorType .  
gistx:\_ThreatActorType\_Thrill-Seeker a gist:ThreatActorType .  
gistx:\_ThreatActorType\_InsiderThreat a gist:ThreatActorType .

Notes:

Google AI:

A threat actor, or malicious actor, is any individual or group that intentionally causes harm to digital systems, networks, or data, ranging from opportunistic hackers to sophisticated nation-states. They exploit vulnerabilities to steal data, deploy ransomware, or spy on organizations. Common types include cybercriminals, nation-state actors, hacktivists, and insider threats.

**Key Types of Threat Actors**

- [**Cybercriminals**](https://www.google.com/search?q=Cybercriminals&oq=threat+actor+cyber+s&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjINCAgQABiGAxiABBiKBTIKCAkQABiABBiiBNIBCTgyNzJqMGoxNagCCLACAfEFVxhFADPeyy_xBVcYRQAz3ssv&sourceid=chrome&ie=UTF-8&ved=2ahUKEwi89Z707OGTAxWDMlkFHYaBH04QgK4QegYIAQgBEAM)**:** Motivated primarily by financial gain, using tactics like ransomware, phishing, and data theft.
- [**Nation-State Actors**](https://www.google.com/search?q=Nation-State+Actors&oq=threat+actor+cyber+s&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjINCAgQABiGAxiABBiKBTIKCAkQABiABBiiBNIBCTgyNzJqMGoxNagCCLACAfEFVxhFADPeyy_xBVcYRQAz3ssv&sourceid=chrome&ie=UTF-8&ved=2ahUKEwi89Z707OGTAxWDMlkFHYaBH04QgK4QegYIAQgBEAU)**:** Government-backed, highly sophisticated groups engaging in espionage, political disruption, or intellectual property theft.
- [**Hacktivists**](https://www.google.com/search?q=Hacktivists&oq=threat+actor+cyber+s&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjINCAgQABiGAxiABBiKBTIKCAkQABiABBiiBNIBCTgyNzJqMGoxNagCCLACAfEFVxhFADPeyy_xBVcYRQAz3ssv&sourceid=chrome&ie=UTF-8&ved=2ahUKEwi89Z707OGTAxWDMlkFHYaBH04QgK4QegYIAQgBEAc)**:** Individuals or groups acting on political or social causes to disrupt services or leak data.
- [**Insider Threats**](https://www.google.com/search?q=Insider+Threats&oq=threat+actor+cyber+s&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjINCAgQABiGAxiABBiKBTIKCAkQABiABBiiBNIBCTgyNzJqMGoxNagCCLACAfEFVxhFADPeyy_xBVcYRQAz3ssv&sourceid=chrome&ie=UTF-8&ved=2ahUKEwi89Z707OGTAxWDMlkFHYaBH04QgK4QegYIAQgBEAk)**:** Employees, contractors, or partners with legitimate access who misuse it for malicious purposes or cause leaks due to negligence.
- [**Thrill Seekers/Trolls**](https://www.google.com/search?q=Thrill+Seekers%2FTrolls&oq=threat+actor+cyber+s&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjINCAgQABiGAxiABBiKBTIKCAkQABiABBiiBNIBCTgyNzJqMGoxNagCCLACAfEFVxhFADPeyy_xBVcYRQAz3ssv&sourceid=chrome&ie=UTF-8&ved=2ahUKEwi89Z707OGTAxWDMlkFHYaBH04QgK4QegYIAQgBEAs)**:** Individuals acting for amusement or experimentation, often causing disruption without specific financial or political motives.

**Common Techniques**

- **Phishing & Social Engineering:** Tricking users into revealing credentials or installing malware.
- **Ransomware:** Encrypting data and demanding payment for its release.
- **Advanced Persistent Threats (APTs):** Stealthily infiltrating networks and remaining undetected for extended periods.
- **Distributed Denial of Service (DDoS):** Overwhelming systems to disrupt services.

**Motivations**

- **Financial Gain:** Theft of money, banking information, or selling data on the dark web.
- **Espionage:** Stealing classified, military, or proprietary information.
- **Disruption/Ideology:** Damaging reputation or stopping operations for political, social, or personal reasons.
- **Thrills/Reputation:** Proving skill or gaining notoriety in the hacking community.

Identifying the type of actor is critical for security teams (like those described on [Infosec Institute](https://www.infosecinstitute.com/resources/application-security/understanding-hackers-the-5-primary-types-of-external-attackers/)) to understand the threat’s motivation and prepare defenses accordingly.

Types of Threat Actors - Infosec

1. Casual hacker
2. Hacktivists
3. Corporate espionage
4. Organized crime
5. Nation-states

<https://www.infosecinstitute.com/resources/application-security/understanding-hackers-the-5-primary-types-of-external-attackers/>

IBM - This one has the most interesting information

<https://www.ibm.com/think/topics/threat-actor>

Threat actors, also known as cyberthreat actors or malicious actors, are individuals or groups that intentionally cause harm to digital devices or systems. Threat actors exploit vulnerabilities in computer systems, networks and software to perpetuate various [cyberattacks](https://www.ibm.com/think/topics/cyber-attack), including [phishing](https://www.ibm.com/think/topics/phishing), [ransomware](https://www.ibm.com/think/topics/ransomware) and [malware](https://www.ibm.com/think/topics/malware) attacks.

The term threat actor is broad and relatively all-encompassing, extending to any person or group that poses a threat to cybersecurity. Threat actors are often categorized into different types based on their motivation and to a lesser degree, their level of sophistication.

Types of Threat Actors:

- Cybercriminals

  - These individuals or groups commit cybercrimes mostly for financial gain. Common crimes that are committed by cybercriminals include ransomware attacks and phishing scams that trick people into making money transfers or divulging credit card information, login credentials, intellectual property or other private or sensitive information.
- Nation-state actors

  - Nation states and governments frequently fund threat actors with the goal of stealing sensitive data, gathering confidential information or disrupting another government’s critical infrastructure. These malicious activities often include espionage or cyberwarfare and tend to be highly funded, making the threats complex and challenging to detect.
- Hacktivists

  - These threat actors use hacking techniques to promote political or social agendas, such as spreading free speech or uncovering human rights violations. Hacktivists believe that they are affecting positive social change and feel justified in targeting individuals, organizations or government agencies to expose secrets or other sensitive information. A well-known example of a hacktivist group is Anonymous, an international hacking collective that claims to advocate for freedom of speech on the internet.
- Thrill Seekers

  - Thrill seekers are just what they sound like: they attack computer and information systems primarily for fun. Some want to see how much sensitive information or data they can steal. Others want to use hacking to better understand how networks and computer systems work. One class of thrill seekers, called script kiddies, lack advanced technical skills, but use preexisting tools and techniques to attack vulnerable systems, primarily for amusement or personal satisfaction. Though they don't always seek to cause harm, thrill seekers can still cause unintended damage by interfering with a network's cybersecurity and opening the door to future cyberattacks.
- Insider threats

  - Unlike most other actor types, insider threat actors do not always have malicious intent. Some hurt their companies through human error, such as by unwittingly installing malware or losing a company-issued device that a cybercriminal finds and uses to access the network. But malicious insiders do exist. For example, the disgruntled employee who abuses access privileges to steal data for monetary gain or inflicts damage to data or applications in retaliation for being passed over for promotion.
- Cyberterrorists

  - Cyberterrorists start politically or ideologically motivated cyberattacks that threaten or result in violence. Some cyberterrorists are nation-state actors; others are actors on their own or on behalf of a nongovernment group.

Threat actor tactics:

- Malware

  - Malware is malicious software that damages or disables computers. Malware is often spread through email attachments, infected websites or compromised software and can help threat actors steal data, take over computer systems and attack other computers. Types of malware include viruses, worms and Trojan horse viruses, which download onto computers disguised as legitimate programs.
- Ransomware

  - Ransomware is a type of malware that locks up the victim's data or device and threatens to keep it locked up—or worse—unless the victim pays a ransom to the attacker. Today most ransomware attacks are double-extortion attacks that also threaten to steal the victim's data and sell it or leak it online. According to the [IBM *X-Force® Threat Intelligence Index*](https://www.ibm.com/reports/threat-intelligence), ransomware attacks represent 20% of all malware attacks.

    Significant game hunting (BGH) attacks are massive and coordinated ransomware campaigns that target large organizations, including governments, major enterprises and critical infrastructure providers that have lots to lose from an outage and are more likely to pay a large ransom.
- Social Engineering

  - Phishing is one form of social engineering, a class of attacks and tactics that exploit feelings of fear or urgency to manipulate people into making other mistakes that compromise their personal or organizational assets or security. Social engineering can be as simple as leaving a malware-infected USB drive where someone finds it (because "hey, free USB drive!"), or as complex as spending months cultivating a long-distance romantic relationship with the victim in order to bilk them out of plane fare so they can "finally meet".

    Because social engineering exploits human weakness rather than technical vulnerabilities, it is sometimes called "human hacking".
- Denial of Service Attacks

  - This type of cyberattack works by flooding a network or server with traffic, making it unavailable to users. A [distributed denial-of-service (DDoS)](https://www.ibm.com/think/topics/ddos) attack marshalls a distributed network of computers to send the malicious traffic, creating an attack that can overwhelm the target faster and be more difficult to detect, prevent or mitigate.
- Advanced Persistent Threats

  - Advanced persistent threats (APTs) are sophisticated cyberattacks that span months or years rather than hours or days. APTs enable threat actors to operate undetected in the victim's network, infiltrating computer systems, conducting espionage and reconnaissance, escalating privileges and permissions (called *lateral movement)* and stealing sensitive data. Because they can be incredibly difficult to detect and relatively expensive to run, APTs are typically started by nation-state actors or other well-funded threat actors.
- Backdoor Attacks

  - A backdoor attack exploits an opening in an operating system, application or computer system that is not protected by an organization's cybersecurity measures. Sometimes, the backdoor is created by the software developer or hardware manufacturer to enable upgrades, bug fixes or (ironically) security patches; other times, threat actors create backdoors of their own using malware or by hacking the system. Backdoors allow threat actors to enter and exit computer systems undetected.

Threat Actors vs Cybercriminals vs Hackers (here, IBM interchanges ‘Threat Actors’ and ‘Cybercriminals’, when previously they said that a ‘Cybercriminal’ is a type of Threat Actor)

he terms threat actor, hacker and cybercriminal are often used interchangeably, especially in Hollywood and popular culture. But there are subtle differences in the meanings of each and their relationship to each other.

- Not all threat actors or cybercriminals are hackers. By definition, a hacker is someone with the technical skills to compromise a network or computer system. But some threat actors or cybercriminals don’t do anything more technical than leave an infected USB drive for someone to find and use, or send an email with a malware attached.
- Not all hackers are threat actors or cybercriminals. For example, some hackers, called ethical hackers, essentially impersonate cybercriminals to help organizations and government agencies test their computer systems for vulnerability to cyberthreats.
- Certain types of threat actors aren’t cybercriminals by definition or intent, but are in practice. For example, a thrill seeker who is "just having fun" might shut down a town’s electrical grid for a few minutes. Similarly, a hacktivist who exfiltrates and publishes confidential government information in the name of a noble cause can still be committing a cybercrime, regardless of their intentions or beliefs.

NOTE: Should we have a ‘Hacker’ category? Type of Actor or Agent? GistCyber **needs** some concept that covers both a person and an organization. From a cyber security point of view, they don’t know if it’s a person or organization that is exploiting a vulnerability in a system.

Maybe I’m biased, but I like how the government of Canada has laid out the types of threat actor by motivation. This help shore up the definition of threat actor categories:

![](/offerings/attachments/3297935361/3299377153.png)

Aside from motivation, there is another way to categorize threat actors, by sophistication. NOTE: I think sophistication would be another way to categorize threat actors but we might not want to focus on that until we start looking at the data. From a high level POV an executive may want to know the sophistication level of a threat actor for an ongoing cyber attack, as it may affect the controls implemented. Not sure how sophistication is categorized, may have to look this up in another spike.

Cyber threat actors are not equal in terms of capability and sophistication. They have a range of resources, training, and support for their activities. Cyber threat actors may operate on their own or as part of a larger organization (i.e., a nation-state intelligence program or organized crime group). Sometimes, sophisticated actors use readily available tools and techniques because they can still be effective for a given task and/or make it difficult for defenders to attribute the activity—for example, by leveraging the commercial security tools used by security researchers.

**Advanced persistent threats (APT)** refer to threat actors in the top tier of sophistication and skill. APTs are capable of using advanced techniques to conduct complex and protracted campaigns in the pursuit of their goals. This designator is usually reserved for nation-states or very proficient organized crime groups.

**State-sponsored cyber threat actors** operating on behalf of nation-states primarily use cyber threat activity to advance their geopolitical objectives. They are frequently the most sophisticated threat actors, with dedicated resources and personnel, and extensive planning and coordination. Nation-states without developed cyber programs can use commercial cyber tools and the growing global pool of talent to enable sophisticated cyber threat activity. Some nation-states also have operational relationships with private sector entities and organized criminals.

The activities of state-sponsored cyber threat actors may include espionage against governments, organizations, and individuals; prepositioning on or disrupting critical systems; influencing and shaping public discourse; or building networks of compromised devices to enable further cyber threat activity. State-sponsored cyber threat actors may also pursue financially motivated threat activity.

**Cybercriminals** are primarily financially motivated and vary widely in sophistication. Organized crime groups often have planning and support functions in addition to specialized technical capabilities that can affect a large number of victims. Illegal online markets for cyber tools and services have made cybercrime more accessible and allowed cybercriminals to conduct more complex and sophisticated campaigns.

**Hacktivists** carry out ideologically motivated cyber threat activity and are generally lower sophistication than state-sponsored cyber threat actors or organized cybercriminals. These actors, alongside terrorist groups and thrill-seekers, often rely on widely available tools that require little technical skill to deploy. Their actions often have no lasting effect on their targets beyond reputation, however, at times these actors have been able to inflict physical and financial damages on their targets.

**Insider threats** are individuals working within their organization who are particularly dangerous because of their access to internal networks that are protected by security perimeters. Insider threats are often disgruntled employees, and may be associated with any of the other listed types of threat actors.

<https://www.cyber.gc.ca/en/guidance/introduction-cyber-threat-environment>
