// Stuy Cybersecurity certification textbook data.
window.CERT_GUIDE = {
  "name": "ISC2 Certified in Cybersecurity Complete Textbook",
  "short": "ISC2 CC",
  "version": "Current outline: effective October 1, 2025 through August 31, 2026",
  "official": "https://www.isc2.org/certifications/cc/cc-certification-exam-outline",
  "subtitle": "A beginner-first course in security principles, resilience, access control, networks, and everyday security operations.",
  "notice": "Scheduling matters: this book follows the ISC2 CC outline currently tested through August 31, 2026 (26% Security Principles, 10% BC/DR/IR, 22% Access Controls, 24% Network Security, 18% Security Operations). ISC2 says a revised outline takes effect September 1, 2026. Candidates testing on or after that date should use ISC2’s upcoming outline as the final authority. Short “looking ahead” discussions introduce the AI-security themes ISC2 has announced, but they do not change the weights or structure of this current-outline book.",
  "parts": [
    {
      "title": "Domain 1: Security Principles",
      "weight": "26% of exam · current outline through August 31, 2026",
      "intro": "Security begins with clear goals, honest risk decisions, appropriate controls, sound governance, and professional responsibility. No previous technical experience is assumed.",
      "topics": [
        {
          "title": "What information security is protecting",
          "lead": "Security protects the ability of people and organizations to use information and systems with justified confidence.",
          "keyIdeas": [
            "Assets include information, technology, people, facilities, reputation, and processes",
            "A threat can exploit a vulnerability and create business impact",
            "Security supports a mission; it is not the mission by itself"
          ],
          "content": "An asset is anything the organization values. A customer database is an obvious asset, but so are the application that reads it, the employee who understands it, the building that houses equipment, the supplier that supports it, and the public trust that lets the organization operate. Information security protects these assets from events that would cause unacceptable harm. A threat is a possible cause of harm: a criminal, a dishonest insider, a fire, human error, or a failed component.\n\nA vulnerability is a weakness or condition that a threat can exploit. Risk exists when a credible threat can act on a vulnerability and produce an impact. A missing patch is a vulnerability, not automatically an incident. An attacker using that weakness is a threat event. Lost revenue, unsafe operation, or exposed personal data are impacts. Controls change risk. A lock reduces unauthorized physical entry.\n\nMultifactor authentication reduces the usefulness of a stolen password. A tested backup reduces the impact of data loss. No control makes an organization perfectly secure, and every control has cost, limitations, and assumptions. Good security work makes those tradeoffs visible. The first habit of a security professional is to ask what outcome the organization needs. A hospital values the availability and integrity of clinical systems; a school must also protect student privacy; a bank needs reliable records and proof of transactions.\n\nThe same technology can deserve different protection in different contexts. Security is therefore a form of risk management in service of real people and operations. Think in systems rather than isolated devices. A payroll service depends on identity, DNS, endpoints, a bank connection, staff, power, backups, and suppliers. A weakness in any dependency can affect the service. Asset inventories therefore record owners, purpose, data, criticality, location, support dates, and upstream and downstream dependencies.",
          "practical": "For a school learning platform, list five assets, one threat and vulnerability pair for each, the resulting impact, and a reasonable control. Avoid naming a product until the security need is clear.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Confidentiality, integrity, and availability",
          "lead": "The CIA triad is a compact way to describe the three central properties that information and systems need.",
          "keyIdeas": [
            "Confidentiality limits disclosure to authorized parties",
            "Integrity protects correctness, completeness, and authorized change",
            "Availability provides reliable, timely access to authorized users"
          ],
          "content": "Confidentiality means information is not disclosed to people, processes, or systems that lack authorization. Access controls, encryption, private spaces, clean-desk practices, and careful conversations all support it. Confidentiality is broader than secrecy: a public announcement has little confidentiality need, while a student health record has a high one. Integrity means information and systems remain accurate, complete, and changed only in authorized ways.\n\nHashes can reveal that a file changed; digital signatures can help identify who approved content; input validation can prevent unsafe data from entering an application; separation of duties can prevent one person from creating and approving a payment.\n\nIntegrity also matters to availability: a system returning dangerously false information is not truly useful. Availability means authorized users can obtain information and service when needed. Redundant equipment, backups, capacity planning, maintenance, monitoring, alternate sites, and protection from denial-of-service all contribute. Availability requirements are contextual. An emergency dispatch system may tolerate seconds of interruption, while a monthly archive may tolerate hours.\n\nControls often support more than one goal and can create tradeoffs.\n\nEncryption protects confidentiality, but lost keys can destroy availability. Aggressive account lockout can slow password guessing but can also let an attacker deny service by triggering lockouts. A rushed availability fix that bypasses change review may weaken integrity. When a scenario asks which principle is affected, identify the direct property: unauthorized viewing affects confidentiality, unauthorized alteration affects integrity, and inability to use a service affects availability.\n\nPriorities change with the scenario. Emergency instructions may favor availability, while the accuracy of a medication order makes integrity central. A public report has low confidentiality after publication but may have high integrity needs. State the consequence and time requirement before selecting the “most important” property.",
          "practical": "Read three short news reports about technology failures. For each, identify the primary CIA property affected, any secondary property, and one control that could reduce harm.",
          "tables": [
            {
              "title": "CIA examples",
              "headers": [
                "Property",
                "Loss",
                "Supporting controls"
              ],
              "rows": [
                [
                  "Confidentiality",
                  "Unauthorized disclosure",
                  "Access control, encryption, privacy screens"
                ],
                [
                  "Integrity",
                  "Unauthorized or accidental change",
                  "Hashes, signatures, validation, approvals"
                ],
                [
                  "Availability",
                  "Service or data cannot be used",
                  "Redundancy, backups, capacity, recovery"
                ]
              ]
            }
          ],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Authentication, non-repudiation, and privacy",
          "lead": "Security needs ways to establish identity, support accountability, and treat personal information responsibly.",
          "keyIdeas": [
            "Identification makes a claim; authentication tests it; authorization grants allowed actions",
            "Non-repudiation uses reliable evidence so an action cannot credibly be denied",
            "Privacy concerns appropriate collection and use of personal information, not only secrecy"
          ],
          "content": "A user first identifies themselves: perhaps with a username, and then authenticates by presenting evidence. Factors are commonly grouped as something you know, have, are, do, or somewhere you are. Multifactor authentication uses independent factors from different categories. A password and PIN are two secrets but still one factor type. After authentication, authorization decides which resources and actions are permitted.\n\nAccounting records relevant activity. Authentication strength depends on the complete process: enrollment, credential storage, login, recovery, replacement, and removal.\n\nA strong login is undermined by a help desk that resets accounts after answering public questions. Phishing-resistant methods reduce the chance that a user can accidentally hand an attacker a reusable secret. Biometrics are convenient but cannot be replaced like a password and should be stored as protected templates rather than ordinary images. Non-repudiation is assurance that a party cannot plausibly deny an action.\n\nDigital signatures can bind a private key to signed data when keys and identities are properly managed.\n\nTime stamps, transaction records, witnesses, and tamper-evident logs can support accountability. A simple password login usually does not create strong non-repudiation because passwords can be shared or stolen. Privacy asks whether personal information is collected, used, shared, retained, and deleted appropriately. A system can preserve confidentiality while violating privacy: for example, an organization might securely collect more location data than it needs.\n\nData minimization, purpose limitation, notice, choice where appropriate, access controls, retention limits, and accurate records support privacy.\n\nSecurity professionals follow organizational and legal processes rather than inventing privacy rules on their own. Accountability requires unique identities, protected logs, synchronized time, and review. A log entry is not automatically trustworthy if administrators can alter it or accounts are shared. Privacy also applies to monitoring: collect security telemetry for a defined purpose, limit access, avoid unnecessary content, and retain it only as justified.",
          "practical": "Draw the lifecycle of a new employee identity from proofing and enrollment through role changes, recovery, and termination. Mark where authentication, authorization, accounting, privacy, and non-repudiation apply.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "Two credentials are not necessarily two factors. Look for independent categories, such as a password plus a hardware authenticator."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Risk identification, assessment, and treatment",
          "lead": "Risk management chooses what to protect first and what residual uncertainty the organization is willing to carry.",
          "keyIdeas": [
            "Risk combines likelihood and impact in context",
            "Risk appetite is broad direction; tolerance defines acceptable variation",
            "Treatment options include mitigate, avoid, transfer, and accept"
          ],
          "content": "Risk identification begins with assets, business processes, dependencies, threats, vulnerabilities, existing controls, and possible consequences. Sources include interviews, inventories, assessments, incidents, audits, threat reports, and change proposals. Hidden dependencies matter: a public website may depend on identity, name resolution, cloud, power, and a supplier. Qualitative assessment uses categories such as low, medium, and high. Quantitative assessment estimates values, although uncertainty remains.\n\nA common conceptual formula is likelihood multiplied by impact.\n\nFor financial examples, single loss expectancy estimates one event's cost, annual rate of occurrence estimates frequency, and annual loss expectancy multiplies them. These numbers are estimates for decisions, not promises about the future. Risk appetite is the broad amount and type of risk leadership is prepared to pursue or retain. Tolerance establishes acceptable boundaries for a particular objective. A control reduces inherent risk to residual risk.\n\nIf residual risk remains unacceptable, the organization can mitigate it further, avoid the activity, transfer part of the consequence through a contract or insurance, or have an authorized owner accept it. Buying insurance does not transfer every operational or reputational effect. Assessment is continuous because assets, attackers, technology, and business goals change. A risk register records the risk statement, owner, assessment, controls, treatment, due dates, and status.\n\nThe person who discovers a risk does not silently accept it. An accountable business owner makes that decision under governance. A useful risk statement follows cause, event, and consequence: “Because former contractors retain remote access, a compromised old account could enter the support portal and expose customer records.” That form is easier to own and treat than “access-control risk.” Record uncertainty openly instead of hiding weak estimates behind precise numbers.",
          "practical": "Create a five-entry risk register for a small club website. Write each risk as cause, event, and impact; assign likelihood and impact; choose treatment; and name the owner and follow-up date.",
          "tables": [
            {
              "title": "Risk responses",
              "headers": [
                "Response",
                "What it does",
                "Simple example"
              ],
              "rows": [
                [
                  "Mitigate",
                  "Reduces likelihood or impact",
                  "Require MFA"
                ],
                [
                  "Avoid",
                  "Stops the risky activity",
                  "Retire an unnecessary public service"
                ],
                [
                  "Transfer",
                  "Shifts specified consequence",
                  "Contract or insurance"
                ],
                [
                  "Accept",
                  "Authorized owner retains residual risk",
                  "Document and monitor a low-impact issue"
                ]
              ]
            }
          ],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Administrative, technical, and physical controls",
          "lead": "Controls can be classified by how they are implemented and by the purpose they serve.",
          "keyIdeas": [
            "Administrative controls direct people and process",
            "Technical controls are implemented through systems",
            "Physical controls protect facilities, equipment, and people"
          ],
          "content": "Administrative controls include policy, hiring practices, background checks where lawful, training, risk assessment, change approval, vendor management, and incident plans. Technical controls include authentication, encryption, firewalls, endpoint protection, backups, and logging. Physical controls include locks, fences, guards, lighting, cameras, barriers, environmental systems, and fire suppression. A badge policy is administrative; the electronic badge reader is technical and physical; the door and turnstile are physical.\n\nControls are also described by function.\n\nPreventive controls try to stop an event, such as least privilege or a locked door. Detective controls reveal it, such as alarms and logs. Corrective controls fix a condition after discovery, such as applying a patch. Deterrent controls discourage behavior through visible cameras or sanctions. Compensating controls provide alternative protection when the normal control is impractical. Recovery controls restore capability, such as backups and alternate systems.\n\nOne control can serve several functions depending on use. Defense in depth combines independent layers so one failure does not expose the asset. Layers should address people, process, technology, and physical space. Ten overlapping antivirus products are not ten meaningful layers. A stronger design might use secure configuration, limited privilege, network segmentation, application control, monitoring, and tested recovery. Control selection follows risk and feasibility.\n\nConsider effectiveness, coverage, maintenance, usability, failure mode, evidence, and side effects.\n\nA preventive control that users constantly bypass may be weaker than a usable layered design. Controls require owners and testing; the existence of a policy or appliance does not prove protection is operating. Controls should be tested against their objective. A locked door is preventive only while hinges, keys, walls, emergency exits, and visitor processes support it. A backup is a recovery control only when it can be restored.\n\nEvidence of installation is not evidence of effectiveness.",
          "practical": "Classify twelve controls in your school or home by implementation type and function. Find two gaps where one layer is carrying too much responsibility.",
          "tables": [
            {
              "title": "Control functions",
              "headers": [
                "Function",
                "Purpose",
                "Example"
              ],
              "rows": [
                [
                  "Preventive",
                  "Stop an event",
                  "Least privilege"
                ],
                [
                  "Detective",
                  "Discover an event",
                  "Alarm or log review"
                ],
                [
                  "Corrective",
                  "Fix a condition",
                  "Patch"
                ],
                [
                  "Deterrent",
                  "Discourage behavior",
                  "Warning sign"
                ],
                [
                  "Compensating",
                  "Alternative protection",
                  "Segmentation when patching is delayed"
                ],
                [
                  "Recovery",
                  "Restore capability",
                  "Tested backup"
                ]
              ]
            }
          ],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Governance documents, laws, and organizational responsibility",
          "lead": "Governance turns leadership intent into consistent expectations and accountable action.",
          "keyIdeas": [
            "Policies state mandatory direction; standards define mandatory specifics",
            "Procedures give steps; guidelines give recommended flexibility",
            "Laws, regulations, contracts, and internal policy have different sources of authority"
          ],
          "content": "A policy is a high-level, mandatory statement of management intent: for example, access must be based on business need. A standard turns policy into specific mandatory requirements, such as minimum authentication settings. A procedure gives the ordered steps for a task, such as offboarding an account. A guideline recommends a useful approach when judgment is allowed. A baseline is an approved starting configuration or minimum level.\n\nDocuments should have an owner, approver, scope, version, effective date, review schedule, enforcement, and exception process. They must agree with one another. A procedure cannot quietly weaken a policy. Exceptions identify scope, reason, controls, authorized approver, residual risk, and expiration. Training and accessible language help people follow the documents; monitoring and consequences make them more than paperwork. Law is enacted by a government.\n\nRegulations are detailed rules issued under authority.\n\nContracts create obligations among parties. Industry standards may be voluntary until adopted by law, contract, or policy. Jurisdiction, data type, sector, and location matter. Security staff identify facts and preserve evidence, while qualified legal and privacy professionals interpret obligations. Governance also assigns roles. Senior leadership remains accountable for organizational risk. Data owners classify information and decide access needs. Custodians operate systems and safeguards.\n\nUsers follow requirements and report problems.\n\nSecurity advises, monitors, and responds but does not own every business decision. Clear separation prevents a technician from being forced to accept risk that belongs to management. Trace daily work upward: a procedure implements a standard, the standard supports policy, and policy supports business and authoritative requirements. When documents conflict, staff should not quietly choose whichever is easiest. Escalate to the accountable owner and preserve the decision so later workers receive consistent direction.",
          "practical": "Write a policy, standard, procedure, and guideline for account offboarding. Make the hierarchy visible and add an exception that expires rather than silently changing the rule.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "Policy and standards are mandatory; a guideline is recommended. A procedure is the step-by-step “how.”"
          ],
          "practiceQuestions": []
        },
        {
          "title": "Professional ethics and responsible security work",
          "lead": "Cybersecurity professionals receive unusual access and must use it lawfully, competently, and in the public interest.",
          "keyIdeas": [
            "ISC2 canons are ordered: society and public trust come first",
            "Authorization defines the boundary of testing and investigation",
            "Competence includes recognizing limits and escalating appropriately"
          ],
          "content": "ISC2’s Code of Ethics canons are presented in priority order: protect society, the common good, necessary public trust and confidence, and infrastructure; act honorably, honestly, justly, responsibly, and legally; provide diligent and competent service to principals; and advance and protect the profession. A principal may be an employer or client, but service to that principal does not override public safety or law. Authorization is essential.\n\nThe ability to scan, access, or change a system is not permission. Before security testing, establish written scope, allowed techniques, time, contacts, data handling, and emergency stop. If a junior analyst sees information outside scope, they should stop, preserve only what policy requires, and escalate. Curiosity is not a defense for unauthorized access. Competence means working carefully within training and experience.\n\nAsk for help when an action may destroy evidence, interrupt a critical service, or create legal exposure.\n\nKeep accurate records, protect confidential information, avoid conflicts of interest, and distinguish fact from inference. Do not exaggerate a vulnerability or hide an error. Correcting the record is a professional act. Looking ahead to the September 2026 outline, ISC2 has announced more explicit AI-security themes. The same ethics apply: do not paste confidential data into an unapproved AI service, treat generated output as untrusted until verified, consider bias and transparency, and keep a human accountable for consequential decisions.\n\nAn automated recommendation does not transfer professional responsibility to a tool. Competence includes recognizing limits. A beginner should not improvise malware analysis, legal conclusions, or production penetration tests. Preserve facts, protect confidential information, use approved escalation, and ask for qualified help. Ethical restraint is a professional skill, not a lack of initiative.",
          "practical": "For an ethical scenario, identify affected people, authorization, applicable canons in order, evidence, possible harm, and the safest escalation. Explain why technical capability does not grant permission.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "When canons appear to conflict, protect society and the common good before service to an employer or client."
          ],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Domain 2: Business Continuity, Disaster Recovery, and Incident Response Concepts",
      "weight": "10% of exam · current outline through August 31, 2026",
      "intro": "Resilience keeps essential work going, restores technology in a planned order, and responds to security events without improvising authority during a crisis.",
      "topics": [
        {
          "title": "Resilience and the differences among BC, DR, and IR",
          "lead": "Business continuity, disaster recovery, and incident response overlap, but each answers a different question.",
          "keyIdeas": [
            "BC sustains essential business processes",
            "DR restores technology and data after disruption",
            "IR handles suspected or confirmed security incidents"
          ],
          "content": "Business continuity asks how essential operations will continue during disruption. A school might use printed attendance lists and alternate communication when its student system is unavailable. Disaster recovery is the technology-focused effort to restore systems, data, facilities, and connectivity. Incident response identifies, contains, eradicates, and learns from security events. One event can activate all three. Plans connect to crisis management, emergency response, safety, vendor management, and communications.\n\nLife safety comes first. A building fire may begin with evacuation, trigger continuity from another location, require disaster recovery for damaged equipment, and start incident response if evidence suggests arson or sabotage. A ransomware event may require incident containment while continuity uses manual procedures and recovery restores trusted systems. Roles, authority, contacts, dependencies, alternate methods, communications, resources, and activation criteria should be decided before disruption.\n\nPlans must be stored where they remain reachable if normal identity or file services fail. Copies need protection because they reveal sensitive contacts and architecture. Resilience is not simply redundancy. Two servers in one flood zone share a failure. Two internet circuits in the same conduit may not be independent. Identify common dependencies such as power, DNS, cloud region, identity, suppliers, and key people.\n\nExercises reveal whether an apparently separate backup or process actually survives the same event.\n\nOne event can activate all three disciplines. Ransomware creates an incident requiring investigation and containment, a continuity problem requiring alternate work, and a recovery problem requiring trustworthy restoration. Coordinated leadership prevents one team from rebuilding a system while another still needs its volatile evidence.",
          "practical": "Choose one essential school or club process and describe how BC keeps it running, DR restores its technology, and IR would act if the disruption were malicious.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Business impact analysis, RTO, RPO, and recovery priorities",
          "lead": "A business impact analysis identifies what must recover, how quickly, with how much data loss, and in what dependency order.",
          "keyIdeas": [
            "RTO is the target time to restore service",
            "RPO is the acceptable amount of data loss measured in time",
            "Recovery priorities come from business impact and dependencies"
          ],
          "content": "A business impact analysis gathers essential processes, owners, peak periods, technology and supplier dependencies, required people and facilities, and consequences of interruption over time. Impacts can be financial, operational, legal, contractual, reputational, and related to health or safety. The analysis informs recovery strategies and spending. Recovery time objective is the target elapsed time for restoring a process or system after disruption.\n\nRecovery point objective is the maximum acceptable data loss measured backward from the event.\n\nIf backups occur every four hours, an RPO of one hour is unlikely without another replication method. Maximum tolerable downtime is the point at which harm becomes unacceptable; planned RTO should fit inside it and allow for uncertainty. Recovery must follow dependencies. Restoring an application before identity, network, name resolution, database, or encryption keys may accomplish nothing. Business owners set needs; technical teams explain feasibility and cost.\n\nA zero RTO or RPO requires expensive continuous design and may still be unrealistic. Metrics are targets, not guarantees. Testing measures actual recovery time and data state. When business requirements change, the BIA and strategies change with them. Upcoming AI-focused continuity considerations follow the same logic: protect required training data, model or service configuration, integrations, and a safe fallback if model performance drifts or a provider is unavailable.\n\nRecovery order follows business dependencies, not a list of servers. Restoring an application before identity, keys, DNS, network, and its database may accomplish nothing. Document peak periods, manual workarounds, safety needs, supplier commitments, and how impact grows over time.",
          "practical": "Draw a dependency map for an online learning system. Assign justified RTO and RPO values, then explain why each value is a business decision rather than an IT guess.",
          "tables": [
            {
              "title": "Recovery terms",
              "headers": [
                "Term",
                "Question"
              ],
              "rows": [
                [
                  "RTO",
                  "How quickly must service return?"
                ],
                [
                  "RPO",
                  "How much recent data can be lost?"
                ],
                [
                  "MTD",
                  "How long before interruption becomes intolerable?"
                ],
                [
                  "BIA",
                  "Which processes matter, what do they depend on, and what is the impact?"
                ]
              ]
            }
          ],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Continuity strategies and plan testing",
          "lead": "A continuity plan turns recovery requirements into alternate people, places, processes, technology, and suppliers.",
          "keyIdeas": [
            "Strategies address people and process as well as systems",
            "Alternate sites differ in readiness and cost",
            "Exercises progress from discussion to realistic operation"
          ],
          "content": "Continuity strategies include remote work, alternate facilities, reciprocal arrangements, manual procedures, cross-trained staff, spare equipment, redundant communications, diversified suppliers, and prewritten public or customer messages. A hot site is highly prepared and can operate quickly; a warm site has some equipment and data but needs setup; a cold site provides space and basic infrastructure and takes longer. Cloud services can support resilience but still have regional, identity, network, and provider dependencies.\n\nPlans contain activation and deactivation authority, roles, contact methods, process steps, required records, alternate suppliers, communication, and return-to-normal criteria. They should account for inaccessible staff, power failure, transportation, damaged facilities, and unavailable primary communications. Manual workarounds must preserve integrity and privacy; handwritten records later need controlled reconciliation. A checklist review confirms that documents are complete. A tabletop walks participants through decisions.\n\nA walkthrough or simulation tests procedures in a controlled way.\n\nParallel tests run alternate capability alongside production. Full-interruption tests are the most realistic and disruptive. Select a method proportionate to risk and never perform a damaging test without approval. Every exercise defines objectives and success evidence, records observations, and assigns improvements. Calling a phone number, restoring a sample, or processing a transaction is stronger evidence than asking whether someone believes it would work.\n\nRetest major corrections.\n\nExercises range from document review and tabletop discussion to simulation, parallel operation, and carefully controlled interruption. Each has a purpose and risk. An exercise is complete only when findings receive owners, resources, deadlines, and a later check that the correction worked.",
          "practical": "Conduct a tabletop in which the normal building and email are unavailable. Test alternate communication, decision authority, privacy of manual records, and return-to-normal reconciliation.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "Hot sites provide the fastest recovery and highest cost; cold sites provide the least immediate capability and take longest."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Disaster recovery, backups, and restoration",
          "lead": "Backups create recovery options only when copies are protected, complete, and successfully restored in tests.",
          "keyIdeas": [
            "Full, incremental, and differential backups trade time and storage",
            "Offline or immutable copies resist alteration",
            "Restoration testing is the proof that a backup strategy works"
          ],
          "content": "A full backup copies the selected data set. An incremental backup copies changes since the most recent backup of any type, which saves space and time but may require a chain for restoration. A differential backup copies changes since the last full backup, growing until the next full but generally simplifying restoration. Snapshots preserve a point-in-time state but may share the same platform and are not automatically independent backups.\n\nThe 3-2-1 idea recommends at least three copies, on two media or systems, with one off-site; modern ransomware planning also emphasizes offline or immutable copies and verified recovery. Encrypt sensitive backups, protect the keys separately, limit backup-administration privilege, monitor deletion or policy changes, and define retention. Replication improves availability but can quickly copy corruption or malicious encryption. A recovery plan inventories systems, dependencies, recovery order, responsible people, installation sources, configuration, keys, network requirements, validation, and communication.\n\nBefore restoration after compromise, choose a point known or reasonably believed to precede the attack and inspect it in a controlled environment. Update vulnerable configuration and credentials before reconnecting. Tests range from file restoration to full service recovery at an alternate location. Measure achieved RTO and RPO, application correctness, security logging, permissions, and business transactions. Document gaps and update both technology and plans.\n\nA green backup job status proves that data was written, not that it is complete or usable.\n\nReplication is not historical backup: it can copy corruption and deletion immediately. Protect backup consoles, credentials, catalogs, keys, and deletion APIs because attackers target them. A restoration test should verify data age, application consistency, dependencies, access, performance, and elapsed time against RTO and RPO.",
          "practical": "Back up a disposable folder, alter and delete files, then restore to a separate location. Compare hashes and document elapsed time, missing data since the backup, and access permissions.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Verify a small backup and recovery cycle.",
            "environment": "A disposable folder and two separate storage locations.",
            "steps": [
              "Create sample files and record hashes.",
              "Take a backup and protect one copy from ordinary modification.",
              "Change and delete source files.",
              "Restore to a new location rather than overwriting the evidence.",
              "Compare content, hashes, permissions, and timestamps."
            ],
            "expected": "The selected recovery point is usable and its data loss is understood.",
            "verification": "Recorded hashes match the intended version and the procedure can be repeated."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Incident response from preparation through lessons learned",
          "lead": "Incident response manages security events in a controlled sequence while facts and priorities change.",
          "keyIdeas": [
            "Preparation enables every later phase",
            "Detection and analysis establish credibility and scope",
            "Containment, eradication, recovery, and lessons learned have different goals"
          ],
          "content": "Preparation establishes policy, plans, roles, contacts, logging, tools, access, evidence storage, training, and exercises. Detection and analysis begins when a person or tool reports suspicious activity. Analysts validate the signal, estimate scope and impact, assign severity, preserve evidence, and escalate. An event is an observable occurrence; an incident is an event or series that threatens security and requires response. Containment limits harm.\n\nIt may isolate a device, disable an account, block a connection, or restrict a service.\n\nShort-term containment buys time; longer-term containment supports safe operation during repair. Eradication removes malicious artifacts, persistence, vulnerable entry points, and compromised credentials. Recovery restores trusted service, verifies function and monitoring, and watches for recurrence. Lessons learned reconstruct what happened, what helped or hindered response, root causes and contributing conditions, and improvements. The review should be factual and blameless while still assigning corrective-action owners.\n\nIncident documentation records time, source, action, decision, evidence, and handler.\n\nChain of custody tracks who controlled evidence and helps show it remained intact. Entry-level staff follow playbooks, preserve originals, communicate through approved channels, and avoid destructive improvisation. If an automated or AI-assisted tool recommends containment, a human still validates context and authorization. Speed matters, but an incorrect action can destroy evidence or interrupt a critical service. Containment choices are contextual.\n\nIsolating a host may stop spread but interrupt care or destroy remote visibility.\n\nDisabling an account may break automation. The incident lead balances harm, evidence, and continuity under defined authority, then records defensive actions in the same timeline as attacker activity.",
          "practical": "For a stolen laptop, write the first five response actions. Separate life safety, containment, evidence, privacy assessment, and recovery; state who authorizes each consequential step.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "Containment limits ongoing harm; eradication removes the cause or persistence; recovery returns trusted service."
          ],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Domain 3: Access Controls Concepts",
      "weight": "22% of exam · current outline through August 31, 2026",
      "intro": "Access control decides who or what may enter a space, use a system, read information, or perform an action, and creates evidence that the decision was enforced.",
      "topics": [
        {
          "title": "The access control lifecycle and AAA",
          "lead": "Access is managed from identity proofing and approval through changes, review, and removal.",
          "keyIdeas": [
            "Identification, authentication, authorization, and accounting are distinct steps",
            "Subjects act on objects under rules",
            "Joiner, mover, and leaver processes keep access aligned with need"
          ],
          "content": "A subject is an active entity requesting access, such as a user, process, or service account. An object is the resource being accessed, such as a file, application, room, or database record. An access control system evaluates a subject, an object, an action, and context against policy. Identification is the identity claim. Authentication tests evidence supporting the claim. Authorization determines allowed actions.\n\nAccounting records relevant activity.\n\nThese are often abbreviated IAAA or AAA. If a user successfully signs in but cannot open payroll, authentication succeeded and authorization denied the request. If the system cannot show who changed a record, accounting or identity design may be weak. Identity proofing establishes who a person or entity is before credential enrollment. Provisioning creates access after approval. Periodic review confirms continuing need.\n\nA mover process changes access as jobs change; simply adding new rights creates privilege accumulation.\n\nA leaver process disables access promptly, revokes sessions and tokens, recovers physical credentials, transfers owned information, and preserves required records. Human accounts, service accounts, devices, APIs, and upcoming AI agents all need ownership and lifecycle management. Shared accounts weaken accountability. Emergency or break-glass accounts need strong protection, monitoring, limited use, and review. Access should default to denied unless explicitly permitted, and temporary access should expire automatically when possible.\n\nProvisioning should begin from an authoritative source and end with verified removal. Movers often accumulate more access than leavers because old permissions are not removed. Non-human identities: services, APIs, devices, and automation: also need owners, narrow purpose, credential rotation, monitoring, and retirement.",
          "practical": "Diagram the lifecycle of a student, teacher, service account, and visitor badge. Name the approver, authenticator, allowed resources, logs, review, and termination event for each.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Physical access controls and environmental design",
          "lead": "Physical security uses layered boundaries, observation, and safe facility design to protect people and assets.",
          "keyIdeas": [
            "Badges, locks, guards, barriers, and mantraps control entry",
            "Cameras, alarms, logs, and guards provide monitoring",
            "Safety and emergency egress take priority over asset protection"
          ],
          "content": "Physical access commonly follows zones: public, reception, employee, restricted, and highly restricted. Perimeter fences, lighting, bollards, landscaping, and controlled vehicle entry deter or channel approach. Doors, locks, turnstiles, badge readers, guards, and mantraps limit entry. A mantrap uses two interlocking doors so only one opens at a time, but its design must meet fire and life-safety requirements. Badges should identify authorization without unnecessarily exposing personal information.\n\nAnti-passback can discourage one badge from admitting several people. Tailgating is following an authorized person without separate permission; piggybacking sometimes describes entry with that person's awareness. Employees should challenge or report safely according to policy rather than creating confrontation. CCTV, alarms, motion sensors, visitor logs, guards, and access logs are detective controls. Cameras need appropriate placement, retention, time synchronization, privacy handling, and review.\n\nA camera that nobody monitors may provide later evidence but little immediate prevention.\n\nGuards add judgment and response but require training and clear procedures. Environmental controls protect equipment and people from power loss, heat, humidity, water, smoke, and fire. Uninterruptible power supplies bridge brief loss and support safe shutdown; generators support longer outages. HVAC maintains suitable temperature and humidity. Water sensors, clean-agent or appropriate fire suppression, raised placement, and redundant utilities reduce facility risk.\n\nControls must fit the hazard: protecting equipment must never endanger occupants.\n\nPhysical security begins outside the equipment room with site hazards, lighting, barriers, entry, surveillance, and response. Inside, power, cooling, fire detection, water, and cable paths support availability. Life safety and accessible emergency exit always take priority over protecting equipment.",
          "practical": "Walk through a building entrance and server-room path on paper. Mark deterrent, preventive, detective, corrective, and safety controls, then identify one single point of failure.",
          "tables": [
            {
              "title": "Physical control examples",
              "headers": [
                "Goal",
                "Examples"
              ],
              "rows": [
                [
                  "Delay or prevent",
                  "Locks, barriers, turnstiles, mantraps"
                ],
                [
                  "Detect",
                  "Cameras, alarms, access logs, guards"
                ],
                [
                  "Protect environment",
                  "UPS, generator, HVAC, water detection, fire suppression"
                ],
                [
                  "Manage people",
                  "Badges, visitor escort, reception, sign-in"
                ]
              ]
            }
          ],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Logical access control models: DAC, MAC, and RBAC",
          "lead": "Access control models describe where authority comes from and how permissions are assigned.",
          "keyIdeas": [
            "DAC gives resource owners discretion",
            "MAC applies centrally controlled labels and clearances",
            "RBAC assigns permissions through job roles"
          ],
          "content": "Discretionary access control allows the owner of an object to grant permissions to other subjects. Familiar file-sharing permissions often behave this way. DAC is flexible but can spread access through careless sharing. Ownership and permission review are important. Mandatory access control applies centrally defined security labels to objects and clearances to subjects. Users cannot simply share around the policy. A system may require the subject's clearance to dominate the object's classification and apply need-to-know compartments.\n\nMAC is associated with highly controlled military or government environments, though label-based controls appear elsewhere. Role-based access control assigns permissions to roles that reflect job functions, and users receive roles. A help-desk role might reset ordinary user passwords but not change financial permissions. RBAC simplifies administration when jobs are stable, but poorly designed roles become overbroad. Role engineering, owner approval, and review prevent “everyone” roles from accumulating power.\n\nRule-based controls make decisions from system rules, such as a firewall allowing a protocol or an access system denying entry after hours. Attribute-based access control evaluates subject, object, action, and environment attributes: department, data classification, device health, location, and time. The current CC objective emphasizes DAC, MAC, and RBAC, but recognizing rules and attributes helps connect theory to modern systems.\n\nModels can coexist. A cloud application may assign RBAC roles, use attributes for context, and let a document owner share within policy.\n\nOn exam scenarios, identify the source of authority: owner discretion indicates DAC, central labels indicate MAC, and job-function roles indicate RBAC. Attribute-based decisions can supplement these models by considering user, resource, action, device, location, and time. Whatever the model, the policy decision needs reliable attributes and enforcement at the resource. A hidden button is not authorization if the server still accepts the request.",
          "practical": "Model access to a school gradebook using DAC, MAC, and RBAC separately. Explain who can grant access, how permissions change, and the main operational tradeoff of each.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "Owner decides: DAC. Central classification labels decide: MAC. Job role decides: RBAC."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Least privilege, need to know, and separation of duties",
          "lead": "Access design limits both ordinary mistakes and deliberate abuse by narrowing authority and dividing sensitive actions.",
          "keyIdeas": [
            "Least privilege grants only the permissions needed for the task",
            "Need to know narrows access even when clearance exists",
            "Separation of duties prevents one person from completing a sensitive process alone"
          ],
          "content": "Least privilege applies to users, administrators, applications, services, devices, and automated agents. Grant the minimum operations, resources, duration, and context required. Ordinary work should use a nonadministrative account; privileged work should use a separate controlled path. Just-in-time access provides elevated permission only when approved and needed, while just-enough administration limits the available actions. Need to know is a business requirement for specific information.\n\nA person may have a high clearance but no need to see an unrelated case.\n\nDefault deny, role design, data classification, and owner approval support this principle. Periodic access reviews remove rights that no longer correspond to work. Separation of duties divides critical steps. One person requests a payment, another approves it, and perhaps a third releases it. Dual control requires two people to perform or approve an action. Job rotation and mandatory vacation can expose hidden fraud or fragile dependence by requiring another person to perform the work.\n\nThese controls can conflict with convenience and emergency response. Break-glass access may bypass normal delay to protect life or service, but it should be limited, strongly authenticated, logged, and reviewed. Collusion can defeat separation of duties, so monitoring and independent review remain important. Apply controls proportionately: forcing four approvals for a harmless change may encourage bypass, while one person controlling payroll creation and payment presents obvious risk.\n\nTemporary and just-in-time privilege reduce how long powerful access exists. Dual control requires two people to participate; split knowledge ensures neither holds the whole secret. Emergency access remains necessary for availability but should be separately protected, monitored, and reviewed immediately after use.",
          "practical": "Take five powerful tasks: creating users, changing grades, releasing payment, deleting backups, and deploying code, and design least privilege and separation of duties for each.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Authentication methods and multifactor design",
          "lead": "Authentication is strongest when factor choice, enrollment, recovery, storage, and monitoring form one trustworthy system.",
          "keyIdeas": [
            "Knowledge, possession, inherence, behavior, and location are factor categories",
            "MFA requires different independent categories",
            "Passwordless and federation change how credentials are presented but do not remove identity risk"
          ],
          "content": "Something you know includes passwords and PINs. Something you have includes a hardware token, smart card, or protected authenticator device. Something you are includes biometrics. Behavioral factors may include typing patterns, and somewhere you are uses location. Context such as device health or time can influence risk decisions but is not always an independent authentication factor. Good password systems favor long, unique passwords, block known-compromised choices, store verifiers with salted slow hashing, rate-limit guessing, and support password managers.\n\nFrequent arbitrary changes can encourage predictable patterns; change when compromise or policy requires. Never store plaintext passwords. MFA combines factor categories. Phishing-resistant authenticators bind sign-in to the legitimate service and resist replay better than codes that users can type into a fake page. Push notifications can be abused through fatigue. SMS can be exposed through number takeover. These methods may still improve security over password-only access, but the system should use the strongest appropriate option and monitor factor changes.\n\nSingle sign-on lets one identity access multiple services, reducing password sprawl but concentrating risk. Federation lets separate organizations or systems trust assertions from an identity provider. Authorization still occurs at the service. Enrollment and recovery are frequent weak points: verify identity, notify users of changes, protect help-desk procedures, revoke lost authenticators and sessions, and record activity. AI-based behavioral analysis may help flag unusual sign-ins, but it can be wrong and should produce reviewable evidence rather than unexplained denial.\n\nMFA methods resist different attacks. Codes may be phished, push prompts may be approved through fatigue, and SMS may be redirected. Cryptographic authenticators bound to the legitimate site provide stronger phishing resistance. Enrollment, factor replacement, and recovery must receive equal protection.",
          "practical": "Compare password only, password plus SMS, password plus authenticator app, and hardware passkey for phishing resistance, recovery, cost, accessibility, and likely user behavior.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Examine multifactor authentication in a personal lab account.",
            "environment": "A noncritical account that supports MFA and recovery codes.",
            "steps": [
              "Review active sessions and recovery methods.",
              "Enable the strongest available factor you can safely maintain.",
              "Store recovery codes securely and test the documented recovery path without locking yourself out.",
              "Review the audit or security activity record."
            ],
            "expected": "The account has a usable independent factor and a protected recovery method.",
            "verification": "A new sign-in requires the configured factor and the account records the event."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Access reviews, monitoring, and common failures",
          "lead": "Access control remains trustworthy only when permissions, credentials, and use are reviewed against current need.",
          "keyIdeas": [
            "Entitlement reviews verify who has what and why",
            "Logs support accountability but need protection and interpretation",
            "Orphaned, shared, dormant, and excessive accounts are recurring risks"
          ],
          "content": "An access review presents current entitlements to someone able to judge business need, usually a manager, role owner, application owner, or data owner. Reviewers need understandable names and context; thousands of cryptic group identifiers produce rubber-stamping. High-risk privileges, service accounts, external collaborators, and dormant access deserve extra attention. Record decisions and verify removal. Monitoring can reveal repeated failures, impossible travel, access outside normal hours, use of disabled or dormant identities, new factors, privilege changes, and unusual resource access.\n\nContext prevents weak conclusions: a shared network exit can make users appear to travel, and a backup service may access large volumes at night. An alert triggers investigation rather than proving misuse. Common failures include shared credentials, default accounts, excessive standing privilege, unreviewed group nesting, forgotten contractor access, embedded service secrets, weak recovery, and accounts without owners. Deleting an account may damage records or automation; controlled disablement and retention may be safer.\n\nService identities need rotation, monitoring, and a lifecycle even though no person signs in interactively. Physical and logical access should agree. A terminated worker should lose badge, VPN, cloud, application, keys, tokens, and physical assets through one coordinated process. The strongest authentication cannot compensate for an account that should no longer exist. Reviewers need business meaning, not unexplained group names.\n\nShow the resource, allowed action, reason, source, last use, risk, and conflicting access. A review is not finished when a manager clicks approve; removal must reach every downstream system and active session.",
          "practical": "Audit a fictional access list containing users, groups, service accounts, visitors, and administrators. Mark owner, purpose, last use, approval, and removal or review action for each.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Domain 4: Network Security",
      "weight": "24% of exam · current outline through August 31, 2026",
      "intro": "Networks move data among devices and services. Beginners need a working model of that movement before firewalls, attacks, segmentation, and cloud design make sense.",
      "topics": [
        {
          "title": "How a network moves information",
          "lead": "Networks divide data into units, address endpoints, choose paths, and use protocols so unlike systems can communicate.",
          "keyIdeas": [
            "A protocol is an agreed set of communication rules",
            "Encapsulation adds information as data moves down a stack",
            "Switches connect local networks; routers move traffic between networks"
          ],
          "content": "A network connects hosts through wired or wireless links. Applications create data. Transport protocols divide and track it. Internet Protocol provides addressing and routing. Link technologies deliver frames across the local segment. Each layer adds a header: a process called encapsulation, and the receiving system removes and interprets those headers. A switch forwards local Ethernet frames using media access control addresses.\n\nA router forwards IP packets between networks using routing information.\n\nA wireless access point bridges wireless clients to a network. A modem or provider device connects one signaling system to another service. A firewall permits or denies traffic according to policy and state. Real devices often combine several roles. Bandwidth is the potential data rate; throughput is achieved rate. Latency is delay. Jitter is variation in delay, and packet loss means data units did not arrive.\n\nVoice and video are sensitive to delay and jitter, while file transfer can often retry. Reliability and security designs need to consider these properties. Client-server communication has a client request service from a server. Peer-to-peer systems let peers act as both. North-south traffic enters or leaves an environment; east-west traffic moves within it. Network diagrams should show trust boundaries, critical services, management paths, internet connections, and security controls rather than only device icons.\n\nFollow the entire path for one web request: local configuration, DNS resolution, next-hop discovery, frame delivery, routing, transport, TLS, and application exchange. Each device observes different headers. Troubleshooting names the failed step rather than treating the network as one invisible pipe.",
          "practical": "Trace opening a webpage from laptop to Wi-Fi access point, switch or router, DNS resolver, internet, web server, and back. At each step identify the device or protocol making a decision.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "OSI and TCP/IP models",
          "lead": "Layered models give a shared language for troubleshooting and placing security controls.",
          "keyIdeas": [
            "OSI has seven conceptual layers",
            "TCP/IP uses a smaller practical stack",
            "Troubleshooting moves through layers while checking evidence"
          ],
          "content": "The OSI model has Physical, Data Link, Network, Transport, Session, Presentation, and Application layers. Physical concerns signals, media, connectors, and radio. Data Link handles local frames and MAC addressing. Network handles logical addressing and routing. Transport provides end-to-end communication such as TCP and UDP. Session coordinates conversations, Presentation represents or transforms data, and Application provides network services to software. The TCP/IP model commonly groups these as Link or Network Access, Internet, Transport, and Application.\n\nEthernet and Wi-Fi operate at Link; IP and related routing operate at Internet; TCP and UDP operate at Transport; DNS, HTTP, SMTP, and many others are Application protocols. Models do not force every real protocol neatly into one box, but they prevent category confusion. A hub repeats physical signals. A traditional switch primarily makes Data Link decisions. A router makes Network-layer decisions.\n\nA stateful firewall usually considers addresses, ports, protocol, and connection state across several layers.\n\nA web application firewall understands HTTP application behavior. Encryption such as TLS protects application communication while using lower layers to travel. Troubleshooting can move bottom-up: power and link, local addressing, route, transport port, name resolution, and application. Security investigations may move top-down from suspicious application activity to the connection and device. “The network is down” is only a starting complaint.\n\nLayering turns it into testable questions.\n\nEncapsulation means the same data is viewed as application data, a transport segment or datagram, an IP packet, and a local frame. Routers replace the frame at each hop while normally preserving end addresses in the packet. Models help locate evidence; they are not a substitute for observing the real protocol.",
          "practical": "For a user who can reach an IP address but not a website name, identify likely functioning layers, the likely service to test, and evidence that would confirm the diagnosis.",
          "tables": [
            {
              "title": "Layer model reference",
              "headers": [
                "OSI layer",
                "Examples",
                "Security relevance"
              ],
              "rows": [
                [
                  "7 Application",
                  "HTTP, DNS, SMTP",
                  "Application validation and filtering"
                ],
                [
                  "6 Presentation",
                  "Encoding, encryption concepts",
                  "Data representation"
                ],
                [
                  "5 Session",
                  "Conversation management",
                  "Session control"
                ],
                [
                  "4 Transport",
                  "TCP, UDP",
                  "Ports and connection state"
                ],
                [
                  "3 Network",
                  "IPv4, IPv6, routers",
                  "Routing and network filtering"
                ],
                [
                  "2 Data Link",
                  "Ethernet, Wi-Fi, MAC",
                  "Local segmentation and spoofing"
                ],
                [
                  "1 Physical",
                  "Cable, fiber, radio",
                  "Physical access and disruption"
                ]
              ]
            }
          ],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Addresses, local delivery, routing, and name resolution",
          "lead": "Devices need local and logical addresses plus supporting services to locate destinations and reach other networks.",
          "keyIdeas": [
            "MAC addresses support local-link delivery; IP addresses support routed delivery",
            "DNS maps names to records; DHCP supplies configuration",
            "Private addressing and NAT change what observers see"
          ],
          "content": "IPv4 addresses contain 32 bits and are written as four decimal octets. A subnet mask or prefix length separates network and host portions. Private IPv4 ranges are used internally and generally translated for internet access. Network address translation lets several private hosts share public addressing, but it is not a substitute for a firewall policy. IPv6 uses 128-bit hexadecimal addresses, providing a much larger space.\n\nLeading zeros can be omitted and one run of zero groups compressed. Link-local addresses support local communication, while global addresses are routable. IPv6 should be secured and monitored even in organizations that believe they “do not use it,” because operating systems may enable it. Within a local IPv4 network, Address Resolution Protocol maps an IP address to a MAC address.\n\nIPv6 uses Neighbor Discovery. To reach another network, a host sends traffic to its default gateway.\n\nRouters compare the destination with routing tables and forward toward the best known path. A wrong mask, gateway, duplicate address, or route can break connectivity or send traffic somewhere unexpected. DHCP supplies addresses, masks, gateways, and other options. DNS maps names to records such as addresses and mail servers. DNS caching improves performance but means changes are not instantly visible everywhere.\n\nAttackers may abuse address assignment, local resolution, or DNS answers, so authenticated administration, segmentation, monitoring, and secure protocols matter.\n\nA host sends an on-link destination directly but sends an off-link packet to its gateway’s link address. NAT, proxies, VPNs, and load balancers can replace apparent addresses, so attribution needs synchronized DHCP, translation, identity, and application logs. An IP address alone rarely identifies a person.",
          "practical": "Record your lab device’s IP address, prefix or mask, default gateway, DNS resolver, and local MAC address. Explain which value is used for a same-subnet destination and which for a remote one.",
          "tables": [],
          "commands": [
            {
              "title": "Read-only network inspection",
              "description": "Use the commands available on your own computer.",
              "code": "# Windows\nipconfig /all\nroute print\nnslookup example.org\n\n# Linux or macOS (availability varies)\nip addr\nip route\nnslookup example.org"
            }
          ],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "TCP, UDP, ports, and common application protocols",
          "lead": "Ports identify transport endpoints, while application protocols define what communicating software says.",
          "keyIdeas": [
            "TCP is connection-oriented and reliable; UDP is connectionless and lightweight",
            "A listening port suggests a service, not guaranteed identity or safety",
            "Secure replacements protect credentials and content in transit"
          ],
          "content": "TCP establishes state, numbers data, acknowledges receipt, retransmits loss, and provides ordered delivery. Its familiar opening is SYN, SYN-ACK, ACK. UDP sends independent datagrams without a built-in connection or delivery guarantee; applications can add their own reliability. DNS, voice, streaming, and modern protocols may use UDP because low overhead or timing matters, while many interactive and file protocols use TCP.\n\nPorts range from 0 through 65535.\n\nA server listens on a known or configured destination port, while a client usually uses a temporary source port. Common associations include 20/21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 67/68 DHCP, 80 HTTP, 110 POP3, 123 NTP, 143 IMAP, 161/162 SNMP, 389 LDAP, 443 HTTPS, 445 SMB, 636 LDAPS, and 3389 RDP. Port numbers are conventions; software can use others, and malicious traffic can use familiar ports.\n\nHTTP transfers web requests and responses; HTTPS protects HTTP with TLS. SSH supports secure remote administration and tunneling; Telnet sends content without modern transport protection. SMTP moves mail, while IMAP and POP retrieve it. SMB provides Windows-oriented file and resource sharing. LDAP accesses directory information; protected variants or TLS modes should be used for sensitive credentials. NTP synchronizes time, which is essential for logs and authentication.\n\nSecurity decisions consider protocol, direction, source, destination, application identity, encryption, and business need. “Open port” means reachable service exposure from that test position, not automatically a vulnerability. Close unnecessary services, restrict management access, use secure protocol versions, and monitor use. A timeout, connection refusal, DNS failure, TLS certificate error, and HTTP error describe different stages. TCP provides ordered delivery and state; UDP leaves recovery to applications.\n\nPorts are conventions rather than proof of the application. Analysts combine protocol behavior with endpoint and service logs.",
          "practical": "Create protocol cards with purpose, default transport and port, secure alternative, and one risk. Practice explaining the purpose instead of memorizing numbers alone.",
          "tables": [
            {
              "title": "High-value port associations",
              "headers": [
                "Port",
                "Protocol",
                "Purpose"
              ],
              "rows": [
                [
                  "22/TCP",
                  "SSH",
                  "Secure remote administration"
                ],
                [
                  "53/TCP/UDP",
                  "DNS",
                  "Name resolution"
                ],
                [
                  "80/TCP",
                  "HTTP",
                  "Unencrypted web"
                ],
                [
                  "443/TCP and sometimes UDP",
                  "HTTPS",
                  "Protected web traffic"
                ],
                [
                  "445/TCP",
                  "SMB",
                  "File and resource sharing"
                ],
                [
                  "3389/TCP/UDP",
                  "RDP",
                  "Remote desktop"
                ]
              ]
            }
          ],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Wi-Fi and remote access",
          "lead": "Wireless and remote-access security must authenticate participants, protect traffic, and limit what a connected device can reach.",
          "keyIdeas": [
            "Radio crosses physical boundaries",
            "Modern Wi-Fi protection uses strong authentication and encryption",
            "VPNs protect a path but do not make the endpoint trustworthy"
          ],
          "content": "Wi-Fi clients connect through access points using a service set identifier. Radio extends beyond walls, so physical location alone does not control access. Use modern WPA2 or WPA3 configurations, strong credentials or enterprise authentication, protected management, current firmware, and separate guest or untrusted devices. WEP and obsolete settings are unsuitable because their protections can be broken. Personal modes use a shared secret, which is hard to revoke for one person.\n\nEnterprise modes use individual identities through an authentication service, improving accountability and lifecycle management. Evil twins imitate a trusted network to attract users. Rogue access points create unauthorized paths. Wireless monitoring, approved-device inventories, certificate validation, user awareness, and disabling automatic connection reduce risk. A virtual private network creates an encrypted tunnel over an untrusted network. Remote-access VPNs connect a user or device to an environment; site-to-site VPNs connect networks.\n\nFull tunneling sends all traffic through organizational controls; split tunneling sends only selected traffic, saving bandwidth but creating another path. VPN authentication, endpoint health, routing, DNS, logging, and privilege still matter. Zero-trust approaches evaluate identity, device, application, and context for each resource rather than treating the entire internal network as trusted. This complements segmentation and strong authentication. Whether using VPN or newer access brokers, grant only necessary services and remove access promptly.\n\nWireless security needs authenticated association and strong frame encryption, but application traffic still benefits from end-to-end TLS. A VPN protects a channel, not everything a remote user may reach. Device posture, least-privilege authorization, logging, session limits, and rapid revocation complete remote-access design.",
          "practical": "Compare a guest Wi-Fi network, employee Wi-Fi, and remote-access VPN. Specify authentication, reachable resources, logging, device trust, and what happens when a credential is lost.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Network threats, malware, and common attacks",
          "lead": "Attack names are useful only when connected to the trust or resource they abuse and the controls that interrupt them.",
          "keyIdeas": [
            "Malware categories describe behavior and delivery, not always exclusive families",
            "Spoofing and man-in-the-middle attacks abuse identity or path trust",
            "Denial-of-service attacks exhaust a resource or dependency"
          ],
          "content": "A virus attaches to a host file and commonly requires execution to spread. A worm self-propagates across systems or networks. A Trojan appears useful while carrying malicious behavior. Ransomware denies access, often through encryption, and modern operations may also steal data. A rootkit hides or maintains privileged access. A bot is a compromised system controlled as part of a botnet.\n\nOne malicious program can have several of these characteristics.\n\nPhishing manipulates people through messages or sites. Spear phishing targets a person or group; whaling targets senior figures. Social engineering also includes pretexting, impersonation, baiting, tailgating, and fraudulent support. Verification through a separate trusted channel is often stronger than analyzing appearance. Spoofing falsifies an identity or address. ARP spoofing can redirect local traffic. DNS poisoning can supply false name answers.\n\nA man-in-the-middle position intercepts and perhaps changes communication; strong mutual authentication and encryption reduce usefulness.\n\nReplay resends captured authentication or transaction data; nonces, timestamps, and session protections help. Denial of service exhausts bandwidth, processing, memory, connection tables, or an application dependency. Distributed denial of service uses many sources. Rate limiting, filtering, capacity, content distribution, resilient architecture, and provider coordination can help. Side-channel attacks infer secrets from timing, power, electromagnetic behavior, or other indirect information. The exam expects recognition of the basic category and the most fitting control, not movie-style certainty.\n\nDescribe attacks through behavior and evidence. A suspicious attachment may lead to process execution, persistence, credential access, command and control, and impact. Email, endpoint, DNS, proxy, firewall, identity, and application logs each illuminate one part. One unusual connection is a lead, not a complete compromise narrative.",
          "practical": "For each attack, write the violated assumption: trusted sender, trusted name resolution, private path, available capacity, safe attachment, or protected secret. Then match a preventive and detective control.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "A worm spreads on its own; a virus attaches to another file; a Trojan disguises its purpose."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Firewalls, IDS, IPS, endpoint protection, and monitoring",
          "lead": "Preventive and detective technologies see different evidence and should be layered around clearly defined policy.",
          "keyIdeas": [
            "Firewalls enforce traffic policy",
            "IDS detects and alerts; IPS can block inline",
            "Host and network sensors have different visibility"
          ],
          "content": "A packet-filtering firewall considers addresses, ports, and protocol. A stateful firewall also tracks connections and can permit return traffic associated with an allowed session. Proxy and application-aware firewalls interpret higher-level protocol behavior. A web application firewall focuses on HTTP applications. Rules should be specific, ordered, documented, reviewed, and default to denying unnecessary traffic. A network intrusion detection system observes network traffic and alerts; a network intrusion prevention system sits in a path or otherwise takes blocking action.\n\nHost-based IDS or endpoint security observes processes, files, configuration, and local activity. Signature detection recognizes known patterns, while anomaly detection finds deviations from a baseline. Signatures miss new variants; anomalies can be noisy. Encrypted traffic and sensor placement limit network visibility. Antivirus historically focused on malicious files, while modern endpoint protection may combine reputation, behavior, exploit prevention, isolation, and response.\n\nVulnerability scanners look for weaknesses; they do not prove a host is compromised.\n\nSecurity information and event management systems collect and correlate logs. Every tool requires updates, tuning, access control, health monitoring, and human interpretation. An alert is a claim to investigate, not proof. False positives are benign events that alert; false negatives are harmful events that do not. Tuning removes understood benign causes without erasing genuine behavior. Defense in depth combines controls so that prevention failure can still be detected and recovery remains possible.\n\nAn alert reflects its rule and observation point. A firewall block can be a true hostile attempt with no impact; an IDS match can be benign authorized testing; an endpoint that stopped reporting is unknown, not healthy. Analysts open the original event and validate context before acting.",
          "practical": "Place a firewall, NIDS, NIPS, HIDS or EDR, antivirus, vulnerability scanner, and SIEM on a simple network diagram. For each, write what it sees, what it can do, and one blind spot.",
          "tables": [
            {
              "title": "Security technology roles",
              "headers": [
                "Technology",
                "Primary role",
                "Typical limitation"
              ],
              "rows": [
                [
                  "Firewall",
                  "Enforce traffic policy",
                  "Allowed traffic may still be harmful"
                ],
                [
                  "NIDS",
                  "Observe and alert on network activity",
                  "Cannot directly stop; encryption hides content"
                ],
                [
                  "NIPS",
                  "Detect and block network activity",
                  "False blocks affect availability"
                ],
                [
                  "HIDS/EDR",
                  "Observe host behavior",
                  "Requires healthy deployed sensor"
                ],
                [
                  "Vulnerability scanner",
                  "Find weaknesses",
                  "Does not prove exploitation"
                ],
                [
                  "SIEM",
                  "Collect and correlate records",
                  "Depends on source and rule quality"
                ]
              ]
            }
          ],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Secure network design, segmentation, and cloud services",
          "lead": "Architecture limits trust, separates failure domains, protects management paths, and preserves resilient environmental support.",
          "keyIdeas": [
            "VLANs, firewalls, DMZs, and microsegmentation limit communication",
            "NAC evaluates devices before or during access",
            "Cloud service models divide responsibility between customer and provider"
          ],
          "content": "Segmentation divides networks according to trust and business need. VLANs create logical Layer 2 segments but require routing and policy to control communication. A demilitarized zone places public services in a controlled area separate from internal systems. Microsegmentation applies fine-grained workload policy. Guest, management, backup, development, production, and embedded or IoT devices often deserve separate paths. Network access control can authenticate users or devices, assess posture, and assign a segment or restricted access.\n\nIt is especially useful when many managed and unmanaged devices connect. Embedded and IoT devices may lack update or authentication capability, so inventory, segmentation, restricted egress, vendor support, and replacement planning compensate. On-premises infrastructure depends on power, HVAC, fire suppression, physical access, cabling, redundancy, and agreements with partners. Memoranda of understanding or agreement document cooperative expectations but should be supported by tested capability.\n\nRedundancy must avoid shared single points of failure.\n\nCloud service models assign responsibility differently. In Infrastructure as a Service, the customer manages more of the operating systems, applications, identities, and data. In Platform as a Service, the provider manages more of the runtime platform. In Software as a Service, the provider operates the application while the customer still manages users, configuration, data, and appropriate use. Hybrid environments combine models.\n\nService-level agreements state service commitments and responsibilities; managed service providers perform agreed operations but do not erase customer accountability.\n\nLooking ahead, AI development and sensitive training data should be inventoried and segmented like other valuable services. Automated network tools can identify anomalies, but model output remains evidence to evaluate, not unquestionable fact. Cloud changes responsibility rather than removing it. Customers still own data classification, identities, intended configuration, and appropriate use. Management planes, automation credentials, and recovery paths deserve especially strong controls because they can change many workloads at once.\n\nSegment according to required flows and verify the deny paths.",
          "practical": "Design a small organization with public web, employee devices, guest Wi-Fi, servers, backups, management, and IoT. Draw trust boundaries and allow only the flows each function needs.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Build a segmented network diagram and rule table.",
            "environment": "Paper or a diagramming tool; no live equipment required.",
            "steps": [
              "Create at least six security zones.",
              "List required source, destination, protocol, and purpose flows.",
              "Add default-deny boundaries and a protected management path.",
              "Place monitoring and resilient DNS, power, or internet dependencies.",
              "Explain one cloud service responsibility boundary."
            ],
            "expected": "A readable architecture whose trust decisions can be reviewed.",
            "verification": "Every permitted path has a business reason and an owner."
          },
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Domain 5: Security Operations",
      "weight": "18% of exam · current outline through August 31, 2026",
      "intro": "Security operations applies policy to the daily handling of data, systems, changes, logs, and human behavior. The goal is consistent risk reduction, not heroic improvisation.",
      "topics": [
        {
          "title": "The data lifecycle: creation through destruction",
          "lead": "Information needs appropriate ownership and protection throughout its useful life, including copies and backups.",
          "keyIdeas": [
            "The lifecycle includes create, store, use, share, archive, and destroy",
            "Owners classify and decide access; custodians operate safeguards",
            "Retention and secure destruction reduce both loss and unnecessary exposure"
          ],
          "content": "Data is created or collected, stored, used, shared, archived, and eventually destroyed. It can move among devices, cloud services, backups, printouts, messages, and vendors. Security follows the information, not only the original file. A copied spreadsheet can be more exposed than the protected database from which it came. A data owner is accountable for classification, access need, and handling expectations.\n\nA custodian administers storage, backups, permissions, and other safeguards on the owner's behalf.\n\nUsers follow handling rules. Privacy, legal, records, and business teams may define retention or deletion requirements. Security supports these decisions but should not invent ownership. Retention keeps information for a defined business, legal, or contractual period. Keeping too little can damage recovery, evidence, or obligations; keeping everything forever increases exposure and cost. Legal hold may suspend normal destruction for relevant material.\n\nArchives still require confidentiality, integrity, accessibility, and tested restoration.\n\nDestruction must fit the medium and sensitivity. Ordinary deletion often removes a reference rather than the underlying content. Overwriting, cryptographic erasure, degaussing for suitable magnetic media, shredding, and physical destruction provide different assurance. Solid-state drives and cloud storage require provider-supported methods and lifecycle controls. Destruction records may be required. Remember replicas, caches, snapshots, and backups when defining deletion. Real data branches into email, caches, logs, exports, analytics, backups, and supplier systems.\n\nLifecycle controls must reach those copies. Legal holds can suspend ordinary deletion for scoped records, while uncontrolled indefinite retention increases discovery cost and breach impact.",
          "practical": "Follow one fictional customer record from collection through application use, export, backup, archive, and destruction. Name the owner, custodian, allowed users, retention, and destruction evidence at each stage.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Classification, labeling, and handling",
          "lead": "Classification connects information value and sensitivity with consistent handling requirements.",
          "keyIdeas": [
            "Classification levels should be few, clear, and tied to controls",
            "Labels communicate handling but do not enforce it by themselves",
            "Data may need reclassification as content or context changes"
          ],
          "content": "Organizations define classification schemes appropriate to their work. A private organization might use public, internal, confidential, and restricted. Government terminology varies by jurisdiction. What matters is that levels have definitions, owners, examples, and handling rules for access, storage, transmission, printing, discussion, retention, and destruction. Classification considers confidentiality, integrity, availability, privacy, legal or contractual obligation, business impact, and aggregation. Individual public facts can become sensitive when combined.\n\nA public emergency guide may need strong integrity and availability despite low confidentiality. The owner classifies; users and custodians apply controls. Labels communicate classification in file metadata, document headers, email markings, database tags, or physical covers. Automated tools may discover or label data, but context and error handling remain important. A label without permissions, encryption, training, and monitoring is only a sign.\n\nConversely, unlabeled data may still be sensitive based on its content and source.\n\nHandling rules should be practical. Specify approved storage, recipients, encryption, remote access, physical transport, printing, conversation, and disposal. Third parties receive only authorized data under appropriate agreement and control. Review classification when a project ends, records age, ownership changes, or data is published. Do not downgrade information merely to make sharing easier. Labels must lead to practical behavior: approved storage, recipients, printing, transmission, external sharing, backup, retention, and disposal.\n\nOverclassification encourages workarounds; underclassification exposes information. Owners review classifications as business value and publication status change.",
          "practical": "Create four classification levels for a small school organization. Classify a public calendar, internal staff list, student grades, health record, and emergency contact sheet; justify CIA needs and handling.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Encryption, hashing, and digital signatures",
          "lead": "Cryptographic tools solve different problems and depend on sound key management.",
          "keyIdeas": [
            "Symmetric encryption uses a shared secret and is efficient",
            "Asymmetric cryptography uses a public-private key pair",
            "Hashing is one-way integrity support, not encryption"
          ],
          "content": "Encryption transforms plaintext into ciphertext using an algorithm and key so that authorized parties can recover it. Symmetric encryption uses the same secret key for encryption and decryption. It is efficient for large amounts of data, but participants need a safe way to share and protect the key. Asymmetric cryptography uses a related public and private key pair. Data protected for a recipient with the public key can be recovered with the corresponding private key in suitable schemes.\n\nReal systems often combine them. A protocol uses public-key methods to authenticate or establish shared secrets, then symmetric encryption protects the session efficiently. Encryption can protect data at rest on storage and in transit across networks. Data in use may be exposed to the authorized application or endpoint, so access control and system security still matter. A cryptographic hash produces a fixed-length digest from input.\n\nGood hashes make it impractical to derive the input or find a different input with the same digest. Hashes can detect change, support secure password verification when combined with salts and deliberately slow password algorithms, and identify files. Hashing does not hide content and is not reversible encryption. A digital signature uses a private key to sign a digest or related representation; a verifier uses the public key to check integrity and origin.\n\nThis can support authentication and non-repudiation when identity and keys are trustworthy. Certificates bind public keys to identities through a public key infrastructure. Key generation, storage, distribution, rotation, revocation, backup where appropriate, and destruction are as important as algorithm choice. Cryptography depends on keys and implementation. Symmetric encryption protects bulk data efficiently; public-key methods support agreement and signatures; hashes represent data without a secret; HMAC adds shared-secret authentication.\n\nKey generation, storage, access, recovery, rotation, compromise response, and destruction determine real strength.",
          "practical": "For file confidentiality, file integrity, user authentication, password storage, and proof of approval, select encryption, hashing, digital signature, or another control and explain why the alternatives do not fit.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Observe hashing and file integrity safely.",
            "environment": "A text file and a built-in SHA-256 tool.",
            "steps": [
              "Create a short file and calculate its SHA-256 digest.",
              "Copy the file and confirm the digest matches.",
              "Change one character and calculate again.",
              "Record what the changed digest proves and what it cannot prove."
            ],
            "expected": "The altered file has a different digest.",
            "verification": "Explain why a matching hash supports integrity but does not identify who created the original."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Logging, monitoring, and event handling",
          "lead": "Logs create records of activity; monitoring turns selected records into awareness and response.",
          "keyIdeas": [
            "Useful logs answer who, what, when, where, result, and relevant context",
            "Central collection, time synchronization, access control, and retention improve evidence",
            "An alert begins analysis; it is not automatically an incident"
          ],
          "content": "Systems can log authentication, access, process activity, configuration change, network connection, security-control events, application transactions, errors, and administrator actions. Record stable identities, timestamps with timezone, source and destination, action, result, and correlation identifiers where appropriate. Avoid logging passwords, session tokens, or unnecessary personal data. Central collection helps correlate events and protects records if a source is lost. Time synchronization makes timelines coherent.\n\nRestrict log access and deletion, monitor source health, and retain records according to investigative, business, legal, and privacy need.\n\nAn absent record may mean nothing happened, logging was disabled, the event type was never collected, or retention expired. Monitoring compares records with rules, signatures, thresholds, or baselines. A security information and event management system gathers and correlates data. A security operations center receives and investigates alerts. Automated and AI-assisted correlation can prioritize patterns but may generate false positives or miss novel behavior.\n\nAnalysts validate source data and context before action.\n\nAn event is an observable occurrence. An alert is a tool's notification. An incident is a security event or series that requires response. Triage evaluates credibility, scope, impact, and urgency. Case notes should separate observation from inference and record every consequential action. Escalate according to playbook rather than deleting, editing, or experimenting with evidence. Telemetry needs synchronized time, stable identifiers, source-health checks, protected collection, parsing, retention, and access limits.\n\nMissing logs and sudden volume changes can be signals. Triage records the rule, entity, timeline, original evidence, conclusion, confidence, action, and escalation owner.",
          "practical": "Design five log records for a successful login, failed login, role change, file access, and configuration change. Include fields needed to reconstruct a timeline without collecting unnecessary secrets.",
          "tables": [],
          "commands": [
            {
              "title": "Read-only local log examples",
              "description": "Availability and permissions vary; use only on your own lab system.",
              "code": "# Linux with systemd\njournalctl --since \"1 hour ago\"\n\n# Windows PowerShell\nGet-WinEvent -LogName System -MaxEvents 20"
            }
          ],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "System hardening, baselines, updates, and patches",
          "lead": "Hardening reduces attack surface and makes secure state repeatable and measurable.",
          "keyIdeas": [
            "A baseline is an approved minimum configuration",
            "Remove or disable unnecessary services, accounts, software, and permissions",
            "Patch management includes inventory, testing, deployment, validation, and exception"
          ],
          "content": "A secure baseline defines the approved starting state for an operating system, application, network device, cloud service, or endpoint. It may specify accounts, services, ports, authentication, encryption, logging, permissions, and update settings. Build from vendor guidance and organizational risk. Templates and automated configuration make the state repeatable. Hardening changes default or unnecessary exposure: remove unused software, disable services and accounts, restrict management interfaces, enforce least privilege, protect boot and firmware, enable host firewall and endpoint protection, configure logs, and secure physical access.\n\nFunction still matters. A system so restricted that users invent unsanctioned workarounds may be less secure in practice. Configuration management records desired state, approved changes, ownership, and exceptions. Drift occurs when actual configuration diverges from baseline. Scanning and monitoring detect drift, while version control and automation make correction auditable. Baselines need revision when vendors, threats, or business requirements change. Patch management discovers assets and updates, evaluates urgency and compatibility, tests representative systems, approves and schedules change, backs up or prepares rollback, deploys in phases, validates installation and function, and handles exceptions.\n\nEmergency patching shortens the cycle but does not eliminate control. If a critical system cannot be patched, reduce exposure through segmentation, feature disablement, application filtering, or enhanced monitoring and track the temporary residual risk. A baseline defines expected accounts, services, settings, software, logging, and protection. Updates are inventoried, assessed, tested, deployed, and verified with rollback available. Systems that cannot be patched need isolation, feature removal, monitoring, formal exception, and a replacement plan.",
          "practical": "Write a ten-item baseline for a new laptop. For each item, name the threat reduced, how compliance is checked, and what exception might be legitimate.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "A baseline is the approved secure starting point; hardening applies changes to meet it; configuration management detects and controls later drift."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Policies for daily security work",
          "lead": "Operational policies define consistent expectations for handling data, credentials, devices, change, and privacy.",
          "keyIdeas": [
            "Policy should state purpose, scope, roles, requirements, enforcement, exception, and review",
            "AUP and BYOD rules make user and organizational responsibilities clear",
            "Change management protects integrity and availability through planned, reviewable work"
          ],
          "content": "A data-handling policy connects classification with storage, transmission, sharing, retention, and destruction. A password policy covers creation, storage, authentication, reset, compromise, and administrator handling. It should support long unique passwords, MFA, secure recovery, and protection against known-compromised choices rather than relying only on complexity slogans. An acceptable use policy explains permitted and prohibited use of organizational systems, monitoring expectations, personal use, software installation, remote access, reporting, and consequences.\n\nUsers acknowledge it, but acknowledgment does not replace clear training. A privacy policy explains how personal information is collected, used, shared, protected, retained, and addressed through applicable rights or contacts. A bring-your-own-device policy defines eligible devices, required configuration, enrollment, separation of personal and organizational data, support, incident reporting, monitoring, remote wipe, exit handling, and user consent. Privacy and ownership require special care.\n\nIf requirements are unacceptable to either party, organization-owned equipment may be the safer design.\n\nChange management records reason, scope, risk, owner, approvals, testing, schedule, communication, implementation, validation, rollback, and documentation. Standard preapproved changes, normal reviewed changes, and emergencies may follow different paths. Emergency change still receives retrospective review. The goal is not paperwork for its own sake; it is preventing unplanned outages, security regression, and changes that nobody can later explain. Policies work when procedures are accessible during pressure and staff know who can authorize exceptions.\n\nChange, acceptable use, data handling, remote access, backup, incident reporting, and supplier access should connect to owners and evidence. Temporary exceptions need an expiration.",
          "practical": "Review a fictional change to open remote administration to the internet. Fill in purpose, risk, safer alternatives, test, authorization, monitoring, rollback, and post-change validation.",
          "tables": [
            {
              "title": "Operational policies",
              "headers": [
                "Policy",
                "Main concern"
              ],
              "rows": [
                [
                  "Data handling",
                  "Protection through classification lifecycle"
                ],
                [
                  "Password",
                  "Creation, use, storage, recovery, compromise"
                ],
                [
                  "AUP",
                  "Responsible use and monitoring expectations"
                ],
                [
                  "BYOD",
                  "Security, support, privacy, and separation on personal devices"
                ],
                [
                  "Change management",
                  "Authorized, tested, reversible system change"
                ],
                [
                  "Privacy",
                  "Appropriate personal-data practices"
                ]
              ]
            }
          ],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Security awareness and social engineering resistance",
          "lead": "Awareness helps people recognize risk, make safer choices, and report mistakes early without pretending every failure is a user problem.",
          "keyIdeas": [
            "Training should be relevant to roles and measured by behavior",
            "Social engineering exploits trust, urgency, fear, curiosity, and authority",
            "Easy reporting and blameless early response reduce harm"
          ],
          "content": "General awareness covers phishing, passwords and MFA, device and physical security, data handling, remote work, removable media, social media, incident reporting, and policy. Role-based training adds what developers, administrators, finance staff, executives, help desks, and incident responders specifically need. Training occurs at onboarding, periodically, and when threats or responsibilities change. Social engineers create urgency, authority, scarcity, fear, helpfulness, or curiosity.\n\nPhishing uses broad messages; spear phishing targets; whaling focuses on senior leaders; vishing uses voice; smishing uses text messages.\n\nPretexting builds a story, baiting offers something attractive, and tailgating seeks physical entry. Deepfake audio or generated text can make impersonation more convincing, but the defense remains process: verify unusual requests through a separately trusted channel. Useful programs make the safe action simple. Provide a visible report button or contact, rapid feedback, and clear steps after a mistaken click. Do not shame reporters; delay lets an attacker keep access.\n\nSimulations should teach rather than trick for punishment. Measure reporting rate, time to report, repeated risky behavior, control adoption, and real incident patterns, not only quiz completion. People are one layer. Technical controls such as protected email, phishing-resistant authentication, payment approval, limited privilege, web filtering, and monitoring should assume that some convincing messages succeed. When training repeatedly fails around one workflow, redesign the workflow.\n\nAwareness changes attention, training builds a task, and education develops broader judgment.\n\nTailor content to roles and make reporting safe. Measure time to report, handling errors, and demonstrated skill rather than attendance alone. Blame suppresses the early reports defenders need.",
          "practical": "Create a five-minute briefing for students on one current scam. Include the persuasion technique, two observable clues, a trusted verification step, reporting channel, and what to do after responding.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Analyze a harmless sample phishing message without opening links.",
            "environment": "A printed or plain-text sample message with headers if available.",
            "steps": [
              "Identify the claimed sender, request, urgency, link text, destination, attachment, and requested data.",
              "Separate suspicious clues from proof.",
              "Choose a safe independent verification channel.",
              "Draft a concise report for the security team and a helpful warning for peers."
            ],
            "expected": "A reasoned report that avoids interacting with the suspected content.",
            "verification": "The response states evidence, uncertainty, and the safest next action."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Everyday security workflow and the AI transition",
          "lead": "Entry-level security work combines careful observation, documented procedure, respectful communication, and willingness to escalate.",
          "keyIdeas": [
            "Follow approved procedure while preserving evidence and business context",
            "Automated output requires validation",
            "Security culture makes good behavior normal and reportable"
          ],
          "content": "A junior professional may review access requests, verify backup results, monitor dashboards, triage user reports, check baseline compliance, document changes, maintain inventories, and escalate suspicious activity. Reliability matters more than dramatic tooling. Record what you observed, the source and time, what you did, why, and the result. Protect sensitive case information and ask for help before a destructive or high-impact action.\n\nUse a simple decision loop: understand the task and authorization; identify the asset and required security property; gather trustworthy evidence; compare it with policy or baseline; choose the least risky approved action; verify the outcome; document and communicate.\n\nWhen uncertain, preserve state and escalate rather than concealing the uncertainty. ISC2 has announced that the CC outline effective September 1, 2026 will integrate foundational AI concerns across the five domains. Candidates testing then should use that outline directly. Important bridging ideas include AI assets and training-data integrity, model poisoning, bias and transparency, model drift in continuity, automated service-account lifecycle, AI-assisted identity and network anomaly detection, SIEM correlation, and data leakage into public AI tools.\n\nThese ideas extend familiar principles. An AI model and its data are assets. Service identities need least privilege. Generated answers may lack integrity. Provider availability affects continuity. Prompts and outputs may contain classified or personal data. Monitoring models can create false positives and bias. Organizational policy, human review, evidence, privacy, and risk ownership remain essential. Do not treat “AI-powered” as either proof of safety or proof of danger; ask what data, decision, control, owner, and failure mode are involved.\n\nAI can summarize, rank, and suggest, but fluent output may invent facts or expose sensitive prompts. Verify claims in source evidence, restrict tool authority, record model involvement, and keep a human able to stop consequential action. Model output is untrusted input to downstream systems.",
          "practical": "For an employee using a public AI assistant, identify the assets, likely data leakage, integrity and privacy risks, allowed-use policy, access controls, monitoring limits, and a safe approved workflow.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "For exams on or after September 1, 2026, use the new official ISC2 outline rather than assuming the current domain details and weights are unchanged."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Capstone: securing a small organization",
          "lead": "The five domains become useful when they are applied together to one understandable environment.",
          "keyIdeas": [
            "Start with mission, assets, and risk",
            "Layer governance, access, network, operations, and resilience",
            "Test and improve controls rather than assuming they work"
          ],
          "content": "Imagine a tutoring nonprofit with ten staff members, student records, laptops, Wi-Fi, a cloud productivity suite, an online scheduling service, and one small office. Begin with mission and assets. Student records need confidentiality and integrity; scheduling needs availability; emergency contacts need privacy, integrity, and access during outage. Identify owners, providers, legal or contractual questions, and likely threats. Governance defines data classification, acceptable use, passwords and MFA, BYOD, change, privacy, incident reporting, and retention.\n\nAccess uses individual identities, role-based permissions, least privilege, separate administration, quick offboarding, badge and visitor control, and periodic review. Network design separates guests and unmanaged devices, protects management, secures Wi-Fi, restricts inbound service, and monitors important boundaries. Operations use supported devices, secure baselines, patching, encryption, protected backups, logging, user awareness, and reviewed changes. Business continuity establishes alternate communication and a manual scheduling process.\n\nDisaster recovery sets RTO and RPO, protects backup copies, and tests restoration.\n\nIncident response provides contacts and playbooks for account compromise, lost laptop, phishing, and data exposure. No single control is sufficient. MFA helps with stolen passwords but not an already authorized user sharing data. Encryption protects a lost laptop but not data exported by a signed-in account. Training helps people report, while process controls prevent one fraudulent request from moving money.\n\nReview the entire system, test representative failures, document residual risk, and improve the layers.\n\nA complete design should show assets and owners, data classification, identities, network zones and allowed flows, endpoint baseline, logging, backups, supplier dependencies, risk decisions, incident contacts, and exercises. The strongest capstone explains why each control exists and how its effectiveness will be checked.",
          "practical": "Complete the organization design as a portfolio project: asset list, five risks, policy set, access matrix, network diagram, backup test, incident playbook, awareness message, and one-page leadership summary.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Build an integrated CC capstone package.",
            "environment": "Paper or ordinary office and diagram tools.",
            "steps": [
              "Inventory assets and assign CIA and privacy needs.",
              "Create a risk register and select layered controls.",
              "Build physical and logical access matrices.",
              "Draw a segmented network and cloud responsibility boundary.",
              "Set RTO/RPO and design one restoration test.",
              "Write one incident playbook and an audience-appropriate report."
            ],
            "expected": "A coherent security plan in which each control answers a stated risk.",
            "verification": "A peer can trace every requirement from asset and risk to control, owner, and test."
          },
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    }
  ]
};
