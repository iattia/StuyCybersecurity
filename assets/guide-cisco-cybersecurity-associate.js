// Stuy Cybersecurity certification textbook data.
window.CERT_GUIDE = {
  "name": "Cisco Cybersecurity Associate: A Complete SOC Analyst Textbook",
  "short": "Cisco Cybersecurity Associate",
  "version": "200-201 CBROPS v1.2 · effective January 21, 2025",
  "official": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/cybersecurity/associate/exams-and-training.html",
  "subtitle": "A beginner-to-analyst course in security concepts, monitoring, host analysis, packet investigation, incident response, and the everyday reasoning of a security operations center.",
  "notice": "Cisco renamed CyberOps Associate to Cybersecurity Associate when the v1.2 blueprint took effect. This independent textbook follows the five official areas and their current weights. Verify the blueprint with Cisco before scheduling the 200-201 exam.",
  "parts": [
    {
      "title": "1.0 Security Concepts",
      "weight": "20% of the exam",
      "intro": "A SOC analyst needs a clear model of what is being protected, how controls produce evidence, and how a clue becomes a defensible security conclusion.",
      "topics": [
        {
          "title": "The SOC mission and the CIA triad",
          "lead": "A security operations center turns telemetry into decisions that reduce harm to the organization.",
          "keyIdeas": [
            "Confidentiality limits disclosure, integrity protects trustworthy change, and availability keeps services usable.",
            "Tier labels describe local responsibilities, not universal ranks.",
            "An analyst documents evidence, uncertainty, action, and ownership.",
            "Security operations supports the business rather than operating as a separate emergency service."
          ],
          "content": "A SOC watches for activity that threatens business services, people, and information. Analysts receive alerts, validate what occurred, establish scope, contain harm under authorized procedures, preserve useful evidence, and communicate with the teams that can fix the cause. Monitoring is only the beginning; a quiet console is not proof that the environment is safe. The CIA triad helps translate technical events into impact.\n\nCredential theft threatens confidentiality because an intruder may read data, integrity because the intruder may alter it, and availability if the account is used destructively.\n\nAuthenticity, accountability, privacy, and safety add context. The analyst should name the affected asset and property instead of calling every suspicious event “critical.” Many organizations use Tier 1 for initial triage, Tier 2 for deeper investigation, Tier 3 for specialized analysis or hunting, and incident responders for coordinated containment and recovery. Actual duties differ. A mature analyst knows the escalation boundary, records what has been verified, and never disguises an assumption as a fact.\n\n## From observation to decision\n\nSuppose a detection reports that a payroll account downloaded 4 GB from a file service. The event is not yet an incident. Triage asks whether the user, device, time, files, and destination match expected work. If the account authenticated from an unfamiliar device minutes after an MFA reset, confidentiality risk rises. If payroll records were changed, integrity is involved. If containment will interrupt payroll processing, availability enters the decision.\n\nThe analyst records which facts are directly observed, which come from enrichment, and which remain hypotheses. Case quality matters because several people may act from the note. A useful entry contains timestamps and time zone, affected identities and assets, source record identifiers, scope tested, queries used, confidence, action and authorization, business impact, and the next owner. “Malicious login blocked” hides the reasoning; “identity provider denied sign-in because device compliance failed; no successful session or downstream access found in the reviewed window” is testable.",
          "practical": "Write a one-sentence impact statement for an event: affected asset, security property, observed condition, possible consequence, and confidence.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Security controls and deployment layers",
          "lead": "Network, endpoint, application, identity, and cloud controls see different parts of an event.",
          "keyIdeas": [
            "Preventive, detective, corrective, deterrent, and compensating describe control purpose.",
            "Agent-based tools see host activity; agentless tools rely on external observation or remote interfaces.",
            "SIEM centralizes analysis; SOAR coordinates repeatable actions.",
            "Containers and virtual machines create different isolation boundaries."
          ],
          "content": "A firewall can constrain a connection but may not know which process created it. Endpoint detection can see the process tree but may lose visibility when a device is offline. An application log knows the authenticated user and business operation. Identity telemetry shows sign-ins, token grants, and privilege changes. Analysts correlate these perspectives rather than expecting one product to contain the truth.\n\nAgent-based controls run on the protected system and can observe processes, files, registry or configuration changes, and local users.\n\nThey require deployment, health monitoring, and tamper protection. Agentless systems collect network traffic, cloud APIs, remote logs, or periodic scans without local software, trading depth for reach or simplicity. Legacy antivirus relies heavily on known signatures; modern endpoint products add behavior, reputation, isolation, and investigative telemetry. A SIEM ingests, normalizes, searches, and correlates events. A SOAR platform enriches cases and performs approved workflow steps.\n\nAutomation must remain bounded: a faulty rule that disables every account matching a weak signal can cause its own incident. Virtual machines isolate complete guest operating systems through a hypervisor; containers generally share a host kernel and depend on namespace, capability, and runtime policy.\n\n## Control coverage and control health\n\nAnalysts should distinguish absence of suspicious evidence from absence of visibility. Before closing a case, ask whether the endpoint agent was healthy, the cloud audit source was enabled in every relevant account and region, clocks were aligned, retention covered the time, and parsing preserved the needed fields. A sensor last seen two days ago cannot establish what happened today. Controls also create their own telemetry.\n\nA firewall rule change, EDR isolation command, identity-policy decision, or SOAR action should appear in configuration or audit logs. During an incident, these records separate attacker behavior from defender behavior. Build a source register containing owner, collection point, coverage, normal delay, retention, parser, health signal, sensitive fields, and known blind spots. This register is one of the most useful SOC tools during a widespread investigation.",
          "practical": "For one suspicious login, list what the identity provider, endpoint agent, network sensor, application, SIEM, and case system can each contribute.",
          "tables": [
            {
              "title": "Where controls observe activity",
              "headers": [
                "Control",
                "Strongest context",
                "Typical limitation"
              ],
              "rows": [
                [
                  "Network sensor",
                  "Connections and protocols",
                  "Encrypted payload and host intent"
                ],
                [
                  "Endpoint agent",
                  "Processes, users, files",
                  "Unmanaged or unhealthy hosts"
                ],
                [
                  "Application log",
                  "Business operation and account",
                  "Only that application"
                ],
                [
                  "SIEM",
                  "Cross-source correlation",
                  "Depends on source quality"
                ],
                [
                  "SOAR",
                  "Repeatable workflow",
                  "Automates assumptions as well as good logic"
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
          "title": "Threats, vulnerabilities, exploits, and risk",
          "lead": "Accurate vocabulary keeps a finding from being mistaken for an incident or a score for a business decision.",
          "keyIdeas": [
            "A threat can cause harm; a vulnerability is an exploitable weakness.",
            "An exploit is a method that takes advantage of a weakness.",
            "Risk combines likelihood and consequence in context.",
            "Attack surface is the set of reachable opportunities, not the count of known CVEs."
          ],
          "content": "A public login page is part of an attack surface. A missing rate limit is a vulnerability. Automated credential guessing is an attack technique. A tool or script that uses a software flaw is an exploit. Risk describes how a plausible scenario could affect an objective, considering exposure, threat capability, controls, likelihood, and impact. CVSS supplies a consistent technical severity model.\n\nBase metrics describe intrinsic properties such as attack vector, attack complexity, privileges required, user interaction, and whether impact crosses a security authority.\n\nTemporal metrics account for changing exploit maturity and remediation. Environmental metrics adapt importance to the organization. A base score is useful input, but an actively exploited medium issue on an internet-facing identity system may deserve attention before an isolated high-score flaw. Reducing attack surface removes unused services, accounts, integrations, interfaces, and privileges. Vulnerability management discovers, validates, prioritizes, remediates or treats, and verifies weaknesses.\n\nThe analyst contributes evidence about observed exploitation and asset exposure rather than silently converting every scanner result into an incident.\n\n## Prioritization in practice\n\nConsider the same vulnerable library on three assets: an offline training VM, an internal build server, and an internet-facing customer portal. Technical severity is equal, but exposure, privileges, data, compensating controls, and business consequence are not. The portal may be first if exploit activity exists; the build server may become first if compromise could poison every release. Asset relationships change risk.\n\nAnalysts can add evidence to vulnerability management: observed probes, successful exploit indicators, affected process behavior, reachable path, and attacker prerequisites.\n\nThey should not mark a scanner item exploited merely because traffic reached the port. Conversely, lack of an alert is not proof of safety if the exploit is encrypted or the endpoint lacks coverage. Document the evidence threshold used for “attempted,” “successful,” and “scope unknown.”",
          "practical": "Turn “server has CVSS 9.8 vulnerability” into a risk statement that includes reachability, asset importance, evidence of exploitation, controls, and plausible impact.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Threat actors, intelligence, hunting, and malware analysis",
          "lead": "These terms describe different questions: who may act, what is known, what might be present, and how a program behaves.",
          "keyIdeas": [
            "Threat intelligence is analyzed information for a decision.",
            "Hunting tests a hypothesis against available evidence.",
            "Malware analysis studies behavior or construction.",
            "Attribution needs more evidence than a single IP address or tool."
          ],
          "content": "Threat actors include financially motivated criminals, state-linked groups, insiders, hacktivists, competitors, opportunists, and accidental actors. Motive and capability influence likely targets and persistence, but labels should follow evidence. Shared infrastructure, copied code, false flags, and compromised intermediaries make confident attribution difficult. Threat intelligence may be strategic, operational, tactical, or technical. A feed of hashes is not intelligence until context, confidence, timing, and an intended decision are added.\n\nA threat intelligence platform organizes sources, relationships, scoring, sharing, and enrichment. Threat hunting begins with a testable hypothesis;for example, that a recently abused remote-management utility may be running from user profile paths;and searches telemetry for supporting or disconfirming evidence. Static malware analysis inspects a file without running it; dynamic analysis observes it in an isolated environment. Reverse engineering examines instructions and program logic in greater depth.\n\nAnalysts at associate level should interpret safe tool output, hashes, contacted domains, process behavior, persistence, and file changes without executing unknown code on an ordinary workstation.\n\n## Intelligence discipline\n\nAn indicator has a lifecycle. Record first and last seen, source, confidence, related campaign or behavior, expected false positives, scope, and expiration. A cloud-hosting address reported malicious six months ago may now belong to an unrelated customer. Permanent blocking without review creates operational debt. A hunt should be repeatable. Save the hypothesis, dataset, query version, time range, population, result count, sampling method, exclusions, and conclusion.\n\nA null result means only that the behavior was not found in the searched evidence. It may still exist outside retention, on unmanaged systems, or under a different representation. If the hunt finds a case, preserve the original records and pivot on durable behaviors;process ancestry, authentication sequence, or protocol use;rather than relying only on changeable hashes and addresses.",
          "practical": "Write a hunt hypothesis with the behavior, affected population, required data, time range, query idea, false-positive possibilities, and decision if evidence is found.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Threat modeling, DevSecOps, and runbook automation",
          "lead": "Security operations improves when detection and response requirements are designed before deployment.",
          "keyIdeas": [
            "Threat models expose assets, entry points, trust boundaries, and misuse.",
            "DevSecOps integrates security feedback with delivery.",
            "Runbooks explain repeatable human work; playbooks coordinate broader response.",
            "Automation needs approval, error handling, and rollback."
          ],
          "content": "A threat model diagrams how data and authority move, then asks what an attacker could spoof, alter, disclose, interrupt, or elevate. The output should shape access control, logs, alert logic, abuse tests, and response paths. Operations teams can tell developers which evidence was missing during earlier incidents. DevSecOps makes security part of requirements, code review, dependency management, build integrity, testing, deployment, and runtime monitoring.\n\nIt is not the purchase of a scanning tool.\n\nFindings need ownership and feedback fast enough to change behavior. Deployment records and software provenance help analysts decide whether unusual behavior came from an authorized release. A runbook is a precise procedure for a recurring task. A playbook organizes roles and decisions around an incident type. Runbook automation can enrich an IP, gather endpoint details, open a case, or request approval.\n\nHigh-impact actions such as account disablement or host isolation should require appropriate confidence and authority. Automation logs inputs, outputs, errors, and human decisions so investigators can distinguish attacker activity from defensive action.\n\n## Operational requirements in design\n\nFor a new web service, SOC participation can define minimum audit events: authentication success and failure, authorization denial, privileged action, token creation, configuration change, data export, and security-control failure. Each event needs a stable actor, target, action, outcome, timestamp, source, and request or trace identifier. Logging secrets or full sensitive records creates another incident risk. Playbook testing should include ordinary and failure cases.\n\nWhat happens if enrichment times out, the identity service is unavailable, two alerts target the same host, or containment succeeds but the case system cannot record it?\n\nIdempotent actions avoid duplicate harm when retried. High-impact automation should present the approver with evidence, proposed scope, expected user effect, rollback, and an expiration rather than a context-free Approve button.",
          "practical": "Convert a manual alert-enrichment checklist into an automation design. Mark read-only steps, approval gates, failure behavior, rate limits, and audit fields.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Defense in depth and access control",
          "lead": "Layered security limits the chance that one mistaken assumption becomes a complete compromise.",
          "keyIdeas": [
            "Least privilege reduces authority and duration.",
            "DAC, MAC, RBAC, rule-based, time-based, and ABAC use different decision inputs.",
            "Authentication proves an identity claim; authorization permits an action; accounting records it.",
            "Zero trust avoids implicit trust based only on location."
          ],
          "content": "Defense in depth combines independent controls across identity, endpoint, application, network, data, physical space, monitoring, and recovery. Layers should address different failure modes. Three products that all depend on the same stolen administrator account are not independent defense. Discretionary access lets an authorized owner grant permissions. Mandatory access uses centrally controlled labels and clearances. Role-based access groups privileges by job function.\n\nRule-based controls apply system conditions; time-based rules add schedule; attribute-based control evaluates subject, resource, action, and environment.\n\nNondiscretionary approaches place assignment under central policy rather than an individual owner. AAA separates authentication, authorization, and accounting. Least privilege gives only needed authority; need to know limits information to the task. Zero-trust architecture continuously evaluates identity, device, resource, action, and context and limits access to explicit resources. Analysts should expect policy decisions and identity changes to appear in logs that can be correlated with resource use.\n\n## Reading an access decision\n\nAn access log should be interpreted as a policy decision made from inputs at a time. Identify the subject, authentication method, device, requested resource, action, evaluated roles or attributes, policy version, decision, session identifier, and reason. A later role change may not invalidate an already issued token unless revocation or short lifetime is configured. When investigating excessive access, compare entitlement with actual use.\n\nGroup membership shows potential permission; resource logs show exercised permission.\n\nPrivileged access management may show approval and credential checkout; endpoint and device logs show what was done. Emergency access can be legitimate, but it should be rare, time-bounded, monitored, and reconciled. The analyst’s task is to connect these records without assuming that “successful authentication” means “authorized business use.”",
          "practical": "Describe the same access decision in RBAC and ABAC: who may view a restricted case, from which device, during what assignment, and under which emergency exception.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Visibility, traffic profiles, and the five-tuple",
          "lead": "An analyst must know what evidence is absent before drawing a conclusion from what is present.",
          "keyIdeas": [
            "The five-tuple is source IP, destination IP, source port, destination port, and protocol.",
            "Encryption hides content but not every traffic feature.",
            "NAT changes address evidence and requires translation logs.",
            "Baseline profiles give volume, duration, ports, peers, and timing context."
          ],
          "content": "The five-tuple identifies a conversation at the network and transport layers. Adding timestamps, direction, interface, packets, bytes, and identity makes the record more useful. When many logs are grouped, the tuple helps isolate one host or session, but NAT, proxies, load balancers, and reused addresses can change or merge values. Network visibility sees traffic crossing a collection point, not activity that stays elsewhere.\n\nHost visibility depends on agent coverage and health.\n\nCloud visibility depends on enabled provider logs, permissions, regions, and services. Encryption protects content while leaving endpoints, certificate details, volume, timing, and sometimes names visible. Analysts state these limitations explicitly. A traffic profile records expected throughput, session duration, ports, critical address space, destinations, and time patterns. Potential data loss may appear as unusual outbound bytes, rare external peers, repeated archive uploads, or cloud-sharing events.\n\nA large transfer may be a backup; context and corroboration determine whether it is suspicious.\n\n## Following translations and intermediaries\n\nAn external service may record a proxy or NAT address rather than the originating endpoint. To attribute a connection, align external timestamp, translated address and port, NAT or proxy log, internal five-tuple, DHCP or IPAM history, and identity or device data. Clock skew or missing source ports can make the mapping ambiguous. State that ambiguity rather than choosing the closest user.\n\nBaselines should be conditioned on role and time.\n\nA backup server is expected to send large nighttime transfers; a kiosk is not. Compare with peers, prior behavior, destination age, protocol, and change calendar. Median and percentile ranges are often more useful than a simple average because network activity is skewed. A baseline is a reference for questions, not a definition that every deviation is hostile.",
          "practical": "Given flow records, group on an internal source and compare bytes, duration, destination rarity, time, and protocol with its baseline before labeling exfiltration.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Rule, behavioral, statistical, and AI-assisted detection",
          "lead": "Detection methods trade specificity, adaptability, explainability, and dependence on good baseline data.",
          "keyIdeas": [
            "Rules express known conditions.",
            "Behavioral detection looks for meaningful sequences or deviations.",
            "Statistical detection compares observations with a model or distribution.",
            "AI output is a lead that analysts validate, not evidence by authority."
          ],
          "content": "A rule may alert when a new administrator role is assigned from an unmanaged device. It is explainable and testable but only covers the encoded condition. Behavioral analytics correlates actions such as an unusual login followed by discovery, credential access, and bulk download. Statistical techniques compare rates, peers, seasonality, or sliding windows, such as counting failures during the most recent ten minutes rather than fixed clock intervals.\n\nAnomaly does not mean malicious. A new employee, deployment, deadline, or network change can appear rare. Models trained on incomplete or biased history may normalize old attacks or penalize legitimate minority behavior. Predictive AI can rank alerts, summarize events, cluster related activity, or suggest queries; generative AI may also invent details, expose sensitive prompts, or be manipulated by untrusted content.\n\nEvery production detection needs a hypothesis, required sources, logic or model version, severity, owner, known limitations, test cases, response, and performance review. Analysts verify cited events in original telemetry and record when AI contributed to a decision.\n\n## Detection engineering loop\n\nTreat a detection as maintained code. Keep test fixtures for true and benign cases, version the logic, peer review changes, deploy in observe-only mode when appropriate, and compare alert volume and case outcome before and after release. Track source delay and field null rates because a detection can silently fail when a parser changes. Useful quality measures include precision among reviewed alerts, coverage of known scenarios, time to useful evidence, analyst effort, repeat-alert rate, and false-negative findings from incidents or hunts.\n\nAvoid optimizing only for a low false-positive count; a rule that never fires is quiet but useless. AI-generated summaries must cite event records. If the summary says a process executed, the analyst verifies the process event and timestamp before acting.",
          "practical": "Design a sliding-window detector for repeated login failure. Choose the entity, window, threshold, exclusions, reset behavior, severity, and evidence an analyst sees.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Cryptography, certificates, and analyst evidence",
          "lead": "Analysts use cryptographic records to explain protection and identity without assuming that encryption or a valid certificate makes activity benign.",
          "keyIdeas": [
            "Symmetric and asymmetric cryptography solve different key problems",
            "Hashes support integrity and identification but do not hide content",
            "Certificates bind public keys to named subjects under a trust system"
          ],
          "content": "Symmetric encryption uses one shared secret for encryption and decryption and is efficient for stored data and sessions. Asymmetric systems use a public and private key pair and support key agreement, encryption in suitable schemes, and digital signatures. Real protocols commonly authenticate or establish a session with asymmetric operations and then protect bulk traffic with symmetric keys. A cryptographic hash is a fixed-length digest.\n\nAnalysts use hashes to identify an exact file, verify that an evidence copy still matches, and search telemetry.\n\nOne changed byte produces a different digest, so attackers can evade exact hash matching through minor changes. A matching hash does not prove that a source was trustworthy. Password systems use salted, deliberately slow password hashing rather than ordinary fast file hashes. A digital signature supports integrity and origin when the private key and identity are trustworthy. A certificate contains a subject, public key, issuer, validity, extensions, and signature.\n\nA chain leads toward a trusted root. Analysts review subject alternative names, issuer, validity, key use, serial, fingerprint, transparency history, and revocation information. Expired or self-signed does not automatically mean malicious, and a publicly trusted certificate does not make a domain safe. TLS evidence can include protocol version, cipher, certificate, server name, client fingerprint, source and destination, and session timing even when application content is unavailable.\n\nState which metadata the sensor actually captured. Do not claim decryption without approved keys and a sensor that performed it.",
          "practical": "For a suspicious TLS connection, record the certificate and flow facts separately from reputation and behavioral inference. Explain what each can and cannot prove.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Data classification, privacy, and handling in the SOC",
          "lead": "The case record and the telemetry it contains may be as sensitive as the system being investigated.",
          "keyIdeas": [
            "Classification maps information value to handling",
            "Privacy concerns appropriate collection and use, not only secrecy",
            "Minimize access and retention while preserving evidence requirements"
          ],
          "content": "Organizations label information with schemes such as public, internal, confidential, and restricted. The owner defines classification and access need; custodians operate protection; analysts follow handling rules. Logs can contain identities, URLs, message subjects, document names, locations, and tokens. A packet capture can contain message or credential content. Copying this data into an unapproved notebook or public analysis service creates a second incident risk.\n\nPrivacy asks why information is collected, who uses it, how it is shared, how long it remains, and how rights or obligations are handled.\n\nSecurity monitoring should be purposeful and proportionate. Broad visibility does not create unlimited permission to browse employee activity. Use case scope, least privilege, audit, redaction, and approved escalation for sensitive personal data. Evidence preservation and minimization can coexist. Preserve the authoritative artifact under restricted access, then create a redacted working or reporting view. Record what was removed and why. Legal hold can change normal deletion, but analysts follow authorized legal and records processes rather than making the determination alone.\n\nSharing indicators also needs judgment. A domain may be public, while a query showing which executive clicked it is not. TLP or organizational sharing markings describe distribution. Before submitting an artifact to a third party, consider confidentiality, provider terms, retention, and whether submission alerts the adversary.",
          "practical": "Classify a case note, PCAP, malware hash, employee interview, authentication log, and executive report. Define storage, audience, redaction, retention, and sharing for each.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "2.0 Security Monitoring",
      "weight": "25% of the exam",
      "intro": "Monitoring is the disciplined collection and interpretation of evidence. The analyst must understand what each source records, what transformations occur, and what remains invisible.",
      "topics": [
        {
          "title": "Attack surface and telemetry architecture",
          "lead": "Collection should follow important assets and attack paths rather than collecting everything without purpose.",
          "keyIdeas": [
            "Attack surface includes people, identities, services, interfaces, suppliers, and physical paths.",
            "Collection points should surround trust boundaries.",
            "Time, asset, and identity normalization enable correlation.",
            "Telemetry itself needs confidentiality, integrity, availability, and retention."
          ],
          "content": "An attack surface inventory includes internet services, remote access, email, endpoints, applications, APIs, cloud control planes, suppliers, credentials, and human workflows. Vulnerabilities are weaknesses within that surface. The monitoring architecture places sensors and logs where they can observe high-value events: identity decisions, endpoint execution, network boundaries, application transactions, and administrative changes. Pipelines collect, buffer, parse, normalize, enrich, route, store, and retain events.\n\nSource timestamps, receipt timestamps, time zones, asset identifiers, user mappings, and parser versions matter.\n\nA malformed parser can silently put the wrong address into a field. Source health, expected volume, queue delay, and gaps should be monitored. Logs may contain credentials, content, and personal data. Access, encryption, integrity, deletion, and legal requirements apply. Retention should support investigation needs without keeping everything indefinitely. Before writing a detection, the analyst confirms that the needed event is enabled, reaches the platform, and retains its meaning.\n\n## Designing collection points\n\nStart with important services and draw their paths: user to identity provider, DNS, proxy, application, database, cloud control plane, and backup. Place evidence sources where a meaningful decision occurs. A tap near the internet edge sees different traffic from an east-west virtual sensor. Endpoint logs can see local connections that never cross a physical switch. Collection design includes bandwidth, event volume, burst behavior, transport security, buffering, backpressure, schema, retention tier, and access control.\n\nIf a collector falls behind, determine whether it drops oldest, newest, or selected events and how that condition alerts. Use separate health telemetry so “zero security events” cannot be confused with “source stopped sending.”",
          "practical": "Draw a telemetry path from endpoint to SIEM. Mark buffering, parsing, identity enrichment, storage, alerting, case creation, retention, and failure monitoring.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Full packets, sessions, transactions, statistics, metadata, and alerts",
          "lead": "Data categories answer different questions and should not be treated as interchangeable.",
          "keyIdeas": [
            "Full packet data preserves captured headers and visible payload.",
            "Session or flow data summarizes conversations.",
            "Transaction data records application operations.",
            "Alerts are conclusions generated from other evidence and need validation."
          ],
          "content": "A packet capture contains frames observed at one interface and time. Snap length, packet loss, asymmetric routing, offloading, capture filters, and encryption limit it. Session data groups related traffic. NetFlow or IPFIX commonly records addresses, ports, protocol, packets, bytes, times, interfaces, and flags without payload. Transaction logs describe completed operations such as a DNS query, proxy request, email delivery, authentication, or API call.\n\nStatistical data aggregates counts, rates, distributions, and baselines.\n\nMetadata describes other data: a file hash, certificate subject, message sender, or image dimensions. Alert data is produced when a rule, signature, model, or analyst decides that evidence meets a condition. Use the least expensive source that answers the question, then pivot to richer evidence. Flow is excellent for finding rare connections across months; packet data is better for interpreting a short unencrypted protocol exchange; application logs identify the account and business action.\n\n## Choosing the right level of evidence\n\nFull packet capture provides detail but costs storage and may contain sensitive payloads. Session or flow data scales further and answers who communicated, when, how long, and how much, but not every application action. Transaction logs describe protocol or application operations. Statistics reveal trends. Metadata extracts selected features. Alerts are conclusions produced by logic and should link back to source evidence.\n\nBegin with the cheapest evidence that can answer the question, then escalate.\n\nFlow records can scope all internal hosts contacting a destination; targeted packets can explain one protocol exchange; endpoint events can identify the process. Preserve original data and record filters. A screenshot is convenient for communication but is not a substitute for the searchable event or capture from which it came.",
          "practical": "For “which host connected?”, “what URL was requested?”, “what bytes were sent?”, and “did a rule match?”, choose the minimum useful data source and explain its limitation.",
          "tables": [
            {
              "title": "Monitoring data categories",
              "headers": [
                "Category",
                "Preserves",
                "Good use"
              ],
              "rows": [
                [
                  "Full packet",
                  "Captured headers and visible payload",
                  "Protocol reconstruction"
                ],
                [
                  "Session/flow",
                  "Conversation summary",
                  "Wide and long-term traffic search"
                ],
                [
                  "Transaction",
                  "Application operation",
                  "User and business context"
                ],
                [
                  "Statistical",
                  "Aggregated behavior",
                  "Baseline and anomaly"
                ],
                [
                  "Metadata",
                  "Properties about an object",
                  "Fast enrichment"
                ],
                [
                  "Alert",
                  "Detection conclusion",
                  "Triage queue"
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
          "title": "tcpdump, TShark, and safe packet collection",
          "lead": "Command-line capture tools make collection reproducible when interfaces, filters, and limits are explicit.",
          "keyIdeas": [
            "Capture filters reduce what is recorded; display filters change what is shown later.",
            "Ring buffers prevent uncontrolled disk growth.",
            "Packet collection requires authorization and data protection.",
            "A capture proves only what crossed that observation point."
          ],
          "content": "tcpdump uses packet-capture filters before or during collection. TShark can capture or read files and apply Wireshark display filters. Analysts record the interface, host clock, command, duration, snap length, filter, capture location, and packet-loss statistics. Capturing “any” interface may change link-layer details. Broad capture can collect passwords, tokens, private messages, and unrelated user activity. Scope it to the approved question, store it securely, and delete according to the case policy.\n\nFor learning, capture traffic generated by your own machine and services rather than importing unexplained “malicious” data. Capture filters such as host, net, port, and protocol expressions are different from display filters such as dns, tcp.flags.syn == 1, or http.request. If a capture filter excluded traffic, no later display filter can recover it.\n\n## Capture planning\n\nDefine interface, direction, VLAN or tunnel context, host, protocol, time, expected volume, and stopping condition before capture. A capture filter reduces what is collected; a display filter changes what is shown after collection. Capturing on “any” can change link-layer detail and duplicate packets. Hardware offload may make checksums appear invalid on a host capture because the NIC fills them after the capture point.\n\nProtect PCAP files as sensitive data.\n\nUse an approved location, minimum duration, access logging, and retention. Record sensor clock, interface, snap length, dropped-packet counter, filter, and file hash. If traffic is mirrored, confirm the mirror includes both directions and has capacity; oversubscription can selectively omit evidence.",
          "practical": "Capture a DNS query and a connection to a site you are authorized to access; describe only the packets you actually observe.",
          "commands": [
            {
              "title": "Bounded local capture",
              "description": "Replace the interface if necessary. Stop after a short authorized observation.",
              "code": "sudo tcpdump -i en0 -nn -s 0 -c 200 -w local-study.pcap\n\ntshark -r local-study.pcap -q -z io,phs\ntshark -r local-study.pcap -Y \"dns.flags.response == 0\" -T fields -e frame.time -e ip.src -e dns.qry.name"
            }
          ],
          "lab": {
            "goal": "Create and document a small capture of your own DNS and HTTPS traffic.",
            "environment": "A personal lab workstation with tcpdump or Wireshark; no third-party private network.",
            "steps": [
              "Start a bounded capture.",
              "Perform one DNS lookup and one HTTPS request to a site you control or are authorized to use.",
              "Stop collection and compute a SHA-256 hash of the PCAP.",
              "Record collection point, command, start and end time, and limitations.",
              "Open the capture and verify the observed protocols without claiming encrypted content is visible."
            ],
            "expected": "A small PCAP plus collection notes based entirely on traffic you generated.",
            "verification": "A second reader can reproduce the filters and distinguish observed facts from interpretation."
          },
          "tables": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "NetFlow, firewalls, application control, and content filters",
          "lead": "Security technologies produce records shaped by where they sit and the decisions they make.",
          "keyIdeas": [
            "Flow records summarize traffic, not payload.",
            "Stateful firewalls track conversations.",
            "Next-generation controls add application and identity context.",
            "Web and email filters record policy decisions and content metadata."
          ],
          "content": "NetFlow and IPFIX show who communicated, when, for how long, over which protocol, and with how many packets and bytes. Sampling and exporter configuration affect completeness. Traditional stateful firewalls log address, port, protocol, rule, action, translation, interface, and connection state. Next-generation firewalls may add application, URL category, user, TLS, file, and threat-signature information. Application visibility identifies protocols beyond port convention, but encryption, evasion, and unsupported applications limit accuracy.\n\nWeb filters may log user, URL, category, method, bytes, action, and upstream result. Email filters may record envelope sender and recipient, authentication results, attachment hashes, URLs, verdicts, and delivery action. Message content may be unavailable or restricted. When an alert cites “blocked malware,” inspect which engine produced the verdict, which object it evaluated, whether delivery occurred, and which endpoint or account was involved.\n\nA block event can still matter if the same user received a related message through another channel.\n\n## Interpreting flow and policy\n\nFlow exporters summarize conversations when they begin, end, or time out. Long sessions can appear as several records. Sampling reduces volume but can miss small conversations and changes byte interpretation. Know exporter, observation point, active and inactive timeout, sampling, direction, and whether post-NAT values are included. Firewall allow logs show that policy permitted traffic, not that the application request succeeded.\n\nDeny logs may reflect scanning, stale configuration, or a broken legitimate dependency.\n\nApplication identification can change after more packets are observed. Content filters and proxies may terminate one connection and create another, so correlate request IDs, authenticated user, URL category, and upstream flow rather than expecting one five-tuple end to end.",
          "practical": "Compare a firewall allow log, proxy transaction, and endpoint connection event for one web request. Identify which identifiers let you join them.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Visibility changes: ACLs, NAT, tunnels, Tor, P2P, encryption, and load balancers",
          "lead": "Network transformations alter the identifiers and content available at each collection point.",
          "keyIdeas": [
            "ACLs may deny traffic before deeper sensors see it.",
            "NAT and proxies replace original connection attributes.",
            "Tunnels and encryption move visibility to endpoints or termination points.",
            "Load balancers require correlation across client and backend legs."
          ],
          "content": "An access list can block traffic and may log only counters or summaries. NAT/PAT rewrites addresses and ports, so attribution requires translation records and synchronized time. A forward proxy originates a new connection for a client; a reverse proxy or load balancer accepts a client connection and creates a backend connection. Headers can preserve client information but must be trusted only from approved intermediaries.\n\nVPNs, overlay networks, Tor, and other tunnels encapsulate traffic.\n\nAn outer flow identifies tunnel endpoints while inner activity becomes visible at a termination point if collection exists there. TLS encrypts application content but leaves varying amounts of connection metadata. Peer-to-peer traffic changes roles dynamically and may use many peers and ports. The analyst draws the traffic path and asks what each sensor sees before interpreting addresses as hosts or ports as applications.\n\nTwo logs with different source addresses may describe the same session; one log may aggregate several clients.\n\n## Reconstructing a path\n\nFor a reported connection, list each transformation: client, local NAT, VPN or tunnel, proxy, load balancer, service, and return path. At each step record the addresses, ports, identifiers, certificate or user context, and available logs. A load balancer may preserve the client in a header; a proxy may authenticate the user; a VPN concentrator maps a tunnel address to an account.\n\nTor and peer-to-peer traffic complicate attribution because peers and exits change roles.\n\nAn exit address identifies the last relay, not the original person. Encrypted tunnels hide inner destinations from intermediate sensors. Analysts should describe what a control observed;outer tunnel, decrypted session, or application request;and avoid attributing beyond the evidence.",
          "practical": "Draw a client-to-load-balancer-to-server flow with NAT. Label original and translated addresses, connection IDs, timestamps, and the log needed at each hop.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Network, web, social-engineering, and endpoint attacks",
          "lead": "Attack names are useful only when analysts can connect them to observable behavior and affected controls.",
          "keyIdeas": [
            "Protocol attacks abuse trust or implementation in network behavior.",
            "Injection makes untrusted data alter an interpreter.",
            "Social engineering manipulates a person or process.",
            "Endpoint attacks commonly lead to execution, persistence, credential access, C2, and impact."
          ],
          "content": "Network attacks include spoofing, on-path manipulation, replay, route or name poisoning, malformed protocol input, denial of service, and distributed denial of service. Web attacks include SQL and command injection, cross-site scripting, request forgery, path traversal, broken object authorization, and insecure file handling. Observables differ by architecture and encryption. Social engineering uses urgency, authority, fear, curiosity, or trust across email, calls, messages, meetings, and in-person contact.\n\nGenerative AI can improve grammar, scale personalization, imitate voices, and produce plausible context; it does not make every polished message malicious. Verification should move high-risk requests to a trusted independent channel. Endpoint attacks include memory corruption, malicious documents, script execution, credential theft, persistence, command-and-control, ransomware, and data collection. Analysts should describe a behavior chain rather than infer malware from one unusual process.\n\nCorrelate identity, process ancestry, file origin, network activity, persistence, and user report.\n\n## Attack-chain correlation\n\nOne case may begin with a message, continue through a browser redirect, create an endpoint process, retrieve a payload, authenticate to a service, and move data. Email headers, secure web gateway, DNS, endpoint process, identity, cloud audit, and flow records each show one portion. Align them through time, user, device, URL, process, session, and request identifiers. Classify behaviors precisely. A SQL injection string in an access log is an attempt; success requires response, database, application, or data evidence.\n\nA macro-capable file is a risk, not proof it executed. A connection to a rare domain is a lead, not command-and-control by itself. This discipline preserves analyst credibility and improves escalation.",
          "practical": "For a suspicious attachment, list evidence expected from email, browser, endpoint, DNS, proxy, identity, and file-analysis systems.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Evasion, obfuscation, and certificate context",
          "lead": "Attackers hide meaning or blend into trusted channels; analysts respond by correlating endpoints, identity, timing, and protocol metadata.",
          "keyIdeas": [
            "Encoding is representation, encryption is protected transformation, and obfuscation impedes interpretation.",
            "Proxies and tunnels change apparent origin.",
            "Certificates bind keys to names under a trust process.",
            "A valid certificate does not make content benign."
          ],
          "content": "Evasion techniques include fragmentation, protocol ambiguity, low-and-slow timing, encrypted tunnels, domain generation, fast-changing infrastructure, proxies, living-off-the-land tools, packing, and encoded commands. A sensor's parser may interpret traffic differently from an endpoint. Normalization and multiple perspectives reduce ambiguity. Symmetric cryptography protects data with a shared key; asymmetric cryptography supports key agreement and signatures through public/private pairs. In TLS, the cipher suite, protocol version, key exchange, certificate chain, names, validity, and signature matter.\n\nPKCS names a family of public-key standards and formats rather than one algorithm. Analysts can use certificate issuer, subject alternative names, serial number, fingerprints, validity, and reuse as pivots. They still verify domain ownership and business context. Certificate errors may indicate interception, misconfiguration, or attack; the evidence determines which.\n\n## Signals under concealment\n\nAttackers may encode commands, fragment traffic, vary timing, use trusted cloud services, masquerade process names, pack binaries, or tunnel through allowed protocols. Each technique changes observable features but rarely removes all of them. Process ancestry, destination rarity, certificate age, byte pattern, periodicity, and identity sequence can remain. Certificate inspection should include subject alternative names, issuer, validity, key usage, fingerprint, chain, and where the certificate was observed.\n\nA valid public certificate proves control of a name under CA validation, not benevolent content. A self-signed certificate is not automatically malicious. Compare the certificate with service role, history, and other evidence before assigning meaning.",
          "practical": "Inspect the certificate of a service you are authorized to use. Record names, issuer, validity, key type, signature, and chain without treating those fields as a reputation verdict.",
          "commands": [
            {
              "title": "Inspect a live service certificate",
              "description": "Use only a public or owned service.",
              "code": "openssl s_client -connect example.com:443 -servername example.com -showcerts </dev/null\n\nopenssl x509 -in certificate.pem -noout -subject -issuer -serial -dates -fingerprint -sha256"
            }
          ],
          "tables": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "A repeatable alert-triage workflow",
          "lead": "Triage establishes whether an alert represents relevant activity, what happened, and what should happen next.",
          "keyIdeas": [
            "Start with alert logic and source health.",
            "Build a timeline around the entity, not only the triggering event.",
            "Classify outcome separately from severity.",
            "Record evidence, queries, assumptions, and action."
          ],
          "content": "Begin by reading the detection logic, matched fields, timestamps, source system, and known limitations. Confirm telemetry arrived normally and the parser mapped fields correctly. Identify the protected asset, owner, user, criticality, exposure, and expected behavior. Then pivot around time, identity, host, network tuple, process, file, and related alerts. An alert can be a true positive with impact, a true positive with no impact because a control stopped it, a false positive where the condition was not actually present, or benign activity that matched correctly but is acceptable.\n\nA false negative is missed malicious activity and is usually discovered through another source or later review. True negatives are ordinary nonmatches and rarely appear in the queue. The analyst records the question asked, query, time zone, evidence, conclusion, confidence, scope, action, and escalation reason. Closing as “false positive” without an explanation prevents tuning and future learning.\n\n## A bounded first investigation\n\nStart with alert logic and source health. Confirm the raw event, normalize time, identify subject and object, and determine whether the activity succeeded. Establish the smallest affected population, then pivot to nearby time, same identity, same host, and durable indicators. Check changes and known business activity before containment. Define an escalation threshold before the search expands indefinitely. Escalate when impact, privileges, persistence, spread, protected data, uncertainty, or required authority exceeds the analyst’s boundary.\n\nClose only with a reason: benign expected activity, false detection logic, duplicate case, mitigated event, or insufficient evidence with stated visibility. Feed false positives back to detection engineering instead of silently suppressing them.",
          "practical": "Triage a safe test alert generated by your own failed login attempts. Build a short timeline and document why it is authorized test activity rather than inventing a malicious story.",
          "lab": {
            "goal": "Triage a benign simulated alert from raw evidence through disposition.",
            "environment": "Use supplied synthetic events or an isolated lab; do not generate activity against external systems.",
            "steps": [
              "Confirm source health and raw event.",
              "Normalize time and identify entities.",
              "Determine success, scope, and context.",
              "Record queries, evidence, uncertainty, and disposition.",
              "Propose one bounded tuning or follow-up action."
            ],
            "expected": "A reviewer can reproduce the conclusion from cited records.",
            "verification": "Have another student follow the case note without verbal explanation and identify any missing evidence."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Worked workflow: suspicious DNS followed by HTTPS",
          "lead": "A useful network alert is investigated as a sequence across resolver, flow, TLS, proxy, endpoint, and identity evidence.",
          "keyIdeas": [
            "Resolve the client identity at the event time",
            "Distinguish requested name from reached address and application action",
            "Compare rare behavior with legitimate software and user context"
          ],
          "content": "Suppose a detector reports repeated DNS requests for a newly observed domain followed by HTTPS to one returned address. First validate raw resolver events, timestamps, client address, query type, response, TTL, and resolver. Map the client address to device and user at that time through DHCP, VPN, asset, or endpoint records. A current inventory lookup can be wrong for a historical dynamic address.\n\nNext inspect flow or firewall records for connection success, direction, ports, bytes, duration, NAT, and action.\n\nTLS metadata may show server name, certificate, version, and fingerprints. A proxy can add authenticated user and URL path, but only if the traffic traversed it. Endpoint data can identify the process, parent, command line, signer, file origin, and other destinations. Build benign alternatives. Browsers, update agents, advertising, security tools, and content delivery can contact new domains. Reputation is one input and can lag both malicious and legitimate infrastructure.\n\nLook for an unusual process, persistence, downloaded file, repeated beacon timing, related hosts, or identity activity. Scope by domain, resolved addresses during the relevant time, certificate, process pattern, and behavioral sequence. Avoid blocking a shared provider address until collateral use is understood. Close with observation, assessment, confidence, affected entities, action, limitations, and a detection improvement.",
          "practical": "Write the exact pivots and join keys for this workflow. Include how NAT, shared resolvers, encrypted DNS, and dynamic addressing can break a naive query.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Cloud and SaaS monitoring for a SOC",
          "lead": "Cloud control planes and SaaS applications make identity and API activity central evidence sources.",
          "keyIdeas": [
            "Control-plane and data-plane logs answer different questions",
            "Temporary credentials must be traced to issuance",
            "Coverage varies by account, region, service, license, and configuration"
          ],
          "content": "Cloud audit records commonly identify actor, role or service principal, source, user agent, request, resource, region, result, and correlation ID. Control-plane events cover administration such as policy, key, workload, logging, and network changes. Data-plane logs cover use such as object reads or database activity and may require separate enablement. SaaS evidence includes sign-ins, sessions, factor changes, application consent, mailbox or sharing rules, administrator changes, downloads, and audit search.\n\nA valid login can still represent token theft. Trace a session to its authentication or federation event and examine device, factor, application, privilege, and later resource use. Coverage should be inventoried. Confirm every account or subscription, enabled log category, region, destination, retention, parser, expected volume, and service limitation. A quiet cloud source can mean no activity or failed collection. Preserve audit exports and configuration before deleting a suspicious resource.\n\nSOAR enrichment can add owner, resource value, identity risk, provider threat finding, and related cases, but provider severity is not the organization's business priority. Response may revoke keys and sessions, restrict policy, quarantine workload, or preserve a snapshot. Verify across accounts and regions and search for alternate persistence.",
          "practical": "Create a cloud monitoring matrix with identity, control plane, storage, workload, network, deployment, and SaaS records. Add the question and retention gap for each.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "SIEM query development and result validation",
          "lead": "A SIEM query is a reproducible test of a hypothesis, not a spell whose result can be trusted without checking source fields.",
          "keyIdeas": [
            "Confirm data source, time field, parser, and coverage first",
            "Filter, aggregate, join, and sequence answer different questions",
            "Keep raw-event examples beside normalized results"
          ],
          "content": "Begin with a sentence: “I expect these authentication failures to share a source, target several users, and precede a successful session within ten minutes.” Identify required sources and fields before writing syntax. Check that the records exist in the time range, the parser populated fields, and source time differs acceptably from ingestion time. Filter to the relevant event type, then inspect raw and normalized examples.\n\nAggregate by the entity that makes the hypothesis meaningful. Counting by username detects a targeted brute force; counting distinct usernames by source may detect spraying. A join links sources by stable identity, host, session, request, or flow. A sequence adds ordering and a time bound. Addresses alone can be weak joins behind NAT, proxies, or shared resolvers. Validate surprising output manually.\n\nA null field can group unrelated events.\n\nCase differences and domain suffixes can split one user. Current asset enrichment can mislabel a historical address. Time zones and delayed mobile uploads can reverse apparent order. Preserve the exact query, platform time range, result count, representative event IDs, and any lookup version. For a detection query, test a known positive, close benign examples, empty data, duplicate records, and expected volume.\n\nBroad allowlists hide future threats; prefer stable context with owner and expiration.\n\nAfter tuning, compare volume, precision, delay, and replayed positives. A query is complete when another analyst can rerun it and understand both the answer and its blind spots.",
          "practical": "Write one query in pseudocode using source, filter, group, threshold, time window, join, output fields, and raw-event verification. Add two benign explanations to test.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "3.0 Host-Based Analysis",
      "weight": "20% of the exam",
      "intro": "Host evidence connects a network event to a user, process, file, service, configuration change, or persistence mechanism.",
      "topics": [
        {
          "title": "Endpoint protection and telemetry",
          "lead": "Host controls observe execution and state that network tools cannot see.",
          "keyIdeas": [
            "HIDS detects selected host events.",
            "Antimalware combines signatures, reputation, and behavior.",
            "Host firewalls enforce local network policy.",
            "Predictive systems still require validation and source health."
          ],
          "content": "Host intrusion detection watches files, configuration, logs, or behavior and reports changes. Antivirus and antimalware scan files and activity using multiple engines. Endpoint detection and response collects process, file, registry, identity, and network evidence and may isolate a host or acquire artifacts. Host firewalls limit inbound and outbound communication with device context. Rules recognize known conditions; behavioral logic correlates actions; predictive AI estimates suspiciousness from learned patterns.\n\nCoverage depends on installed and healthy agents, supported operating systems, policy, sensor mode, and retention. An endpoint that stopped checking in is not clean;it is unobserved. Analysts distinguish prevention from detection. A quarantined file may never have executed, while a blocked network connection may follow successful execution. Product verdicts are leads. Review the object, process ancestry, user, command line, prevalence, signature, related network activity, and remediation status.\n\n## Endpoint evidence model\n\nEndpoint telemetry commonly records process creation and ancestry, command line, signer and hash, file and registry changes, network connections, user session, module loads, and security-product action. Coverage varies by platform and configuration. A prevention event may stop execution before later evidence exists; an audit-only event may observe without blocking. Check agent version, policy, last contact, tamper state, and collection exclusions.\n\nIsolation often preserves a management channel while blocking ordinary network access, but implementation differs. Before isolating a critical server, consider business effect and authorization. After release, verify that the root cause;not only the visible process;was addressed.",
          "practical": "For one endpoint alert, create a field checklist: host, user, parent and child process, command, file path, hash, signature, network, persistence, first seen, prevalence, and action.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Windows processes, services, registry, and file system",
          "lead": "Windows investigations connect execution with accounts, persistence, and operating-system facilities.",
          "keyIdeas": [
            "Processes have parents, tokens, command lines, modules, and network activity.",
            "Services and scheduled tasks can provide persistence.",
            "Registry hives store configuration and user state.",
            "Expected names and paths matter more than names alone."
          ],
          "content": "Windows starts user and system processes under security tokens that carry identities and privileges. Process ancestry helps explain execution, but parent relationships can be manipulated or obscured. Command lines, image paths, signatures, hashes, loaded modules, integrity level, and network connections provide context. Services, scheduled tasks, startup folders, logon entries, WMI subscriptions, browser extensions, and user profile locations are common persistence areas.\n\nThe registry contains machine and user hives; analysts should know that changes need timing and owner context rather than assuming every Run key is malicious.\n\nNTFS metadata, alternate data streams, prefetch, shortcuts, and recycle information may support a timeline depending on configuration. Core Windows processes normally appear in characteristic paths and relationships. A familiar filename in a user-writable directory deserves examination, while an unusual name is not proof of malware. Compare with a known-good peer, software inventory, deployment records, and signature.\n\n## Windows relationships\n\nProcess ancestry provides context: a shell launched by an administrator differs from a document reader launching the same shell with an encoded command. Record image path, command line, parent, user, integrity level, signer, hash, start time, and network activity. Names can be copied; path and signature help. Services and scheduled tasks provide legitimate automation and persistence. Registry Run keys and startup folders are additional locations, while WMI subscriptions and installed extensions can be relevant in deeper cases.\n\nPrefetch, link files, file metadata, and NTFS records may support timelines, but availability and interpretation depend on system configuration. Never change a live suspect merely to obtain prettier evidence unless the response plan authorizes it.",
          "practical": "Build a baseline on your own Windows lab: list running processes, services, scheduled tasks, listening ports, and startup entries, then explain two legitimate variations.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Windows event and command-line investigation",
          "lead": "Windows logs become useful when the analyst understands provider, channel, event meaning, and audit configuration.",
          "keyIdeas": [
            "Event IDs are interpreted with provider and version.",
            "Security logs depend on enabled audit policy.",
            "PowerShell and process-creation logging add valuable context.",
            "Event forwarding improves central availability."
          ],
          "content": "## Windows Event\n\nLog separates channels such as Security, System, Application, PowerShell, and product-specific operational logs. An event ID is not globally unique; interpret it with provider, channel, fields, host, and operating-system version. Security events can show logons, account changes, process creation, and policy events only when corresponding auditing is enabled. Useful investigations correlate successful and failed logons, logon type, source workstation or address, account, privilege assignment, process creation, service installation, task creation, and PowerShell activity.\n\nXML fields are more reliable than parsing rendered prose. Central forwarding protects evidence when an endpoint is lost and provides cross-host search. Commands should be run only on authorized systems and their effect recorded. Live queries change access timestamps and system state slightly; formal forensic work may require different acquisition procedures.\n\n## Event correlation\n\nWindows event IDs need provider, channel, audit policy, and operating-system context. A logon event on a workstation, domain controller, and cloud identity source describes different stages. Correlate logon type, account, source address, workstation, authentication package, and logon ID with process and network events. PowerShell operational and script-block logging can reveal content when enabled; command history alone is incomplete. Useful read-only commands include whoami /all, tasklist /v, netstat -ano, sc query, schtasks /query, and wevtutil for controlled export.\n\nRun tools according to evidence procedure, record their effect, and prefer collected EDR data when live commands would alter a sensitive system.",
          "practical": "Generate a harmless failed login or start a benign process in your own lab, find the actual event, and document the provider, event ID, time, account, host, and relevant fields.",
          "commands": [
            {
              "title": "Read-only Windows triage examples",
              "description": "Run only under the approved incident procedure; command execution changes system state and must be documented.",
              "code": "whoami /all\ntasklist /v\nnetstat -ano\nsc query\nschtasks /query /fo LIST /v\nwevtutil gli Security"
            }
          ],
          "tables": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Linux processes, services, files, and logs",
          "lead": "Linux evidence is distributed across the kernel, service manager, authentication stack, applications, and ordinary text or journal logs.",
          "keyIdeas": [
            "Process identity includes real and effective users, ancestry, arguments, and open resources.",
            "systemd units and cron can establish persistence.",
            "Permissions, ownership, hashes, and package provenance help assess files.",
            "Log location and retention vary by distribution."
          ],
          "content": "Linux exposes process information through tools and /proc. Analysts examine parent and child relationships, effective user, command, executable, working directory, environment with care, open files, sockets, namespaces, and capabilities. Deleted executables may remain mapped by a running process. Services may be managed by systemd or other init systems. Persistence can use enabled units, timers, cron, shell profiles, SSH keys, dynamic loader configuration, containers, or application-specific startup.\n\nFile assessment includes owner, mode, extended attributes, timestamps, hash, signature or package source, and whether the path is writable by an unexpected user. Logs may live in the systemd journal, /var/log, audit subsystem, authentication facilities, kernel ring buffer, applications, or centralized collectors. Analysts must confirm time zone, rotation, forwarding, and whether the expected source was enabled. Root access can alter local evidence, which is why remote collection and cross-source corroboration matter.\n\n## Linux investigation context\n\nOn Linux, connect process ID, parent ID, executable path, command line, effective user, open files, sockets, namespaces, cgroups, and service manager. A process inside a container may have different host and container identities. Deleted executables can remain mapped by a running process and appear through /proc or lsof. Authentication and service evidence may live in journald, distribution-specific files under /var/log, auditd, application logs, shell history, cron, systemd units and timers, and cloud agents.\n\nCommands such as ps, ss, lsof, systemctl, journalctl, last, and find can support triage. Use read-only forms where possible, preserve timestamps, and record the collection user and time.",
          "practical": "Record a baseline of your own Linux lab, then start a temporary local service and identify exactly which process, socket, unit, and log changes appeared.",
          "commands": [
            {
              "title": "Read-only Linux triage examples",
              "description": "Record collection time, user, host, and output location.",
              "code": "date -u\nps auxf\nss -plant\nlsof -nP\nsystemctl --failed\njournalctl --since \"1 hour ago\""
            }
          ],
          "tables": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Attribution, indicators, and evidence types",
          "lead": "An investigation should connect evidence to an event without claiming more certainty about the actor than the data supports.",
          "keyIdeas": [
            "IOCs are observed artifacts associated with compromise.",
            "IOAs describe behavior or intent.",
            "Best evidence is the most original reliable form available.",
            "Corroborative evidence supports another fact; indirect evidence requires inference."
          ],
          "content": "An indicator of compromise may be a malicious file hash, domain, persistence entry, or account change observed in a confirmed incident. An indicator of attack describes behavior such as credential dumping or disabling defenses. Indicators age and can be shared by legitimate infrastructure, so context and confidence travel with them. Attribution can mean assigning activity to a host, user, malware family, campaign, or human actor.\n\nEach level needs different evidence. An IP address may identify a translated exit, VPN, proxy, or compromised server rather than a person. Assets, identities, timestamps, toolmarks, infrastructure, motive, and external intelligence contribute, but analysts should state alternatives. Best evidence is the original or most reliable available form; a verified forensic image may preserve a disk better than screenshots. Corroborative evidence supports another source.\n\nIndirect or circumstantial evidence requires reasoning to connect it to a fact. Chain of custody records collection and control; it does not make weak evidence strong.\n\n## Claims and confidence\n\nSeparate the claim “this host contacted an address associated with a campaign” from “that campaign compromised this host” and from “a named actor performed the intrusion.” Each requires more evidence. Infrastructure can be shared, rented, compromised, reassigned, or intentionally imitated. Classify evidence as direct observation, derived field, enrichment, analyst inference, or external report. Record provenance and confidence. Hashes identify exact content but change with trivial modification.\n\nDomains and addresses are easy to rotate. Behavioral sequences and infrastructure relationships can be more durable but less specific. Use multiple independent sources when a decision has high consequence.",
          "practical": "Rewrite “the attacker at this IP ran malware” into separate supported claims about observed connection, host process, file evidence, and unknown actor identity.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Timeline analysis and disk-image integrity",
          "lead": "A timeline brings heterogeneous events into one ordered account while preserving clock and source limitations.",
          "keyIdeas": [
            "Normalize time zones without losing original values.",
            "Record clock drift and ingestion delay.",
            "Hashes compare image integrity.",
            "A changed hash shows difference, not which content changed or why."
          ],
          "content": "Host timelines combine file-system metadata, event logs, endpoint telemetry, browser history, registry or configuration, authentication, network records, and case actions. Use stable identifiers and retain source references. Do not sort on a displayed timestamp until its time zone and semantics are known. File creation, modification, metadata change, and access times mean different things and may be altered by collection. A forensic image is acquired under documented authority and method.\n\nCryptographic hashes taken at acquisition and verification show whether the working image matches the recorded original. If hashes differ, the copies are not identical; the analyst investigates acquisition, storage, transfer, and tool behavior rather than merely labeling one “tampered.” Live response can preserve volatile evidence but changes the system. Offline imaging reduces some changes but loses running state. The incident objective, safety, legal advice, and volatility determine the approach.\n\n## Building a defensible timeline\n\nNormalize displayed time to a chosen zone while retaining original timestamp, source zone, and clock uncertainty. Different records may represent event occurrence, ingestion, file creation, file modification, or metadata update. Sort is only the first step; explain what each time means. A forensic image should be acquired under procedure, hashed, stored with access control, and analyzed through a working copy.\n\nMatching hashes demonstrate that two byte sequences are equal under the algorithm; they do not prove who collected the source or that collection was complete. Chain of custody records identity, transfer, storage, access, purpose, and time. SSD behavior, live acquisition, encryption, and cloud evidence can require specialized handling and escalation.",
          "practical": "Build a five-event timeline from your own lab logs. Preserve original timestamps, normalized UTC, source, host, account, event, and confidence.",
          "commands": [
            {
              "title": "Hash an authorized image or file",
              "description": "Use a copied lab file; do not acquire someone else’s device.",
              "code": "shasum -a 256 authorized-image.raw\n# Linux alternative\nsha256sum authorized-image.raw"
            }
          ],
          "tables": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Reading malware sandbox reports",
          "lead": "A sandbox report is a structured observation from an artificial environment, not a final verdict.",
          "keyIdeas": [
            "Hashes identify exact files, not malware families universally.",
            "Process, file, registry, and network behavior form a chain.",
            "Environment-aware malware may remain dormant.",
            "Analysts never detonate unknown code on a normal workstation."
          ],
          "content": "A report usually lists static properties, hashes, signatures, strings, imported functions, process tree, command lines, files created, registry or configuration changes, mutexes, services or tasks, API calls, network destinations, DNS, HTTP, and an engine score. Start with the sample identity and analysis conditions, then build a chronological behavior summary. Contacting a domain is not proof the domain is malicious; the sample may contact an update service or the sandbox may generate background traffic.\n\nA dropped file inherits suspicion but requires its own identity and behavior. Scores differ by engine and version. Correlate observables with endpoint and network evidence from the affected environment. Sandboxes can miss delayed, interactive, privileged, kernel-level, environment-specific, or evasive behavior. Static analysis may reveal capabilities not exercised dynamically. Treat report URLs and attachments as sensitive and potentially dangerous.\n\n## Report interpretation\n\nBegin with sample identity, analysis time, environment, execution method, and whether the sample actually ran. Review process tree, command lines, file and registry activity, services or tasks, network requests, dropped files, mutexes, and evasion checks. Map observed behavior to a hypothesis rather than copying the sandbox score. Sandboxes differ from victims in OS build, locale, domain membership, user activity, installed software, and internet simulation.\n\nMalware may sleep, require arguments, check for documents, or avoid virtual environments. A failed detonation is inconclusive. Extract indicators with context and expiration, then corroborate on enterprise telemetry before broad blocking.",
          "practical": "Using a benign program or an instructor-provided report, summarize file identity, execution tree, persistence, network, system changes, limitations, and investigation pivots without inventing behavior.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Host-to-SIEM investigation workflow",
          "lead": "A strong investigation moves repeatedly between a broad timeline and exact source events.",
          "keyIdeas": [
            "Start with entity and time scope.",
            "Pivot through host, user, process, hash, path, and network.",
            "SOAR actions belong in the same timeline.",
            "Containment evidence should be distinguished from attacker behavior."
          ],
          "content": "Begin with the alert and retrieve the original endpoint event. Confirm sensor health, host identity, user session, process ancestry, command line, file origin, hash, signature, and network. Search prevalence across the fleet and recent history on the host. Pivot to identity, DNS, proxy, firewall, and application sources to establish what preceded and followed execution. Create a timeline that includes defensive actions: antivirus quarantine, analyst query, remote collection, isolation, password reset, or automation.\n\nOtherwise later investigators may mistake a responder's tool for attacker activity. Scope similar indicators across assets but avoid treating every shared hash or domain as affected without confirming use. Close or escalate with a concise narrative, affected entities, observed impact, evidence references, confidence, gaps, actions, and next owner. AI summaries can accelerate reading but must be checked against source events; a fluent chronology can still contain invented links.\n\n## Pivoting without losing scope\n\nStart from a stable entity such as host ID or agent ID rather than display name alone. Review agent health, alert raw events, process lineage, user sessions, network destinations, file changes, and persistence. Pivot to identity logs for authentication and privilege, to DNS and flow for network context, and to asset data for owner and criticality. Keep a query journal with time range, dataset, query, result, and decision.\n\nExpand scope methodically: same hash, signer, command pattern, destination, account, parent process, or deployment. Broad searches without recording thresholds create confirmation bias. When evidence supports containment, state exactly which host, account, token, or connection is affected and how the action will be verified.",
          "practical": "Practice with a benign program launch in your own lab: trace process, file, account, and network evidence into one case narrative whose every claim cites a source.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Worked host case: document to script to persistence",
          "lead": "A process chain becomes meaningful when file origin, user session, command line, child activity, persistence, and network evidence agree.",
          "keyIdeas": [
            "Start from process ancestry and logon context",
            "Prove persistence from the configuration source and later execution",
            "Separate legitimate administration from malicious use through context"
          ],
          "content": "A common alert pattern is an office or browser process launching a script interpreter. Validate process IDs, start times, image paths, command lines, signer, user, integrity, and parent. Find the document or download event and its source. Decode content only in an approved analysis environment and preserve the original command as evidence. Follow descendants and side effects: files, registry or launch configuration, scheduled tasks, services, user creation, credential access, DNS, and connections.\n\nA script interpreter and encoded argument are not automatically malicious. Enterprise deployment and support tools use them. Compare host role, change window, signer, prevalence, path, source, account, and destination. Persistence is supported when a durable mechanism references the artifact or command and remains active across login or restart. Record the task definition, service path, registry value, shell profile, or timer plus its creation event.\n\nConfirm whether the mechanism executed.\n\nRemoving a file without removing the launcher leaves an incomplete repair; deleting the launcher before collection can destroy scope evidence. Contain according to risk, preserve volatile context when feasible, and search the enterprise for the chain rather than one hash. The report cites process, file, persistence, and network records and labels decoded or inferred content clearly.",
          "practical": "Draw a process tree and annotate each node with identity, path, signer, command, file origin, persistence, and network activity. Mark which facts come from separate telemetry.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Worked Linux case: SSH access and privilege escalation",
          "lead": "Linux investigations connect authentication, session, command execution, privilege, service, filesystem, and network records.",
          "keyIdeas": [
            "Distribution and logging configuration determine evidence location",
            "Shell history is incomplete and user controlled",
            "sudo and service changes need session and owner context"
          ],
          "content": "Begin with SSH authentication records: source, user, method, result, session open and close, and key fingerprint if available. Correlate source with VPN, bastion, cloud, or NAT records. A successful public-key login may be expected or may use a stolen authorized key. Compare the account, time, source, and host role. Review sudo or privilege events, audit execution, process telemetry, package changes, users and groups, authorized_keys, cron, systemd units and timers, shell profiles, temporary directories, and outbound connections.\n\nShell history can be disabled, delayed, filtered, or edited and should be corroborated. File timestamps have creation, metadata, modification, and access meanings that vary by filesystem and collection. A new service is not proof of persistence until its unit, binary, user, enablement, and execution are examined. A process running from /tmp or a deleted executable is unusual but needs context.\n\nContainers and automated configuration can create processes and files that do not resemble an interactive administrator.\n\nPreserve logs before rotation, record host clock, and collect volatile state under procedure. Scope the credential, source, key, command pattern, binary, and destination across systems. Recovery may rotate keys, rebuild the host, correct exposed SSH policy, and inspect the administrative path that supplied the credential.",
          "practical": "Create an ordered command and evidence plan that is read-only first. Identify which response actions would alter login, process, network, and file evidence.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Memory, file, and persistence artifacts",
          "lead": "Host artifacts have different volatility and answer different questions; no single artifact reconstructs the whole compromise.",
          "keyIdeas": [
            "Memory can expose running state not present on disk",
            "File metadata needs filesystem and collection context",
            "Persistence configuration shows a launch opportunity, while execution evidence shows use"
          ],
          "content": "Memory can contain processes, threads, loaded modules, connections, handles, injected regions, commands, and decrypted material. Acquisition changes the host and depends on operating-system support. A memory image is not automatically complete, and interpretation requires a matching framework or symbols. Collect when the expected value exceeds operational and evidence risk. Files provide content, path, owner, permissions, signatures, hashes, timestamps, alternate data, and surrounding directory context.\n\nA hash identifies exact bytes but not execution.\n\nPrefetch-like, execution cache, event, or EDR records can support run history, while deletion can leave journal or unallocated traces. Avoid claiming exact user intent from one artifact. Persistence includes services, scheduled tasks, startup keys, launch agents, shell profiles, WMI subscriptions, extensions, accounts, and cloud or orchestration hooks. A configured entry may never have run. Combine creation time, creator process, later launch, account, and network behavior.\n\nOrder of volatility is a guide, not a rigid script. Network and process state can vanish quickly, but unsafe collection can worsen a critical system. Record authority, tool, version, commands, source, hash, and every custody transfer. Analyze a verified working copy and keep the original protected.",
          "practical": "For process injection, scheduled-task persistence, and a deleted executable, list the memory, endpoint, filesystem, event, and network evidence that would support or contradict each theory.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "4.0 Network Intrusion Analysis",
      "weight": "20% of the exam",
      "intro": "Network analysis reconstructs what crossed an observation point and connects protocol facts with host, identity, and application context.",
      "topics": [
        {
          "title": "Map events to their source technologies",
          "lead": "The fields and language in an event often reveal which control produced it and what that control could observe.",
          "keyIdeas": [
            "IDS/IPS events cite signatures and packet or flow context.",
            "Firewall events cite rule, action, state, and interfaces.",
            "Proxy events describe client requests and upstream results.",
            "NetFlow describes conversations; antivirus describes host objects or behavior."
          ],
          "content": "An IDS alert commonly includes signature identifier, classification, priority, addresses, ports, protocol, timestamp, and captured evidence. An inline IPS may also report a drop or reset. Firewall logs emphasize rule name, allow or deny action, interfaces, translation, connection state, bytes, and duration. Network application control may add application identity and policy. Proxy logs describe user or client, method, URL, category, response, bytes, and upstream destination.\n\nAntivirus or endpoint events identify host, user, file, path, process, hash, verdict, and remediation. NetFlow supplies time-bounded conversation summaries without file or payload evidence. Knowing the source prevents category errors. A flow record cannot prove which file was downloaded. An antivirus alert does not prove network delivery. Correlation keys include time, host, account, addresses, ports, URLs, hashes, and request identifiers.\n\n## Provenance before interpretation\n\nA normalized SIEM event should still point to the original product, tenant, device, channel, parser, and raw record. The same field name can mean different things: source.ip may be a client, proxy, translated address, or collector depending on the source. Read the source documentation and compare raw and normalized values before joining datasets. Build an evidence map for a common sign-in: endpoint time, DHCP lease, VPN assignment, identity authentication, conditional-access result, application session, and resource action.\n\nMark authoritative fields and expected delays. If two sources disagree, preserve both and investigate clock, NAT, reuse, parsing, and collection point rather than choosing the convenient one.",
          "practical": "Take five sample log schemas from your tools or documentation and identify the producing technology, strongest fact, and one conclusion it cannot support.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Detection outcomes and analyst classification",
          "lead": "True and false describe whether a condition existed; positive and negative describe the detector’s decision.",
          "keyIdeas": [
            "True positive: detection and condition both present.",
            "False positive: detection without the target condition.",
            "False negative: target condition present but missed.",
            "Benign and no-impact describe context or consequence, not detector correctness."
          ],
          "content": "A true positive can have no harmful impact when prevention succeeded or the target was not vulnerable. It still demonstrates that the detection logic matched real hostile or prohibited behavior. Benign activity may correctly match a broad rule;for example, an administrator running an approved scanner. Depending on the rule's intent, this may be a benign true positive or a tuning case rather than a false positive.\n\nA false negative is discovered when another source, hunt, report, or later incident reveals activity the detector should have found. True negatives are the enormous population of ordinary events correctly ignored and are usually estimated through testing rather than reviewed individually. Classification should include rule intent, observed condition, impact, confidence, and tuning recommendation. Changing the label to improve a dashboard destroys learning.\n\nGood tuning narrows irrelevant matches while preserving cases the rule was designed to find.\n\n## Disposition with evidence\n\nA true positive means the detection condition occurred and was correctly identified; it does not automatically mean a full compromise. A false positive means logic labeled benign activity incorrectly. Benign positive often describes accurate detection of behavior that is permitted or expected. False negative is usually discovered through another alert, hunt, incident, or retrospective test. Disposition should record evidence and action, not only a dropdown.\n\nSeparate detection accuracy, activity legitimacy, security impact, and response status. “Expected administrator scan; approved change CHG-2041; source host and window match; recommend suppression limited to scanner identity” supports tuning without hiding unapproved scans.",
          "practical": "Classify a blocked exploit against a patched server, an approved scanner match, a parser error, and an attack found only through hunting. Explain each label.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Packet filtering, stateful inspection, deep inspection, and sensor placement",
          "lead": "Controls differ in how much conversation and application meaning they interpret.",
          "keyIdeas": [
            "Packet filters evaluate header fields.",
            "Stateful devices track conversations.",
            "Deep inspection parses application data it can see.",
            "Inline devices can enforce; taps and monitor ports observe without sitting in the path."
          ],
          "content": "A packet filter evaluates addresses, ports, protocol, flags, direction, or interface. A stateful firewall remembers connection state and permits expected return traffic. Deep packet inspection parses application protocol and visible payload to identify commands, files, or signatures. Encryption and unsupported protocols reduce that visibility. An inline IPS can block, reset, or modify traffic but adds latency and failure considerations. A passive sensor connected to a network tap or switched-port analyzer receives copies and cannot directly stop the original traffic.\n\nA physical tap can provide reliable copies but may need aggregation and fail-open design. A SPAN port is flexible but can drop traffic under load or omit certain errors. Placement determines meaning. North-south sensors observe perimeter traffic; east-west sensors see internal movement; collection before and after NAT or a proxy shows different identities. Analysts record capture point and direction before declaring source or destination.\n\n## State and observation point\n\nA stateless ACL evaluates packet fields without session memory. A stateful device tracks connections and may permit return traffic dynamically. Deep inspection parses protocol or application content when visible. An IDS on a mirrored port cannot block; an inline IPS can block but becomes part of service availability. Sensor placement determines truth. A packet before NAT has internal addresses; after NAT it has translated values.\n\nA sensor outside a TLS terminator cannot see decrypted HTTP, while an application sensor can. Asymmetric routing may show only one direction and prevent stateful analysis. Document tap or SPAN source, direction, VLAN, tunnel layer, loss, and whether the sensor sees pre- or post-policy traffic.",
          "practical": "Draw three sensor locations around a firewall and load balancer. State what addresses, payload, and client identity each position can observe.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Wireshark investigation method",
          "lead": "Packet analysis is a sequence of scoped questions, not a search for red-colored rows.",
          "keyIdeas": [
            "Begin with capture properties and protocol hierarchy.",
            "Use display filters to narrow without discarding original data.",
            "Follow streams only after selecting the correct conversation.",
            "Packet bytes are evidence; protocol dissectors are interpretations that can be wrong."
          ],
          "content": "First record file hash, size, collection point, time range, interfaces, packet count, snap length if known, and capture loss. Review protocol hierarchy, conversations, endpoints, and I/O graphs to learn the shape of the data. Then filter around the case question using addresses, protocol, ports, flags, names, or stream indexes. Useful filters include ip.addr ==, tcp.stream eq, dns.qry.name, http.request, tcp.analysis.retransmission, and protocol-specific fields.\n\n“Follow stream” reassembles a conversation as observed; missing packets, retransmission, offload, or capture direction can produce gaps.\n\nExported objects should be handled as untrusted and hashed in an isolated analysis area. Wireshark coloring is a display aid, not a security verdict. Validate unusual fields in the packet bytes and relevant RFC or documentation. Preserve the original PCAP and export analysis notes separately.\n\n## A question-led workflow\n\nOpen a capture by confirming capture time, interface, packet count, drop information, and link type. Review endpoints, protocols, conversations, and expert warnings without assuming warnings equal attacks. Apply a display filter tied to the case, then follow streams and inspect adjacent packets. For a failed connection, locate DNS, ARP or Neighbor Discovery, TCP handshake, TLS negotiation, and application response in sequence.\n\nDetermine the last successful stage and which side sent a reset or stopped responding. Save filters and packet numbers in the case. Export a smaller evidence capture when appropriate, retain the original, and hash both under procedure.",
          "practical": "Analyze the bounded capture you created in Domain 2. Identify actual endpoints, streams, DNS questions, and TLS sessions, and list what cannot be known from encrypted payload.",
          "commands": [
            {
              "title": "PCAP orientation with TShark",
              "description": "These commands summarize an existing authorized capture without inventing values.",
              "code": "shasum -a 256 local-study.pcap\ntshark -r local-study.pcap -q -z endpoints,ip\ntshark -r local-study.pcap -q -z conv,tcp\ntshark -r local-study.pcap -Y \"tcp.flags.syn == 1 && tcp.flags.ack == 0\" -T fields -e frame.time_epoch -e ip.src -e tcp.srcport -e ip.dst -e tcp.dstport"
            }
          ],
          "tables": [
            {
              "title": "Question-led display filters",
              "headers": [
                "Question",
                "Example filter"
              ],
              "rows": [
                [
                  "One host",
                  "ip.addr == 192.0.2.25"
                ],
                [
                  "DNS failures",
                  "dns.flags.rcode!= 0"
                ],
                [
                  "TCP setup",
                  "tcp.flags.syn == 1"
                ],
                [
                  "Resets",
                  "tcp.flags.reset == 1"
                ],
                [
                  "HTTP response",
                  "http.response.code >= 400"
                ]
              ]
            }
          ],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "TCP stream reconstruction and safe file extraction",
          "lead": "Reassembly can recover application objects only when the capture contains the relevant visible bytes.",
          "keyIdeas": [
            "TCP sequence numbers order a byte stream.",
            "A retransmitted packet is not automatically a second application action.",
            "TLS prevents ordinary payload extraction beyond the termination point.",
            "Extracted objects remain untrusted."
          ],
          "content": "TCP carries an ordered byte stream despite segmentation, retransmission, and out-of-order delivery. The analyst chooses the correct stream, verifies handshake and direction, and lets the tool reassemble application data. A partial capture, missing packets, truncated snap length, or asymmetric collection may prevent complete reconstruction. Wireshark can export objects from supported visible protocols such as HTTP when the full content was captured.\n\nIt cannot recover plaintext from properly encrypted TLS without authorized session keys or endpoint evidence.\n\nFile carving from raw bytes needs format knowledge and careful validation. Export only in an isolated lab directory, never open an unknown file by double-clicking, calculate hashes, record source stream and packet references, and follow the case handling policy. The expected lab result is whatever your own benign transfer produced;not a predetermined “malware hash.” **Streams are analytical views** TCP reassembly orders captured payload by sequence number, accounts for retransmission, and presents an application byte stream.\n\nMissing packets, capture loss, offload, asymmetric paths, and evasion can make the reconstruction incomplete. Overlapping or inconsistent segments deserve attention but are not automatically malicious. File extraction should occur only when policy, authorization, and containment permit. Record stream, direction, content type, expected file name, extracted hash, tool version, and storage location. Treat the output as hostile, never open it on the analyst workstation, and use an isolated analysis environment.\n\nEncrypted traffic cannot be reconstructed into plaintext without authorized session keys or a suitable decryption point.",
          "practical": "Transfer a harmless text file over a local unencrypted test service isolated from untrusted networks, capture it, export it, and compare source and exported hashes.",
          "lab": {
            "goal": "Practice TCP reconstruction with a benign file you create.",
            "environment": "Two local lab processes or hosts on an isolated network; a plain-text test protocol; Wireshark.",
            "steps": [
              "Create a text file containing a unique harmless sentence and hash it.",
              "Serve it only within the isolated lab using a simple temporary HTTP server.",
              "Capture the transfer and stop collection.",
              "Use Follow TCP Stream and Export Objects where supported.",
              "Hash the exported object and compare it with the source.",
              "Stop the temporary server and retain only the documented lab artifacts."
            ],
            "expected": "The exported object matches the source if every byte was captured.",
            "verification": "Hashes and packet references support the result; no invented packet values are used."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Ethernet, ARP, IPv4, and IPv6 headers",
          "lead": "Lower-layer fields establish local delivery and routed identity while revealing fragmentation, translation, and neighbor behavior.",
          "keyIdeas": [
            "Ethernet frames carry source and destination MAC addresses and an EtherType.",
            "ARP maps IPv4 to local link addresses.",
            "IPv4 includes TTL, protocol, fragmentation, and checksum fields.",
            "IPv6 uses a next-header chain and neighbor discovery rather than ARP."
          ],
          "content": "Ethernet addresses identify interfaces within a local broadcast domain. The source MAC usually changes at each routed hop, so it does not identify the original internet host. VLAN tags can identify a local segment when present in the capture. ARP requests and replies resolve local IPv4 next-hop addresses and can be abused through spoofed associations. IPv4 analysis examines source, destination, header length, total length, identification, flags, fragment offset, TTL, protocol, and header checksum.\n\nA low observed TTL may reflect distance or an unusual starting value. Fragmentation can complicate inspection. IPv6 has a fixed base header with traffic class, flow label, payload length, next header, hop limit, and 128-bit addresses; extension headers carry optional functions. Neighbor Discovery uses ICMPv6 for address resolution and router discovery. Analysts correlate link and network layers at the actual capture point and do not mistake a gateway MAC for the remote host.\n\n## Header evidence\n\nAt Ethernet, examine source and destination MAC, VLAN tag, EtherType, and whether the frame is broadcast, multicast, or unicast. ARP requests and replies reveal claimed IPv4-to-MAC mappings; conflicting replies can reflect failover, movement, duplication, or poisoning. Correlate with switch and DHCP evidence. IPv4 fields include length, identification, flags, fragment offset, TTL, protocol, addresses, and header checksum. IPv6 replaces TTL with hop limit, uses a fixed base header and extension headers, and relies on ICMPv6 Neighbor Discovery.\n\nFragmentation behavior differs. A low TTL in a capture may simply mean the packet already crossed many hops; compare peers and capture location before inferring evasion.",
          "practical": "Inspect one ARP exchange and one IP packet from your lab capture. Explain which addresses identify local interfaces and which persist across routing.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "TCP, UDP, and ICMP analysis",
          "lead": "Transport and control protocols reveal connection intent, state, reliability, and network errors.",
          "keyIdeas": [
            "TCP flags and sequence state describe connection behavior.",
            "UDP preserves datagrams without built-in delivery state.",
            "ICMP reports control and error conditions and also carries diagnostics.",
            "Ports are service clues, not proof of application identity."
          ],
          "content": "A typical TCP connection begins with SYN, SYN-ACK, and ACK, then exchanges data and closes with FIN/ACK or resets with RST. Sequence and acknowledgment numbers support reassembly. Repeated SYNs without completion may reflect loss, filtering, scanning, or exhaustion; context and rate matter. UDP has source and destination ports, length, checksum, and payload but no handshake or retransmission at the transport layer.\n\nApplications such as DNS and QUIC implement their own behavior.\n\nICMP messages include echo, destination unreachable, time exceeded, and other network information. Blocking all ICMP can impair troubleshooting and path MTU discovery. Client ephemeral ports and server well-known ports are common conventions, not identities. NAT, port reuse, tunneling, and nonstandard services require protocol and endpoint corroboration.\n\n## Transport conversations\n\nFor TCP, inspect handshake, sequence and acknowledgment progress, retransmissions, window size, zero-window conditions, resets, and orderly FIN closure. A reset states that one endpoint or intermediary rejected state; use timing and address to locate it. Repeated SYN without SYN-ACK suggests filtering, loss, or an unavailable listener, not one guaranteed cause. UDP has no handshake, so pair requests and responses through protocol identifiers, timing, and five-tuple.\n\nICMP reports network conditions and performs diagnostics. Destination unreachable and time exceeded messages often contain part of the triggering packet, which helps attribution. Blocking all ICMP can impair troubleshooting and path-MTU discovery.",
          "practical": "Choose one TCP stream and identify handshake, data direction, retransmissions if any, and closure. Describe observations without assigning malicious intent.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "DNS, email, HTTP, HTTPS, and HTTP/2 artifacts",
          "lead": "Application protocols connect network events to names, resources, messages, and transactions.",
          "keyIdeas": [
            "DNS relates names, types, responses, and resolvers.",
            "Email separates envelope, headers, content, and delivery hops.",
            "HTTP carries method, target, headers, status, and body.",
            "HTTPS encrypts HTTP; HTTP/2 multiplexes streams over a connection."
          ],
          "content": "DNS analysis examines query name and type, response code, answers, TTL, resolver, and timing. Long or unusual names may be legitimate service discovery or encoded data; compare frequency and context. Email protocols include SMTP for transfer and POP3 or IMAP for retrieval. Headers can show message identifiers and delivery hops, but trust decreases for fields supplied by the sender. HTTP requests include method, target, host or authority, headers, and optional body.\n\nResponses include status, headers, and body. URLs contain scheme, authority, path, query, and fragment; the fragment is not normally sent to the server. Proxy logs may record normalized URLs that differ from packets. TLS protects HTTPS content. Certificate and flow metadata remain visible to varying degrees. HTTP/2 multiplexes several streams within one TCP or TLS connection, so a transport stream is not one request.\n\nAnalysts use the appropriate dissector and application logs when payload is encrypted.\n\n## Application interpretation\n\nDNS analysis follows query name, type, response code, answers, TTL, resolver, and subsequent connection. A newly seen domain is a lead; check registration and internal history without treating age as verdict. Email investigation preserves headers and traces Received lines cautiously because earlier fields can be forged. HTTP exposes method, host or authority, path, status, headers, size, and user agent when plaintext or decrypted.\n\nRedirect chains can connect a message to a download.\n\nHTTPS hides HTTP from intermediate capture while TLS may reveal versions, cipher negotiation, certificate, and sometimes server name. HTTP/2 multiplexes streams over one connection, so packet order is not equivalent to one request at a time.",
          "practical": "Compare a DNS log, proxy record, and endpoint event for your own HTTPS request. Identify the shared name, time, host, and the content each source cannot see.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Artifacts, regular expressions, and IDS rules",
          "lead": "Analysts use patterns to find candidate evidence, then validate meaning in the surrounding event.",
          "keyIdeas": [
            "Artifacts include addresses, ports, processes, registry paths, API calls, hashes, and URLs.",
            "Regular expressions match text structure and can overmatch.",
            "IDS rule headers scope traffic; options inspect protocol or content.",
            "A rule match is not proof of compromise."
          ],
          "content": "Basic regex elements include literals, character classes, anchors, quantifiers, grouping, and alternation. The ^ and $ characters anchor a line; [0-9] matches one digit; + means one or more;? commonly makes the preceding item optional; parentheses group; a backslash escapes special meaning. Tool dialects differ, so test with representative benign and target strings. Snort-family rules have an action and header describing protocol, source, direction, and destination, followed by options such as message, flow, protocol fields, content, identifier, and revision.\n\nModern rules should use protocol-aware keywords where possible and narrow on stable features. Local identifier ranges and exact syntax depend on engine and version. Broad strings create alert floods and can be evaded. Test rules offline against authorized captures and a benign corpus, document intent, and review performance. Never write a lab result in advance; the actual engine output is the evidence.\n\n## From artifact to detection\n\nAn artifact is useful when it has provenance, context, and an expected lifetime. Before writing a rule for a string, ask whether it is stable, unique, case-sensitive, encoded, or common in benign traffic. Regular expressions can be powerful and expensive; anchor and bound patterns, test catastrophic backtracking, and prefer structured fields where possible. An IDS rule includes traffic direction and protocol context, content or behavior, metadata, severity, and identifier.\n\nTest against malicious and benign PCAPs and record engine version. A rule matching a demonstration capture is not ready for production until it is evaluated at realistic volume and placement. Link every alert to packets or transaction evidence an analyst can inspect.",
          "practical": "Write a harmless local rule that detects a unique marker you place in your own plain-text lab request. Test it offline and record the real output.",
          "commands": [
            {
              "title": "Regex and offline rule-test pattern",
              "description": "Adapt the IDS command to the locally installed engine and configuration.",
              "code": "printf \"%s\\n\" \"alpha TEST-MARKER-2026 omega\" | grep -E \"^.*TEST-MARKER-[0-9]{4}.*$\"\n\n# Example offline workflow; verify flags for your installed version\nsnort -c /path/to/snort.conf -r local-study.pcap -A alert_fast"
            }
          ],
          "tables": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "TCP timing, retransmission, reset, and scan interpretation",
          "lead": "Packet flags and timing describe a transport conversation, but capture placement and loss can imitate attack behavior.",
          "keyIdeas": [
            "Sequence and acknowledgment numbers support ordered analysis",
            "Retransmission can indicate loss, delay, capture gaps, or congestion",
            "A reset has different meaning depending on sender and conversation state"
          ],
          "content": "A SYN begins a TCP connection, SYN-ACK accepts, and ACK completes the handshake. Sequence numbers track bytes and acknowledgments indicate the next expected byte. FIN performs an orderly close; RST aborts or rejects. Analysts should identify which endpoint sent each flag and whether the capture sees both directions. Repeated SYNs without SYN-ACK can indicate filtering, an offline service, path loss, or scanning.\n\nSYN followed by RST commonly means a reachable closed port.\n\nMany destination ports can suggest a scan, but monitoring and inventory tools behave similarly. Compare source role, rate, time, targets, and authorization. Retransmissions can arise from genuine loss, congestion, receiver delay, asymmetric capture, packet duplication, or analysis heuristics. Zero-window messages indicate receiver buffer pressure. Out-of-order labeling may reflect the capture path. A reset after application data can come from policy, service error, timeout, or deliberate evasion.\n\nUse conversations, stream graphs, round-trip estimates, endpoint logs, firewall state, and application responses. Do not infer data theft from a large TCP stream without content or application context. State sensor placement, packet loss, snap length, and whether offloading affected the local capture.",
          "practical": "Annotate three packet sequences: closed port, filtered path, and completed connection reset by server. Explain which additional evidence separates scan from approved monitoring.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "IDS signature lifecycle and packet evidence",
          "lead": "A signature is a maintained hypothesis about observable traffic, not a permanent truth encoded in syntax.",
          "keyIdeas": [
            "Define protocol and flow context before content",
            "Use stable discriminators and bounded patterns",
            "Test positives, near misses, benign traffic, performance, and evasion"
          ],
          "content": "Start with a behavior supported by packet or protocol evidence. State required sensor placement, protocol state, direction, addresses, ports, and the malicious invariant. A content string alone may appear in downloads, documentation, or encoding. Protocol parsers and flow state reduce ambiguity. Fast pattern engines, byte tests, protocol fields, regular expressions, thresholds, and flowbits can express more precise logic. Expensive patterns should be narrowed by cheaper conditions.\n\nNormalize only when the engine does so predictably. Attackers may fragment, encode, split streams, alter case, pad, or encrypt. A sensor that cannot see decrypted content cannot match an HTTP body inside TLS. Create test cases from preserved or synthetic authorized traffic: known positive, changed encoding, wrong direction, similar benign request, partial stream, and high-volume background. Measure alert fields and performance.\n\nThe analyst needs enough context to validate the rule without reopening the entire packet archive.\n\nProduction maintenance uses version control, owner, rationale, references, data dependency, severity, runbook, known false positives, expiration, and change history. Review dispositions and missed incidents. Tune with stable context rather than excluding entire internal networks or administrator groups. Retire rules whose behavior or source no longer matters.",
          "practical": "Write a plain-language signature specification for one harmless lab request before writing syntax. Include positive and negative tests and the evidence displayed to the analyst.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "5.0 Security Policies and Procedures",
      "weight": "15% of the exam",
      "intro": "Analysts work inside an authorized incident process that protects evidence, coordinates stakeholders, restores services, and measures improvement.",
      "topics": [
        {
          "title": "Asset, configuration, mobile, patch, and vulnerability management",
          "lead": "Reliable operations begins with knowing what should exist and who is responsible for it.",
          "keyIdeas": [
            "Asset records connect technology to owner, purpose, criticality, and lifecycle.",
            "Configuration baselines define approved state.",
            "Patch management deploys tested fixes.",
            "Vulnerability management prioritizes and verifies risk reduction."
          ],
          "content": "Asset management discovers and records hardware, software, cloud resources, services, data, owners, locations, versions, dependencies, and support dates. Configuration management defines secure baselines, controls change, detects drift, and preserves recovery versions. Mobile-device management enrolls devices, enforces policy, distributes certificates and applications, and supports lock or wipe under policy. Patch management receives updates, assesses applicability and urgency, tests, schedules, deploys, monitors, rolls back when needed, and verifies coverage.\n\nVulnerability management is broader: it discovers weaknesses, validates them, combines severity with exposure and asset impact, assigns treatment, tracks exceptions, and confirms remediation. The SOC uses these programs during triage. An alert on an unsupported internet server has different urgency from the same signature against an isolated patched test host. Incident findings should feed back into inventory, baseline, patch, and vulnerability processes.\n\n## Operational inventory\n\nAn asset record should connect owner, service, location, identifiers, software, data sensitivity, management status, support dates, and dependencies. Unknown, unauthorized, unmanaged, and unsupported are different states requiring different action. Cloud assets, service accounts, certificates, APIs, and mobile profiles belong in inventory too. Patch and vulnerability workflows record finding, exposure, asset criticality, exploit evidence, owner, target date, change, exception, compensating control, and retest.\n\nMobile management can enforce encryption, screen lock, application policy, compliance, and selective wipe, but BYOD requires clear privacy boundaries. Analysts use inventory to judge impact and find peers; they also report discoveries that show inventory drift.",
          "practical": "For one alert, retrieve asset owner, purpose, criticality, exposure, software version, patch state, baseline status, and open exception before recommending action.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Incident response plan and lifecycle",
          "lead": "A plan establishes authority and coordination before pressure and incomplete information arrive.",
          "keyIdeas": [
            "The exam blueprint uses preparation; detection and analysis; containment, eradication, and recovery; and post-incident activity.",
            "Incident criteria and severity must be defined.",
            "Containment balances harm, evidence, and continuity.",
            "Recovery restores a trustworthy state, not merely an available one."
          ],
          "content": "Preparation provides policy, roles, contacts, tools, logging, training, exercises, communications, legal support, providers, and playbooks. Detection and analysis validates events, establishes scope, impact, timeline, and severity, and decides whether the situation is an incident. Containment limits spread or consequence through actions such as account revocation, host isolation, network block, or service failover. Eradication removes persistence, malicious artifacts, vulnerable paths, and compromised credentials.\n\nRecovery rebuilds or restores from known-good sources, validates controls and data, returns service in stages, and monitors recurrence.\n\nPost-incident activity records lessons, root causes, costs, metrics, and corrective actions. The blueprint retains this familiar phase language; an organization should follow its current adopted NIST guidance and internal plan. Analysts act within delegated authority and know the emergency escalation path.\n\n## Decisions across the lifecycle\n\nPreparation defines authority, severity, communication, evidence, tools, access, vendors, and exercises. Identification validates an event and scopes initial impact. Containment can be short-term and disruptive or longer-term and sustainable. Eradication removes persistence and closes the entry path. Recovery restores trusted service in stages. Lessons learned assigns improvements and checks completion. The lifecycle is iterative. New evidence during recovery may return the team to containment.\n\nRecord why an action was chosen, who authorized it, expected effect, rollback, and result. A playbook supports judgment; it does not override safety, legal hold, or business-continuity requirements.",
          "practical": "Run a tabletop for a lost privileged laptop. At each phase, identify the decision, owner, evidence, communication, and criterion for moving forward.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Stakeholders, communications, and escalation",
          "lead": "Incidents cross technical and organizational boundaries, so the right people need the right facts at the right time.",
          "keyIdeas": [
            "The incident commander coordinates priorities and authority.",
            "Technical teams provide evidence and restoration.",
            "Legal, privacy, HR, communications, safety, leadership, and providers join as facts require.",
            "External statements should be authorized and consistent."
          ],
          "content": "Preparation maps stakeholders to each response phase. SOC analysts detect and investigate; system and application owners explain normal behavior and business importance; IT teams contain and recover; legal and privacy teams interpret notification and evidence obligations; HR supports personnel matters; communications handles public and customer messages; executives accept major business risk. Escalation criteria may include protected data, privileged access, active spread, safety, material outage, regulated systems, supplier involvement, or media interest.\n\nContact methods need alternatives when ordinary email or identity is unavailable. Shift handoffs preserve timeline, outstanding questions, actions, and ownership. Updates distinguish confirmed facts, working hypotheses, unknowns, impact, actions, decisions, and next reporting time. Overconfident early claims create legal and operational harm; vague updates prevent action. Analysts protect case information and share on a need-to-know basis.\n\n## Communication as a control\n\nTechnical responders, service owners, leadership, legal, privacy, HR, communications, vendors, insurers, and law enforcement may have distinct roles. The incident commander coordinates decisions; the scribe preserves timeline and rationale. Analysts should know whom they may contact and what they may disclose. An escalation states verified facts, uncertainty, affected scope, business effect, actions taken, decision needed, urgency, and next update time.\n\nAvoid speculative attribution and unapproved breach language.\n\nUse protected out-of-band communication when primary channels may be compromised. Record significant calls and decisions in the case without placing secrets or unnecessary personal data in broad channels.",
          "practical": "Write a 100-word executive incident update containing time, confirmed scope, business impact, containment, major unknown, decision needed, and next update.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Forensic readiness and evidence preservation",
          "lead": "Evidence is more useful when systems are designed to collect it and responders know how to preserve it.",
          "keyIdeas": [
            "Collection order considers volatility and case need.",
            "Integrity is demonstrated through method, hashes, access, and records.",
            "Preservation protects original evidence and metadata.",
            "Live collection changes a system and must be documented."
          ],
          "content": "Volatile evidence can include CPU and memory state, processes, network connections, logged-in users, temporary files, and caches. Less volatile sources include disks, centralized logs, backups, and archives. The exact order depends on danger, legal authority, system value, cloud constraints, and the information sought. Preservation records who collected what, when, where, why, with which method and tool, hashes where appropriate, storage, access, transfers, and limitations.\n\nChain of custody demonstrates control across handling.\n\nHashes show whether two bit sequences match; they do not establish truth or ownership. Forensic readiness enables synchronized time, sufficient logging, protected central collection, retention, asset identity, legal contacts, provider export, and tested acquisition tools before an incident. NIST SP 800-86 emphasizes integrating forensic techniques with incident response; analysts should follow organizational and legal procedures rather than improvising.\n\n## Prepare before evidence is needed\n\nForensic readiness defines logs, time synchronization, retention, storage, access, legal hold, acquisition tools, trained roles, and external support. Without preparation, the needed record may never have been collected or may expire during response. Order of volatility guides collection but must be balanced with safety and authority. Chain of custody records item, source, collector, method, time, hash, transfer, storage, and access.\n\nWork from verified copies where appropriate.\n\nCloud evidence may be obtained through provider APIs and changes over time; record query, account, region, export format, and request identity. A hash proves byte equality, not the truth or completeness of the source.",
          "practical": "Create a collection worksheet for memory, endpoint logs, cloud audit data, and disk. Include volatility, authority, collector, method, time source, integrity, storage, and transfer.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Network and server profiling",
          "lead": "Profiles describe expected behavior so analysts can recognize meaningful deviation without treating every change as hostile.",
          "keyIdeas": [
            "Network profiles include throughput, duration, ports, peers, and critical address space.",
            "Server profiles include ports, accounts, processes, tasks, and applications.",
            "Seasonality and planned change affect baselines.",
            "A baseline must be maintained and tied to owners."
          ],
          "content": "A network profile records normal total and directional throughput, session counts and duration, common protocols and ports, regular internal and external peers, DNS behavior, and critical asset ranges. Compare similar roles rather than averaging unlike systems. Backups, enrollment, events, and maintenance create legitimate peaks. A server profile records purpose, owner, expected listening ports, logged-in users and service accounts, running processes, scheduled tasks, installed applications, outbound dependencies, resource use, patch cadence, and maintenance windows.\n\nChanges are checked against deployment and change records. Profiles support rule thresholds, hunting, triage, capacity, and recovery validation. They age as services evolve. Statistical deviation is a question for investigation, not a verdict. Analysts document which baseline period and peer group were used.\n\n## Baselines with purpose\n\nProfile services by role, peers, ports, throughput, session duration, authentication pattern, scheduled work, failure rate, and change window. Separate weekdays, maintenance, backup periods, and seasonal events where they differ. Record the population and time range used. Server profiling also includes listening services, processes, users, certificates, scheduled tasks, installed packages, and expected external dependencies. A baseline ages as systems change; assign ownership and refresh it.\n\nAnalysts use profiles to ask sharper questions, not to declare every first-seen activity hostile. Explain which feature deviated and whether the underlying business behavior changed.",
          "practical": "Build a one-hour profile of your own lab server with `ss` or `Get-NetTCPConnection`, processes, users, tasks, and applications. Repeat after an authorized change and explain the difference.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Protected data and incident scope",
          "lead": "Data type, ownership, location, and actual access determine response obligations and harm.",
          "keyIdeas": [
            "PII relates to an identifiable person.",
            "PHI is health information within an applicable regulated context.",
            "PSI terminology depends on the organization or jurisdiction.",
            "Intellectual property includes valuable creative and technical assets."
          ],
          "content": "Protected data may include personal identifiers, health records, student or payment information, credentials, legal material, government-sensitive information, and intellectual property such as source code, designs, research, or trade secrets. Labels and acronyms are context dependent. Analysts use the organization's data classification and legal guidance rather than assuming that any name or email triggers the same obligation. Scoping asks which repositories, records, fields, people, and time periods were actually reachable, accessed, altered, or transferred.\n\nA compromised server that can technically query a database is not proof every record was taken. Conversely, absence of detailed logs limits confidence and should be reported. Evidence may come from database audit, application transactions, object access, DLP, endpoint collection, flow bytes, cloud control plane, and attacker activity. Preserve relevant logs quickly and restrict case data. Notification decisions belong to authorized legal, privacy, and leadership roles.\n\n## Following data through the event\n\nIdentify data owner, classification, system of record, copies, backups, logs, exports, and third parties. Data at rest, in transit, and in use have different controls and evidence. Encryption may reduce exposure only if the attacker lacked usable keys and authorized application access. Scoping asks what records were accessible, actually queried, staged, transferred, altered, or destroyed. File presence and permission show potential access; audit and flow may show activity; neither alone proves content was read.\n\nPreserve confidence and maximum plausible scope separately. Legal and privacy teams determine notification duties from jurisdiction and facts; the analyst supplies an evidence-backed timeline and limitations.",
          "practical": "For a compromised application account, separate data present, data authorized, data technically reachable, data observed accessed, and data confirmed transferred.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Kill Chain and Diamond Model",
          "lead": "Models organize related events into a campaign narrative and expose opportunities for detection and disruption.",
          "keyIdeas": [
            "The Cyber Kill Chain describes broad stages from reconnaissance through objectives.",
            "The Diamond Model relates adversary, capability, infrastructure, and victim.",
            "Models support analysis but should not force evidence into a predetermined story.",
            "One disrupted stage can break an attack path."
          ],
          "content": "## The Cyber Kill\n\nChain commonly describes reconnaissance, weaponization, delivery, exploitation, installation, command and control, and actions on objectives. Analysts map observed events to understand progression and identify earlier or later evidence. Modern activity may skip, repeat, or reorder stages, especially with valid credentials or cloud services.\n\n## The Diamond\n\nModel represents an intrusion event through four core features: adversary, capability, infrastructure, and victim. Pivoting from one feature can reveal related events;for example, a capability contacting reused infrastructure across several victims. Meta-features add time, phase, result, direction, methodology, and resources. These models improve communication and hunting but do not prove attribution. Record the evidence that supports each link. Empty stages are investigation opportunities, not permission to invent missing events.\n\n## Models as analytic lenses\n\nThe Cyber Kill Chain organizes reconnaissance, weaponization, delivery, exploitation, installation, command and control, and actions on objectives. It helps identify where controls interrupted a campaign, but cloud and identity attacks may not follow a simple linear sequence.\n\n## The Diamond\n\nModel relates adversary, capability, infrastructure, and victim for an event. Pivoting from one vertex can reveal related observations: a capability uses several domains, or infrastructure targets several victims. Record direction and confidence of each relationship. Models structure thinking; they do not fill evidence gaps or prove attribution.",
          "practical": "Map a benign simulated phishing exercise to both models. Mark observed facts, absent stages, defensive opportunities, and why the model does not identify a real actor.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "SOC metrics, playbooks, and case quality",
          "lead": "Metrics should improve detection and response rather than reward fast but careless ticket closure.",
          "keyIdeas": [
            "Time to detect, contain, respond, and control need defined start and stop events.",
            "Scope quality matters alongside speed.",
            "Playbooks coordinate decisions; runbooks specify tasks.",
            "Case records make work reviewable and transferable."
          ],
          "content": "Time to detect depends on when harmful activity began and when the organization recognized it. Time to respond may start at detection and end at a defined action. Time to contain measures limitation of spread; time to control may reflect establishment of a stable managed state. Definitions vary, so a number without boundaries cannot be compared responsibly. Speed metrics should be paired with recurrence, scope accuracy, false-positive burden, evidence completeness, control coverage, restoration success, and corrective-action closure.\n\nMedian can hide severe long-tail cases; severity and incident type affect reasonable targets. A playbook names triggers, roles, decisions, communications, evidence, containment options, recovery, and closure for an incident class. Runbooks provide exact repeatable tasks. Cases preserve alert, original events, queries, timeline, affected entities, conclusions, confidence, actions, approvals, handoffs, and lessons. Quality review turns individual work into organizational knowledge.\n\n## Measure outcomes carefully\n\nMean time to detect, acknowledge, contain, and recover need a defined starting event and population. Averages hide long tails; percentiles and severity breakdowns reveal more. Alert count can rise because attacks increased, coverage improved, or logic became noisy. Pair volume with disposition, impact, coverage, and analyst effort. Playbooks need owner, scope, prerequisites, decision points, authority, evidence, actions, rollback, communication, closure, and review date.\n\nAudit a sample of cases for raw-event linkage, correct scope, clear uncertainty, authorized action, and useful closure. Quality review should coach and improve systems rather than reward premature case closure.",
          "practical": "Define one time metric with exact start, stop, exclusions, source system, owner, and decision. Add one quality metric that prevents gaming it.",
          "tables": [
            {
              "title": "A concise case record",
              "headers": [
                "Section",
                "Question answered"
              ],
              "rows": [
                [
                  "Trigger",
                  "Why was the case opened?"
                ],
                [
                  "Scope",
                  "Which entities and period were examined?"
                ],
                [
                  "Evidence",
                  "Which source events support the account?"
                ],
                [
                  "Timeline",
                  "What occurred, including defensive actions?"
                ],
                [
                  "Assessment",
                  "What is known, inferred, unknown, and the confidence?"
                ],
                [
                  "Action",
                  "Who did what under which authority?"
                ],
                [
                  "Handoff",
                  "What remains and who owns it?"
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
          "title": "From alert to closed-loop improvement",
          "lead": "The analyst’s final product is not a ticket status; it is a defensible decision and feedback that makes the system better.",
          "keyIdeas": [
            "Validate, scope, contain, preserve, communicate, recover, and learn.",
            "Root cause differs from the final observable symptom.",
            "Corrective actions need owners and verification.",
            "Lessons should improve architecture, telemetry, detection, and procedure."
          ],
          "content": "A mature workflow begins with a detection hypothesis and healthy telemetry, moves through triage and investigation, and reaches an authorized disposition. When incident criteria are met, the case joins the response process. Evidence preservation, containment, communication, eradication, and recovery are coordinated rather than performed as disconnected tool actions. Root-cause analysis asks why the path was possible: exposed service, weak recovery, missing separation, unsafe default, delayed patch, supplier failure, or absent monitoring.\n\nContributing factors can span technology, process, staffing, incentives, and design. Blaming the person who clicked a convincing message rarely explains why one action could cause broad harm. Corrective actions name an owner, expected outcome, deadline, resources, and verification method. Detection content, runbooks, asset records, threat models, training, supplier requirements, and recovery tests are updated. The SOC then tests that the change improved the intended outcome without creating a new blind spot.\n\n## Complete the feedback path\n\nAfter a case, separate immediate response from systemic improvement. Detection engineering may tune logic; platform teams may restore missing telemetry; IAM may change recovery; vulnerability management may prioritize an exposed weakness; developers may add audit events; awareness may clarify a reporting behavior. Assign owner and due date and verify the result. Use the case to create a regression test. Replay or simulate the relevant behavior safely, confirm the updated detection and playbook, and ensure benign activity remains usable.\n\nRecord remaining blind spots and accepted risk. A SOC improves when incidents change architecture and process, not when lessons learned ends as an unowned meeting note.",
          "practical": "Take a safe test incident through the entire loop and produce a one-page record: trigger, evidence, timeline, conclusion, action, root cause, corrective owner, and verification.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Business email compromise playbook",
          "lead": "BEC response joins message authenticity, identity compromise, mailbox behavior, contacts, and financial process.",
          "keyIdeas": [
            "Preserve the original message and full headers",
            "Revoke sessions, factors, grants, rules, and forwarding",
            "Verify financial requests through a separate trusted channel"
          ],
          "content": "Intake records reporter, recipient, original message, claimed sender, request, link or attachment, and any action already taken. Preserve the message rather than forwarding it in a way that changes headers. SPF, DKIM, and DMARC results describe domain authentication and alignment; passing them does not make a compromised or attacker-owned sender benign. Inspect Received path, envelope and visible sender, reply-to, authentication results, URLs, attachments, language, and conversation history.\n\nDetermine whether the message is spoofed, sent from a compromised account, or uses a lookalike domain. Search other recipients and related messages without interacting with content. For account compromise, review sign-ins, factor and recovery changes, devices, sessions, application consent, mailbox rules, forwarding, delegates, message access, sent and deleted items, and contacts. Revoke sessions and grants, reset through a clean channel, remove persistence, and validate recovery.\n\nPassword reset alone may leave tokens active. If payment or data was requested, contact the financial institution and affected partner through independently verified details. Preserve transaction evidence and involve legal, privacy, and leadership according to policy. Close with scope, messages, accounts, transactions, containment verification, notifications, and corrective controls such as dual approval and phishing-resistant authentication.",
          "practical": "Build a one-page playbook with evidence preservation, message search, identity scope, financial escalation, containment, partner communication, and closure.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Data exposure assessment and reporting",
          "lead": "Exposure, access, acquisition, and misuse are different conclusions that require different evidence.",
          "keyIdeas": [
            "Identify the data and affected population with a reproducible method",
            "Distinguish public configuration from confirmed access",
            "State logging gaps and use ranges instead of false precision"
          ],
          "content": "A public object, permissive share, lost device, misdirected email, or overprivileged account can expose data. First stop ongoing access without destroying the configuration and logs needed to understand it. Preserve permissions, link settings, versions, indexes, access records, identity events, caches, and provider context. Determine the data owner, classification, record types, jurisdictions, contractual scope, encryption, and affected time. Build the population from authoritative records and deduplicate carefully.\n\nA file count is not necessarily a person count. Use ranges when logs, versions, or changing datasets create uncertainty. Access logs may show reads, downloads, source, identity, user agent, and bytes. They may also be disabled, sampled, expired, or bypassed through a cache. A public permission proves opportunity, not use. A download proves transfer, not later misuse. The report labels each stage and evidence.\n\nSecurity supplies technical facts to privacy, legal, business, insurer, and communication roles that determine obligations.\n\nAvoid “no breach” claims from missing logs. Remediation removes exposure, rotates links or credentials, corrects policy, monitors for misuse, and prevents recurrence through configuration controls and data-minimizing design.",
          "practical": "Write four separate findings for exposure, observed access, confirmed acquisition, and confirmed misuse. List the minimum evidence needed for each.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Tabletops, shift handoffs, and case continuity",
          "lead": "A SOC remains effective when decisions and evidence survive unavailable people, changing shifts, and impaired normal tools.",
          "keyIdeas": [
            "A handoff transfers current state, not every raw event",
            "Tabletops test authority and communication as well as technical knowledge",
            "Improvement items need owners, dates, and retest evidence"
          ],
          "content": "A shift handoff states case objective, severity and confidence, affected entities, sourced timeline, completed actions, current containment, evidence locations, open hypotheses, next queries, pending approvals, stakeholder commitments, and next update. Identify actions that must not be repeated and credentials or channels that may be compromised. The receiving analyst reads back priorities and verifies access. Tabletop exercises present a realistic scenario in timed stages.\n\nParticipants make decisions with only information available at that moment.\n\nInjects can remove a leader, disable email, expand data scope, create a safety concern, introduce a vendor dependency, or force a public communication decision. Observers record decision, authority, evidence requested, delay, and workaround. Exercises should not become trivia contests or scripted demonstrations. Define objectives, boundaries, success measures, and participant roles. Technical staff, service owners, communications, legal, privacy, leadership, and vendors may all be relevant.\n\nUse a blameless review while preserving accountability for improvements.\n\nAn after-action report distinguishes plan gap, control gap, skill gap, and tooling gap. Assign owner, priority, due date, expected evidence, and retest. Update contact lists and playbooks immediately. A lesson without ownership is an observation, not an improvement.",
          "practical": "Design a 45-minute tabletop with four injects that test out-of-band communication, containment authority, data assessment, and recovery priority. Define success evidence for each.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    }
  ]
};
