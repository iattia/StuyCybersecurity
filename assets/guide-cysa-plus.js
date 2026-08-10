// Stuy Cybersecurity certification textbook data.
window.CERT_GUIDE = {
  "name": "CompTIA CySA+ Complete Analyst Textbook",
  "short": "CompTIA CySA+",
  "version": "CS0-003",
  "official": "https://www.comptia.org/en-us/certifications/cybersecurity-analyst/",
  "subtitle": "A full course in security operations, vulnerability management, incident response, and evidence-based reporting.",
  "notice": "This book follows the four CS0-003 exam domains. Product names appear because analysts must recognize common interfaces and artifacts, but the underlying methods transfer between tools. Practice only in systems you own or are explicitly authorized to test.",
  "parts": [
    {
      "title": "Security Operations",
      "weight": "33% of exam",
      "intro": "Security operations turns noisy technical records into defensible conclusions. This part builds the architecture, telemetry, analytic, and threat-intelligence knowledge needed to do that work.",
      "topics": [
        {
          "title": "The analyst's job and the security operations lifecycle",
          "lead": "A SOC is not an alarm-forwarding desk. Its purpose is to reduce uncertainty quickly enough for the organization to act.",
          "keyIdeas": [
            "Events become alerts only after analytic logic is applied",
            "Triage establishes priority; investigation establishes scope and cause",
            "Evidence must support every conclusion and every containment action"
          ],
          "content": "A security operations center receives evidence from endpoints, networks, identity systems, cloud services, applications, and people. Most individual records are ordinary. A successful sign-in, a DNS query, or a newly started process becomes interesting only when its context conflicts with a baseline or when several records form a meaningful sequence. The analyst therefore works with relationships: who acted, from which device, against what resource, at what time, and what happened next.\n\nThe operational lifecycle is continuous. Engineers identify assets and arrange telemetry collection. Detection authors express hypotheses as rules, models, or hunt queries. Tier-one analysts validate alerts and remove obvious benign activity. Investigators reconstruct timelines, estimate scope, and recommend containment. Incident responders eradicate the cause and restore service. Finally, lessons learned change logging, detections, architecture, and procedure. A closed alert is useful only if its disposition is accurate enough to improve future decisions.\n\nSeverity and priority are different. Severity describes the potential technical effect; priority incorporates business context and urgency. Malware on an isolated training laptop may be technically severe but lower priority than suspicious access to a payroll administrator. Analysts consider asset value, data sensitivity, user privilege, exposure, threat activity, and control strength. They also record what is unknown. A clear statement such as “the available proxy logs do not cover mobile traffic” is more trustworthy than false certainty.\n\nGood case notes separate observation, inference, and decision. “Event 4624 shows a type 10 logon at 02:14” is an observation. “The source likely used Remote Desktop” is an inference supported by the logon type. “Disable the account now” is a decision based on risk. Keeping those categories distinct makes peer review, legal review, and later reconstruction much easier.",
          "practical": "For every alert, write a one-sentence hypothesis before querying. Then record the evidence that supports it, evidence that contradicts it, affected entities, time bounds, and next action. This prevents aimless searching and confirmation bias.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "Choose the action that preserves evidence and addresses the highest credible risk, not merely the most dramatic option."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Designing a telemetry pipeline",
          "lead": "Reliable detection begins before the SIEM query: at the point where a record is created, transported, parsed, and retained.",
          "keyIdeas": [
            "Collection, normalization, enrichment, correlation, storage, and retention are separate stages",
            "Time synchronization and stable identifiers are prerequisites for timelines",
            "Logging more data is not the same as collecting better evidence"
          ],
          "content": "A telemetry pipeline begins with a source such as an operating-system audit facility, endpoint agent, firewall, application, or cloud control plane. An agent may forward records, or a collector may poll an API. Transport should be authenticated and resilient; buffering protects evidence during network interruptions. Parsers map vendor-specific fields into a common schema so that one query can describe users, source addresses, processes, and outcomes across products.\n\nEnrichment adds asset owner, business function, geolocation, threat reputation, and identity risk. Normalization inevitably loses some detail. Keep the raw event when possible and preserve a source identifier so an investigator can return to it. Parser changes should be tested like software: malformed timestamps, truncated command lines, renamed fields, or an unexpected null can silently blind a detection. Monitor ingestion volume by source.\n\nA sudden drop to zero is an alert about the monitoring system itself; a sudden increase may signal an attack, a configuration loop, or a cost problem.\n\nTime deserves special attention. Systems should synchronize through an approved time source, and records should preserve both the original timezone and a normalized time such as UTC. Event time is when an action occurred; ingestion time is when the platform received it. Delayed mobile devices, offline endpoints, and queued cloud exports make those different. Sequence numbers, process identifiers, flow identifiers, session IDs, request IDs, and immutable cloud resource IDs help correlate records when names and addresses change.\n\nRetention reflects investigative need, law, contract, and cost. Hot storage supports rapid searches; warm or cold tiers are cheaper but slower. Summaries may serve long-term trend analysis while raw records are retained for a shorter period. Sensitive logs also require access controls because they can contain tokens, query strings, personal information, and administrator activity. Integrity controls, restricted deletion, and documented clock health make the resulting evidence more defensible.",
          "practical": "Build a data-source catalog with owner, collection method, important fields, normal daily volume, retention, time source, parser version, and known gaps. Review it after every major environment change.",
          "tables": [
            {
              "title": "Telemetry pipeline failure modes",
              "headers": [
                "Stage",
                "Typical failure",
                "Analyst symptom"
              ],
              "rows": [
                [
                  "Source",
                  "Auditing disabled",
                  "Expected event never exists"
                ],
                [
                  "Transport",
                  "Queue or API failure",
                  "Ingestion delay grows"
                ],
                [
                  "Parsing",
                  "Field mapping breaks",
                  "Queries return partial results"
                ],
                [
                  "Enrichment",
                  "Inventory is stale",
                  "Wrong owner or criticality"
                ],
                [
                  "Retention",
                  "Data aged out",
                  "Timeline has an unrecoverable gap"
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
          "title": "Windows evidence: logons, processes, services, and persistence",
          "lead": "Windows investigations rely on relationships among accounts, logon sessions, process trees, services, scheduled tasks, registry changes, and network activity.",
          "keyIdeas": [
            "Event IDs are clues, not complete verdicts",
            "Process ancestry and command-line context often matter more than a filename",
            "Different log channels and endpoint products provide complementary evidence"
          ],
          "content": "Windows Security events commonly used in entry-level analysis include 4624 for successful logon, 4625 for failed logon, 4648 for explicit credentials, 4672 for special privileges, 4688 for process creation, 4720 for account creation, and 1102 for audit-log clearing. System event 7045 records service installation. These numbers are useful anchors, but an analyst must inspect the fields. A 4624 network logon differs from an interactive or RemoteInteractive session; a service account naturally produces patterns that would be unusual for a person.\n\nStart with the entity and time window, then pivot. For a suspicious sign-in, examine the source address or workstation, authentication package, logon type, target username, and success or failure code. Link the logon ID to later process or object activity when the data permits. Repeated failures across many users suggest password spraying; many failures against one account suggest brute force; a successful session after either pattern raises urgency but still requires confirmation of source reputation, user travel, VPN use, and expected automation.\n\nProcess analysis uses image path, signer, hash, parent, child, user, integrity level, command line, and network destinations. Names can be copied. A genuine Windows binary executing from an unusual writable directory, an Office application spawning a script interpreter, or a service process launching a shell deserves attention. PowerShell is an administrative tool, not malware; investigate encoded or downloaded content, logging records, parentage, and the surrounding user activity rather than blocking the name alone.\n\nPersistence may use services, scheduled tasks, Run keys, startup folders, WMI subscriptions, newly created accounts, browser extensions, or modified authentication packages. Sysmon and EDR products add rich process, file, registry, DNS, and connection telemetry, but their event schemas differ. Confirm what is actually configured. During response, preserve volatile process and network context before terminating a process if the risk allows.",
          "practical": "When reviewing a suspicious process, draw a small process tree and annotate each node with path, signer, account, command line, start time, and network activity. Explain why the chain is or is not normal for that host role.",
          "tables": [],
          "commands": [
            {
              "title": "PowerShell triage examples",
              "description": "Run only on an authorized investigation host.",
              "code": "Get-WinEvent -FilterHashtable @{LogName=\"Security\"; Id=4624,4625,4688; StartTime=(Get-Date).AddHours(-2)}\nGet-CimInstance Win32_Process | Select ProcessId,ParentProcessId,Name,CommandLine\nGet-ScheduledTask | Where-Object State -ne Disabled"
            }
          ],
          "lab": {
            "goal": "Reconstruct a suspicious Windows logon and process chain.",
            "environment": "A Windows lab VM or exported EVTX/Sysmon data.",
            "steps": [
              "Find the first suspicious authentication record and record all relevant fields.",
              "Pivot by account, host, source address, and logon ID.",
              "Build the resulting process tree and identify persistence or outbound traffic.",
              "Write separate observation, inference, and recommended-action paragraphs."
            ],
            "expected": "A timestamped narrative that another analyst can reproduce.",
            "verification": "Every factual claim cites an event ID, timestamp, and host or record identifier."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Linux and macOS evidence",
          "lead": "Unix-like systems distribute evidence among authentication, service, audit, shell, application, and package records.",
          "keyIdeas": [
            "Log location varies by distribution and logging stack",
            "sudo, SSH, persistence, and package changes are high-value pivots",
            "Shell history is helpful but incomplete and easy to alter"
          ],
          "content": "On Linux, systemd-based hosts expose service records through the journal, while many systems also write files under /var/log. Debian-family authentication events often appear in auth.log; Red Hat-family systems commonly use secure. auditd can record process execution, file access, identity changes, and security-control events when rules are configured. Web servers, databases, containers, and cloud agents usually maintain their own logs. Before relying on a path, determine the distribution, logging daemon, rotation settings, and whether records are forwarded centrally.\n\nFor an SSH investigation, compare failures and successes, authentication method, source address, target account, and session duration. Review sudo records, user and group changes, authorized_keys modifications, new services or timers, cron entries, unusual binaries in writable directories, and outbound connections. An attacker who obtains a normal account may use sudo, exploit a local weakness, steal a key, or establish persistence.\n\nA legitimate administrator may create similar artifacts, so host role, change tickets, working hours, and peer activity matter. macOS investigations often use Unified Logging, endpoint security telemetry, launch agents and daemons, login items, profiles, quarantine attributes, and application-specific records.\n\nPersistence locations exist at both user and system scope. Code-signing and notarization information can help establish provenance but do not prove a program is safe. Across both operating systems, hashes are identifiers, not behavior: a new or low-prevalence signed tool can be maliciously used, while a common unsigned internal utility can be expected. Shell history should never be treated as a complete transcript.\n\nIt may omit noninteractive commands, use delayed writes, exclude commands by configuration, or be edited.\n\nCorroborate it with audit execution records, process telemetry, filesystem times, package databases, network logs, and cloud-session history. Note whether timestamps represent creation, metadata change, modification, or access, and remember that copying or restoring files can alter them.",
          "practical": "Use a hypothesis-led collection plan: authentication first, then privilege changes, persistence, execution, and network activity. Record absent data as a limitation rather than treating absence as proof.",
          "tables": [],
          "commands": [
            {
              "title": "Linux triage examples",
              "description": "Paths and available commands vary by distribution.",
              "code": "journalctl --since \"2 hours ago\"\nlast -ai | head\ngrep -R \"Accepted|Failed password\" /var/log/auth.log*\nsystemctl list-unit-files --state=enabled\nss -plant"
            }
          ],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Network packets, flows, DNS, and encrypted traffic",
          "lead": "Network telemetry shows communication even when endpoint visibility is weak, but each sensor sees only its position in the path.",
          "keyIdeas": [
            "Packets provide payload and protocol detail; flows summarize conversations",
            "DNS and TLS metadata can reveal infrastructure without decrypting content",
            "NAT, proxies, VPNs, and load balancers complicate attribution"
          ],
          "content": "A packet capture preserves bytes observed at a sensor. It can expose malformed protocols, handshake behavior, application requests, and payloads that are not encrypted. NetFlow and similar records summarize source, destination, ports, protocol, byte and packet counts, direction, and timing. Flow is far cheaper to retain, but it cannot reveal most application content. Zeek-style protocol logs sit between these extremes by converting observed sessions into structured DNS, HTTP, TLS, file, and connection records.\n\nBegin a network investigation by defining the observation point. Traffic captured outside a NAT gateway shows public translations rather than internal clients. A reverse proxy may make every request appear to originate from one address unless forwarding fields are preserved. Asymmetric routing can show only half a conversation. Cloud security groups and virtual network flow logs may record allow or deny decisions but not packet content.\n\nEstablish sensor coverage before drawing conclusions. DNS analysis considers query name, type, response, resolver, client, frequency, timing, and domain age or reputation. Long, high-entropy subdomains may suggest tunneling, but content-delivery systems and tracking software can look similar. NXDOMAIN bursts may indicate algorithmically generated domains or merely broken software. TLS commonly exposes destination addresses, certificate details, protocol versions, and sometimes a server name; fingerprinting client or server handshakes can support clustering but changes across versions and can be imitated.\n\nEncrypted traffic analysis is probabilistic, not magical decryption. Packets are read in layers. Verify link type, IP addresses and fragmentation, transport flags and sequence behavior, and then the application protocol. A TCP SYN without a response may mean filtering, packet loss, or an unavailable service. Many short connections can be scanning, health checks, or normal microservice behavior. Compare with baseline, asset role, direction, and endpoint telemetry.\n\nPreserve the original capture and work from copies because filters change what an analyst sees, not what the file contains.",
          "practical": "For any suspicious connection, state five things: initiating endpoint, responding endpoint, time span, volume and direction, and application evidence. Then list the network transformations that could change attribution.",
          "tables": [
            {
              "title": "Network evidence tradeoffs",
              "headers": [
                "Source",
                "Strength",
                "Important limitation"
              ],
              "rows": [
                [
                  "Full packet capture",
                  "Protocol and possible payload detail",
                  "High storage; encryption hides content"
                ],
                [
                  "Flow records",
                  "Broad, inexpensive connection history",
                  "No application payload"
                ],
                [
                  "DNS logs",
                  "Maps clients to requested names",
                  "Caching and encrypted DNS create gaps"
                ],
                [
                  "Proxy logs",
                  "User and URL context",
                  "Only proxied traffic"
                ],
                [
                  "Firewall logs",
                  "Policy decision and connection metadata",
                  "View depends on placement"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "Packet and flow inspection",
              "description": "Examples for an authorized capture file.",
              "code": "tshark -r traffic.pcapng -q -z conv,tcp\ntshark -r traffic.pcapng -Y \"dns.flags.response == 0\" -T fields -e ip.src -e dns.qry.name\ntcpdump -nn -r traffic.pcap \"host 192.0.2.25 and port 443\""
            }
          ],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Cloud, container, and application telemetry",
          "lead": "Modern incidents cross control planes, identities, workloads, and managed services, so host logs alone are insufficient.",
          "keyIdeas": [
            "Control-plane actions and data-plane access answer different questions",
            "Ephemeral resources make centralized evidence essential",
            "Cloud identity and API activity often replace the traditional network perimeter"
          ],
          "content": "Cloud control-plane audit logs record administrative API activity: who changed a policy, created a key, launched a workload, altered logging, or read a secret. Data-plane logs record use of the service itself, such as object access, database queries, or application requests. The exact distinction and default coverage vary by provider. Analysts should know which high-value services require explicit logging, where logs are stored, and whether an attacker with administrative access could disable or delete them.\n\nCloud investigations pivot on stable resource identifiers, account or tenant, region, assumed role or service principal, source address, user agent, request parameters, result, and correlation ID. Temporary credentials are normal; their issuance chain matters. Trace a session back to the human, workload, or federation event that obtained it. Impossible-travel logic is less reliable for automation and corporate egress, while a normally noninteractive service identity suddenly using a console or new API family is compelling.\n\nContainers are processes with isolation, not tiny permanent servers. Container stdout and stderr, orchestrator audit logs, admission decisions, image provenance, registry events, runtime detections, network policy logs, and node evidence provide different views. A container may disappear before triage begins, so forward logs and preserve deployment manifests, image digests, pod identifiers, and orchestration events. Distinguish a change to an immutable image from a modification inside one running instance.\n\nIn Kubernetes, review API requests, service-account tokens, role bindings, secrets access, exec sessions, and creation of privileged workloads. Applications should produce structured authentication, authorization, transaction, security, and error records without logging passwords, session tokens, or sensitive request bodies. A reverse proxy or web application firewall sees requests before the application interprets them; only the application knows the final authenticated identity and business action.\n\nCorrelate using request IDs. Serverless and managed platforms shorten host access, making deployment records, cloud APIs, traces, and application instrumentation even more important.",
          "practical": "Create a cloud evidence map for one application: identity provider, control-plane audit, workload runtime, application, database, object storage, network, and deployment pipeline. Identify the common request or session identifiers.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "When evidence is ephemeral, prioritize preservation and centralized logs before making a change that destroys the running state."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Identity, email, and web authentication analysis",
          "lead": "Identity systems connect people, devices, applications, and privileges; attackers frequently exploit that trust rather than exploiting software.",
          "keyIdeas": [
            "Authentication proves a presented identity; authorization decides permitted action",
            "Token theft can bypass password-focused controls",
            "Email analysis must consider headers, authentication results, links, attachments, and user context"
          ],
          "content": "An identity investigation begins with the account but quickly expands to credential issuance, multifactor events, device registration, session tokens, application consent, group membership, role assignment, and resource access. A successful MFA event does not prove the legitimate user acted. Adversaries can phish one-time codes, fatigue users with prompts, steal session cookies, register a new factor, or obtain application tokens. Review the full authentication chain and changes to recovery methods or trusted devices.\n\nPassword spraying tests a small number of likely passwords across many users to avoid per-account lockout. Credential stuffing reuses known username-password pairs. Brute force makes many guesses against a smaller target set. These patterns require different grouping. Also distinguish interactive sign-ins from legacy protocols, service accounts, and automated token refreshes. Conditional-access results, device compliance, autonomous system, client application, and risk signals provide context, but a control marked “not applied” may reveal a policy gap.\n\nFor suspicious email, preserve the original message with headers. The visible From line can differ from the envelope sender and authenticated domain. SPF evaluates whether a sending host is authorized for the envelope domain; DKIM validates a signature over selected message content; DMARC aligns authenticated domains with the visible From domain and supplies policy. Passing all three does not guarantee benign mail;a compromised or attacker-owned domain can authenticate correctly.\n\nInspect Received headers in chronological context, URLs after safe expansion, attachment type, reply-to differences, language, and the recipient's normal workflow. Web authentication produces identity-provider, reverse-proxy, application, and session records.\n\n## OAuth and OpenID\n\nConnect separate authorization and identity use cases; SAML carries assertions between an identity provider and service provider. Analysts should recognize abuse of redirect URIs, excessive application consent, stolen refresh tokens, forged or replayed assertions, and session creation without the expected preceding authentication. Revoke exposed sessions as well as changing the password.",
          "practical": "Build an identity timeline that starts before the first suspicious sign-in and ends after resource access. Include factor changes, token issuance, new applications, role changes, and sessions that remain active.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Analyze a simulated business-email-compromise case.",
            "environment": "Exported email headers plus identity-provider and mailbox audit logs.",
            "steps": [
              "Authenticate the sending path using headers and domain-alignment results.",
              "Identify the first suspicious sign-in or application consent.",
              "Trace mailbox-rule, forwarding, message-access, and sent-mail activity.",
              "Recommend session revocation, credential reset, rule cleanup, and stakeholder notifications."
            ],
            "expected": "A scoped account-compromise timeline with containment steps.",
            "verification": "The explanation distinguishes what the email proves from what identity logs prove."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "From indicators to detections: signatures, behavior, and baselines",
          "lead": "A detection is a testable claim about observable behavior, not a list of scary strings.",
          "keyIdeas": [
            "Indicators decay and require context",
            "Behavioral detections trade specificity for resilience",
            "A baseline describes expected populations and variation, not one universal normal"
          ],
          "content": "Indicators of compromise include addresses, domains, URLs, hashes, certificates, mutex names, file paths, registry locations, account names, and tool-specific patterns. They are useful for scoping and short-term blocking, but many are easily changed or shared with legitimate infrastructure. An indicator should carry source, first and last seen time, confidence, handling restrictions, and the behavior it is believed to represent. A match starts an investigation; it does not end one.\n\nSignature detections match known properties and can be precise. Behavioral detections describe relationships such as a document process creating a script interpreter that contacts a rare destination. Anomaly detections compare an entity with its own history or a peer group. Each approach fails differently. Signatures miss new variants, broad behavior rules create false positives, and anomaly models reproduce errors in their baselines.\n\nLayer them and measure performance with labeled outcomes.\n\nTrue positive and false positive describe alerts; true negative and false negative describe non-alerted activity. Analysts usually see the first two, making false negatives hard to measure. Purple-team exercises, historical replay, incident retrospectives, and sampled benign data help. Precision asks what fraction of alerts were relevant. Recall asks what fraction of relevant activity was detected. Lowering a threshold may improve recall while harming precision and analyst capacity.\n\nBaselines should account for role, season, maintenance, geography, release cycles, and growth. A backup server transfers large volumes at night; a developer uses administrative tools; a payroll application spikes at predictable dates. Baselines can be descriptive statistics, peer-group comparisons, allowlists with owners and expiry, or learned models. Attackers may stay low and slow or poison a learning period, so a baseline supplements rather than replaces threat-informed logic.",
          "practical": "For one noisy rule, write its hypothesis, required data, grouping key, threshold, time window, exclusions, severity, and investigation procedure. Test known-positive and representative benign cases before changing production.",
          "tables": [
            {
              "title": "Detection approaches",
              "headers": [
                "Approach",
                "Best at",
                "Main weakness"
              ],
              "rows": [
                [
                  "Exact indicator",
                  "Known infrastructure or artifact",
                  "Short life and shared services"
                ],
                [
                  "Signature",
                  "Known content or pattern",
                  "Evasion and variants"
                ],
                [
                  "Behavior chain",
                  "Stable attacker technique",
                  "More context and tuning"
                ],
                [
                  "Anomaly",
                  "Unexpected activity",
                  "Baseline quality and explainability"
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
          "title": "SIEM querying, correlation, and alert tuning",
          "lead": "The query language changes by product; sound investigative reasoning does not.",
          "keyIdeas": [
            "Filter, parse, aggregate, join, and sequence are the core operations",
            "A correlation window should reflect the behavior being detected",
            "Tuning should remove understood benign causes without hiding the threat"
          ],
          "content": "A useful SIEM workflow moves from broad to specific while preserving a control group. Begin with the time range, data source, and entities from the alert. Confirm that expected fields are populated and inspect raw records. Aggregate by user, host, address, process, or result to find concentration. Expand around interesting timestamps and join independent sources. Sequence logic expresses ordered behavior, such as failures followed by success, a new privileged role, and unusual resource access.\n\nField semantics matter. One source may store destination as a hostname, another as an address, and a third behind a translated gateway. Usernames can vary by case, suffix, or immutable ID. Normalization and lookup tables help, but analysts must recognize their assumptions. Searching the literal text “failed” can miss numeric result codes and include irrelevant messages. Use the documented schema and validate against raw samples.\n\nCorrelation windows follow the expected technique. Password spray may unfold over hours; process injection occurs in milliseconds; data staging and exfiltration may span days. Very long windows increase cost and accidental combinations. Group by the entity that makes the sequence meaningful and consider cardinality. Fifty failures from one address against fifty accounts is different from fifty failures from fifty normal workstations.\n\nTuning starts with disposition data.\n\nIdentify recurring benign causes and ask whether they can be expressed by stable context such as managed scanner ID, signed binary path, approved change window, or asset role. Avoid broad exclusions for administrator accounts, internal addresses, or an entire product. Give allowlists owners and expiration dates. After a change, replay positive cases, compare alert volume and detection delay, peer-review the logic, and monitor for ingestion changes.\n\nSuppression reduces repeated notifications for the same entity; it should not discard underlying evidence.",
          "practical": "Treat a detection as production code. Keep a versioned rule, rationale, data requirements, test cases, expected volume, runbook, owner, change history, and retirement criteria.",
          "tables": [],
          "commands": [
            {
              "title": "Portable pseudo-query pattern",
              "description": "Translate the operations into the SIEM language used in your lab.",
              "code": "FROM authentication\nWHERE outcome = \"failure\"\nGROUP BY source_ip, 15m\nHAVING distinct(user_id) >= 10\nJOIN successful_authentication ON source_ip WITHIN 10m\nENRICH asset_inventory, identity_risk\nPROJECT time, source_ip, users, target_assets"
            }
          ],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Endpoint detection and process-tree investigation",
          "lead": "EDR connects execution, file, registry, identity, and network evidence at the endpoint where intent often becomes visible.",
          "keyIdeas": [
            "Process trees expose causality but can be manipulated",
            "Prevalence, signer, path, command line, and behavior work together",
            "Isolation and collection choices must consider business and evidence impact"
          ],
          "content": "Endpoint detection and response platforms record process starts, parent-child relationships, command lines, hashes, file operations, registry changes, network connections, loaded modules, and security events. Some products also provide memory scanning, live response, remote file retrieval, and host isolation. Coverage depends on sensor health, policy, operating system, and tamper protection. Confirm whether the device was online and reporting during the suspected period.\n\nInvestigate from the alert outward.\n\nExamine the initiating user and logon session, the process ancestry, all descendants, file origin, code signature, prevalence, and network destinations. A suspicious parent-child pair is stronger when the child executes from a user-writable directory, uses obfuscated arguments, accesses credentials, or contacts new infrastructure. Process ancestry is not infallible: services, schedulers, remote-management tools, process injection, and parent spoofing can obscure causality.\n\nCorroborate with other endpoint and identity records.\n\nMemory-resident behavior may never create a conventional file, but it still leaves execution, script-block, module-load, memory, handle, and network artifacts if the appropriate sensors are present. Living-off-the-land binaries are legitimate signed tools used for an unintended purpose. Their name alone is a poor detection; arguments, input source, child process, destination, account, and host role establish meaning. Response actions include collecting a file, killing a process, quarantining an artifact, isolating the host, disabling an account, and blocking an indicator.\n\nIsolation may interrupt critical care, manufacturing, or authentication services. Killing a process can lose memory evidence or trigger destructive malware. Choose the least disruptive action that controls the credible risk, document authorization, and verify that containment actually worked. If the endpoint may be legally significant, coordinate forensic collection before routine cleanup.",
          "practical": "Write an endpoint investigation checklist that begins with sensor health and ends with containment verification. Include a reason and evidence requirement for each destructive action.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "A familiar signed binary can still be abused; behavior and context outweigh reputation alone."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Threat intelligence, ATT&CK mapping, and hunting",
          "lead": "Intelligence reduces uncertainty about relevant threats; hunting tests a hypothesis in data before a normal alert provides the answer.",
          "keyIdeas": [
            "Strategic, operational, tactical, and technical intelligence serve different audiences",
            "Confidence, relevance, timeliness, and source reliability determine utility",
            "ATT&CK describes observed behavior, not a guaranteed chronological checklist"
          ],
          "content": "Threat intelligence ranges from strategic assessments for leadership to operational reporting on campaigns, tactical descriptions of techniques, and technical indicators for detection. Raw feeds are data, not automatically intelligence. Analysts evaluate source reliability, information credibility, age, relevance to the organization's technology and geography, and whether sharing restrictions permit operational use. Multiple reports may ultimately repeat one unverified source; apparent volume is not independent confirmation.\n\nThe intelligence lifecycle begins with requirements.\n\nA hospital might ask which ransomware affiliates target its region and which initial-access methods matter to its remote services. Collection should answer those questions. Processing structures and deduplicates material. Analysis forms judgments with confidence and alternatives. Dissemination tailors the result to decision makers. Feedback measures whether it changed a control, hunt, priority, or risk decision. MITRE ATT&CK provides a vocabulary of tactics, techniques, and sub-techniques observed in real activity.\n\nMap only behavior supported by evidence. A command interpreter is not automatically “execution” by an adversary; record why it was malicious. ATT&CK is useful for coverage analysis, hunt design, and communicating a chain, but it does not provide severity, prevalence, or a prescribed response.\n\n## The Cyber Kill Chain and Diamond\n\nModel offer other useful perspectives on stages and relationships. A hunt starts with a falsifiable hypothesis, required visibility, scope, and stopping condition. For example: “An adversary using stolen cloud credentials may enumerate secrets from identities that have never called the secrets API.” Query historical behavior, validate data completeness, examine outliers, and document both findings and coverage gaps. A successful hunt may discover an incident, create a detection, improve enrichment, or demonstrate that the available data cannot answer the question.\n\nAll are valid outcomes if honestly documented.",
          "practical": "Turn one external report into an internal product: list affected technologies, observable behaviors, available data sources, hunt queries, detection gaps, control recommendations, confidence, and expiry date.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Conduct a small hypothesis-driven hunt.",
            "environment": "A SIEM dataset with endpoint, identity, or network records.",
            "steps": [
              "State one specific adversary behavior and the evidence it would produce.",
              "Confirm the required fields and time coverage.",
              "Query broadly, build a benign comparison group, and investigate outliers.",
              "Document findings, limitations, and one detection or logging improvement."
            ],
            "expected": "A reproducible hunt report rather than a collection of screenshots.",
            "verification": "A peer can rerun the query and understand why each outlier was closed or escalated."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Automation, orchestration, and safe operational engineering",
          "lead": "Automation is most valuable when it handles predictable work and keeps consequential judgment visible.",
          "keyIdeas": [
            "SOAR playbooks coordinate enrichment, ticketing, containment, and communication",
            "Idempotence, approval gates, error handling, and audit logs prevent automation from multiplying harm",
            "Analysts should understand APIs and simple scripts even when using commercial tools"
          ],
          "content": "Security orchestration, automation, and response platforms connect tools through APIs and arrange actions as playbooks. Low-risk enrichment is a natural starting point: retrieve asset ownership, user risk, reputation, sandbox results, and related cases, then attach them to an alert. Ticket creation, evidence packaging, notification, and repeated indicator searches are also predictable. Automatic account disabling or host isolation requires stronger confidence, scope checks, and approval because an error can become an outage.\n\nA safe playbook validates inputs, uses least-privilege service identities, protects secrets, handles rate limits and partial failure, and records every action. Idempotence means repeating the playbook does not repeatedly disable an account, create hundreds of tickets, or corrupt state. A dry-run mode lets analysts inspect intended actions. Human approval should show the exact target, evidence, expected impact, rollback plan, and timeout.\n\nIf a platform is unavailable, the runbook needs a manual path.\n\nSimple scripting helps analysts transform data, call an API, compare sets, calculate time differences, or enrich many indicators consistently. Treat scripts as operational software. Validate untrusted input, avoid shell injection, set timeouts, paginate APIs, respect encoding and timezones, log without exposing secrets, and test with representative data. Preserve the original source and write transformed output to a new artifact so the work remains auditable.\n\nAutomation quality is measured by more than speed.\n\nTrack failure rate, manual overrides, incorrect actions, time saved, containment delay, and coverage. Retire automations whose assumptions no longer match the environment. The best automation does not hide reasoning: it makes evidence and decision points clearer while eliminating repetitive copying.",
          "practical": "Automate enrichment before containment. Once the enrichment output is reliable, add a human-approved response action with target validation, rollback, and a complete audit trail.",
          "tables": [],
          "commands": [
            {
              "title": "Safe enrichment pseudocode",
              "description": "The structure matters more than the language.",
              "code": "validate(indicator)\nresult = reputation_api.lookup(indicator, timeout=5)\nif result.not_found: record(\"unknown\")\nelif result.confidence >= threshold: attach_evidence(result)\nelse: queue_for_review()\nlog(request_id, source, timestamp, outcome)"
            }
          ],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "The analyst workstation and safe evidence handling",
          "lead": "An investigation environment should help the analyst examine untrusted material without turning the analyst into the next victim or changing the evidence unnecessarily.",
          "keyIdeas": [
            "Separate ordinary work, investigation, and malware-analysis environments",
            "Preserve originals and record transformations",
            "Treat links, documents, scripts, credentials, and removable media as untrusted"
          ],
          "content": "A normal employee laptop is a poor place to open a suspicious attachment. It contains valuable sessions, contacts, and credentials, and it is connected to business services. Analysts use a controlled workstation or jump environment with limited privilege, current protection, restricted network paths, protected storage, and the tools needed for the case. More hazardous work belongs in an isolated analysis network or disposable virtual machine whose traffic and state can be observed.\n\nIsolation must be verified; a virtual machine connected to the ordinary corporate bridge is not a safe sandbox. Evidence handling begins with provenance. Record who supplied the item, where it came from, collection time, original name and metadata, case identifier, and a cryptographic hash for file integrity. Store the original with restricted write access, then analyze a verified working copy.\n\nA hash shows that two byte sequences match; it does not prove that the original source was truthful or that collection was complete.\n\nScreenshots can illustrate a finding but should not replace exportable logs, exact queries, and original artifacts. Untrusted documents can contain active content, external references, macros, embedded objects, or exploits. URLs can record the analyst's visit or redirect by geography and device. Archive files can contain misleading paths, nested archives, or very large expansion ratios. Scripts may retrieve additional stages. Do not sign in to suspicious infrastructure, submit confidential files to public services, or “see what happens” from a production address.\n\nUse approved internal tools and follow legal, privacy, and intelligence-sharing rules. Operational security also applies to notes. Case systems may contain personal information, credentials, vulnerabilities, and details that would help an attacker. Use the approved case record, least-privilege access, and neutral language. Keep investigation commands and defensive actions in the timeline because they can create processes, connections, and log events that resemble attacker behavior.\n\nBefore closing the environment, collect the outputs needed for reproduction, record tool versions and settings, remove exposed tokens, and follow retention policy. A reproducible modest conclusion is more valuable than an impressive screenshot nobody else can verify.",
          "practical": "Create a handling checklist for a suspicious email attachment. Include intake, hashing, storage, working copy, isolation, network policy, tool logging, result export, and final retention.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Practice preserving and examining a harmless text artifact.",
            "environment": "A disposable folder and a harmless sample file you create.",
            "steps": [
              "Create a sample file and record its source and collection time.",
              "Calculate a SHA-256 hash and protect the original from ordinary editing.",
              "Make and hash a working copy.",
              "Perform one documented transformation on the copy.",
              "Verify that the original hash remains unchanged and record the new artifact hash."
            ],
            "expected": "The record distinguishes the original, working copy, and derived artifact.",
            "verification": "Another student can reproduce every hash and transformation from the notes."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Malware triage without guesswork",
          "lead": "Malware triage develops a bounded behavioral picture from safe static and dynamic evidence; it does not require naming a family before the facts are understood.",
          "keyIdeas": [
            "Static analysis examines an artifact without executing it",
            "Dynamic analysis observes behavior in a controlled environment",
            "Hashes identify exact samples but behavior and relationships survive small changes"
          ],
          "content": "Begin with the question the incident needs answered. Is the file executable, did it run, what systems may be affected, what persistence or communication should responders search for, and what containment is justified? Preserve the sample, verify the case scope, and avoid execution on ordinary systems. File type should be determined from structure or magic bytes, not only the extension.\n\nRecord size, cryptographic hashes, signing information, compilation metadata with caution, strings, imports, embedded resources, and packaging indicators.\n\nStrings can expose paths, domains, user agents, commands, configuration, and error messages, but they may be encoded, encrypted, compressed, unused, or deliberately misleading. Imports suggest capabilities, not proof of execution. A valid signature establishes that content has not changed since signing under a particular key; it does not guarantee good intent. Reputation services can provide prevalence and prior reports, but public submission may disclose confidential software or notify an adversary that a sample was found.\n\nDynamic analysis runs only in an approved isolated environment. Capture the initial snapshot, process tree, file and registry or configuration changes, services or scheduled tasks, network attempts, mutexes, and cleanup behavior. Simulated DNS or internet services may reveal requested infrastructure without allowing uncontrolled contact. Malware may detect virtualization, wait for user interaction, require arguments, or depend on unavailable services, so “no behavior observed” is not a clean verdict.\n\nConnect the sample to enterprise telemetry. Search the exact hash, then broader attributes such as original filename, signer, execution path, parent process, command-line pattern, persistence location, contacted domain, certificate, and behavior. Separate indicators suitable for immediate blocking from durable detection ideas. A shared cloud address or common interpreter is rarely safe to block globally. The report states what was observed, collection limitations, affected platforms, likely capability with confidence, indicators with source, and recommended scope searches.\n\nReverse engineering may be escalated when the sample hides configuration, exploits a novel weakness, or demands an answer that triage cannot support.",
          "practical": "For a sample report, classify every statement as observed behavior, static clue, external reputation, inference, or unknown. Remove any family attribution unsupported by evidence.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Web and API attack evidence",
          "lead": "Web investigations join edge, application, identity, database, and deployment records to determine what the server actually interpreted and authorized.",
          "keyIdeas": [
            "A suspicious request is not the same as a successful exploit",
            "Reverse proxies and applications may record different client identities",
            "Request IDs and session identifiers are stronger joins than timestamps alone"
          ],
          "content": "A web access log commonly records time, client address, method, path, status, bytes, referrer, user agent, and processing time. A reverse proxy may replace the apparent client with its own address and place the original in a forwarding header. Trust that header only when it was set by an approved proxy that removes untrusted copies. Load balancers can create separate front-end and back-end connections, so correlate by request or trace identifier when available.\n\nEncoding makes superficial searches unreliable. Paths and parameters may use percent encoding, Unicode, repeated encoding, alternate separators, or unexpected content types. Preserve the raw request and the normalized form used by the application or security control. A 500 response after an injection-like string can mean an unhandled error, not code execution. A 200 can be a generic error page. Determine the authenticated identity, route selected, application decision, backend query or action, response semantics, and subsequent behavior.\n\nCommon patterns include traversal, injection, cross-site scripting, broken access control, server-side request forgery, insecure file upload, token abuse, and automated enumeration. The evidence for impact differs. Traversal needs proof that an unintended file was read. Injection needs database or application effects. An authorization issue needs two identities or resource boundaries and the application's decision. A file upload needs storage location, validation, retrieval, and possible execution context.\n\nAPI logs add token subject, client application, scopes, resource, object identifiers, response, and rate limits. A valid token may be stolen or overprivileged. Review issuance, consent, refresh, revocation, and calls from the session. For cloud-hosted applications, connect edge requests with control-plane changes and workload logs. Containment can block a request pattern, disable a route, revoke a token, restrict a source, or remove a vulnerable deployment.\n\nChoose the control that interrupts the demonstrated path and test legitimate behavior. Preserve the code or configuration version so a later fix can be tied to what was actually running.",
          "practical": "Build a request timeline from edge proxy, application, identity, and database logs. State separately whether the request arrived, authenticated, reached vulnerable code, changed data, and produced later access.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Investigating collection and data exfiltration",
          "lead": "Large outbound traffic becomes evidence of data loss only after the analyst establishes source data, actor, destination, path, and transfer success.",
          "keyIdeas": [
            "Collection, staging, transfer, and confirmed disclosure are separate conclusions",
            "Flow volume is useful but does not identify content",
            "Cloud sharing and application exports can bypass traditional egress sensors"
          ],
          "content": "An adversary may search repositories, query databases, enumerate mailboxes, access file shares, create archives, stage data in a temporary directory, and transfer it through web, cloud storage, DNS, email, remote administration, or an approved collaboration service. Each stage creates different evidence. An archive file suggests staging but not necessarily transfer. Outbound bytes suggest movement but not what the bytes contained.\n\nA public sharing link creates exposure but not proof that an unauthorized party used it.\n\nStart with the protected data and its normal access path. Identify classification, owner, storage, application, expected users, typical query or export size, and retention. Review identity sessions, search and read activity, export jobs, file access, process execution, archive creation, removable media, cloud audit, proxy, firewall, DNS, and flow records. Stable request, job, session, or object identifiers strengthen the chain. Measure carefully.\n\nNetwork byte counters include protocol overhead and may be observed at several points, causing double counting.\n\nCompression makes transferred size smaller than source data, while encryption and packaging prevent direct content inspection. A long encrypted transfer to a rare destination is a useful lead, not proof. Compare with backups, software distribution, media, development, and other high-volume legitimate workflows. Cloud services require attention to link creation, recipient, permission, object version, download or access events, client application, source, and later revocation.\n\nSome providers log control-plane sharing but not every data read by default.\n\nState when retention or configuration prevents a conclusion. “No unauthorized access appears in the available logs” is different from “no access occurred.” Containment protects the data and actor path: revoke sessions and links, restrict exports, isolate a staging host, preserve cloud configuration, and block a destination when justified. Determine whether copied data remains at an external provider and coordinate legal, privacy, and business response.\n\nThe final report provides a range and method for affected records rather than an unsupported exact number.",
          "practical": "Given an archive event and a 2 GB encrypted flow, write the additional evidence needed to support collection, successful transfer, content identity, and unauthorized disclosure as four separate claims.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Vulnerability Management",
      "weight": "30% of exam",
      "intro": "Vulnerability management is a risk-reduction program, not a recurring scanner export. This part follows a weakness from asset discovery through validation and durable remediation.",
      "topics": [
        {
          "title": "Building a vulnerability management program",
          "lead": "A mature program continuously discovers exposure, assigns ownership, prioritizes risk, drives remediation, validates the result, and learns from exceptions.",
          "keyIdeas": [
            "Coverage and ownership come before severity counts",
            "Policy defines scope, frequency, deadlines, exception authority, and evidence",
            "Trend and recurrence matter more than one scan snapshot"
          ],
          "content": "Vulnerability management connects security, IT operations, engineering, cloud teams, procurement, and business owners. Its inputs include vulnerability scanners, configuration assessments, software-composition analysis, application testing, penetration tests, vendor advisories, bug reports, and threat intelligence. Its outputs are decisions: remediate, mitigate, accept, transfer, or remove the affected service. A scanner is one sensor in that system. The program begins with policy. Define which assets and environments are covered, scanning methods and frequency, credential handling, safe testing restrictions, severity and risk criteria, remediation targets, exception approval, and verification evidence.\n\nProduction, development, corporate endpoints, cloud accounts, network appliances, operational technology, and externally managed services may require different procedures. Emergency processes address actively exploited or internet-exposed weaknesses without waiting for a routine cycle. Every finding needs an accountable owner. Ownership differs from the person who performs the patch: a business or service owner accepts operational risk, while system administrators or developers implement the change.\n\nService catalogs and configuration-management databases can help, but stale records create false confidence.\n\nTrack unknown and unsupported assets as program defects. When no owner exists, escalation should be explicit rather than allowing a ticket to age silently. Metrics should describe risk reduction and process health. Useful measures include asset coverage, scan authentication rate, age by risk tier, percentage fixed within target, recurrence, reopened findings, exception inventory, and time from public disclosure to exposure assessment.\n\nRaw vulnerability count can rise after better discovery even though the program improved.\n\nReport that context. A healthy program also conducts retrospectives on repeated weaknesses and changes build standards, images, procurement requirements, or deployment pipelines so the class of problem becomes harder to reintroduce.",
          "practical": "Draw the lifecycle for one finding from discovery to closure. Name the evidence, owner, decision authority, deadline, validation step, and escalation at each stage.",
          "tables": [
            {
              "title": "Lifecycle decisions",
              "headers": [
                "Decision",
                "Meaning",
                "Required record"
              ],
              "rows": [
                [
                  "Remediate",
                  "Remove the weakness",
                  "Change and validation evidence"
                ],
                [
                  "Mitigate",
                  "Reduce likelihood or impact",
                  "Control, coverage, and residual risk"
                ],
                [
                  "Accept",
                  "Authorized owner retains risk",
                  "Rationale, approver, scope, expiry"
                ],
                [
                  "Transfer",
                  "Shift financial or operational consequence",
                  "Contract or insurance terms"
                ],
                [
                  "Avoid",
                  "Remove the risky activity or asset",
                  "Decommission evidence"
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
          "title": "Asset discovery, classification, and attack surface",
          "lead": "You cannot assess what you cannot find, and you cannot prioritize what you do not understand.",
          "keyIdeas": [
            "Passive and active discovery reveal different populations",
            "Asset criticality includes business process, data, privilege, and dependency",
            "External attack-surface management must be reconciled with internal ownership"
          ],
          "content": "Asset discovery combines authoritative records and observation. Sources include procurement and inventory systems, directory services, DHCP and DNS, endpoint management, cloud resource APIs, hypervisors, container orchestrators, certificate transparency, domain registrations, network flows, passive sensors, and authorized active scans. Each has gaps. An endpoint platform misses unmanaged devices; a network scan misses sleeping laptops and blocked segments; a cloud inventory misses resources in unknown accounts.\n\nActive discovery sends traffic and can identify live hosts, ports, protocols, and sometimes versions.\n\nIt may disrupt fragile equipment or trigger security controls, so scope, rate, timing, and authorization matter. Passive discovery observes existing communication and is safer for sensitive environments but cannot see silent assets. Agent-based inventory gives deep host detail but only after deployment. Reconcile sources using stable identifiers and preserve uncertainty when records cannot be confidently merged. Classification adds business meaning: owner, service, environment, internet exposure, location, operating system, support status, data sensitivity, privilege, regulatory scope, recovery requirement, and dependencies.\n\nA low-profile identity server may be more critical than a public marketing site because compromise enables movement across the enterprise. A vulnerable library inside a dormant image differs from the same library loaded by an internet-facing process. Reachability and runtime context shape exposure. External attack-surface management looks from the internet for domains, addresses, certificates, cloud storage, services, and acquisitions the organization may have forgotten.\n\nFindings must be verified before action because shared hosting, historical DNS, and provider address reuse can misattribute assets. Shadow IT is both a vulnerability and a governance clue: remediation may require establishing ownership and supported alternatives, not simply blocking a service.",
          "practical": "Select three inventory sources and compare the unique assets each finds. Investigate mismatches, then define which source is authoritative for ownership, network presence, and software detail.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Create a reconciled inventory in a small lab network.",
            "environment": "An authorized subnet with several VMs or containers.",
            "steps": [
              "Collect DHCP or router clients, an active host scan, and host-level software inventory.",
              "Normalize addresses, hostnames, and stable machine identifiers.",
              "Classify service, exposure, owner, and criticality.",
              "Document blind spots and a safe recurring discovery schedule."
            ],
            "expected": "One asset table with provenance and confidence for each record.",
            "verification": "Every discovered address is either matched to an asset or marked unresolved."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Scanner architecture, credentials, and safe configuration",
          "lead": "Scan quality depends on vantage point, credentials, plugins, policy, and the target;not just the product name.",
          "keyIdeas": [
            "Authenticated scans reveal patch and configuration state more accurately",
            "Scanner placement determines reachable attack paths",
            "Rate, checks, and maintenance windows protect availability"
          ],
          "content": "Network vulnerability scanners identify services and compare observed versions, behavior, or host state with known checks. An unauthenticated scan approximates what that network position can see without credentials. It is valuable for exposure, but banners may be hidden, backported, or misleading. An authenticated scan logs into the target with a controlled account and inspects packages, patches, configuration, and local software.\n\nCredential failure can silently reduce depth, so monitor authentication success separately from job completion.\n\nPlace scanners to answer specific questions. An external scanner measures internet exposure. Internal scanners in representative segments see controls and routes that an internal adversary might use. Cloud-native or agent scanning reaches ephemeral and remote systems. Web application scanners need application scope, test identities, logout behavior, and safeguards against destructive functions. Container and dependency scanners inspect images and manifests; runtime reachability may require additional tools.\n\nConfigure target ranges, exclusions, ports, discovery method, credentials, checks, performance, and schedule. Fragile printers, medical devices, industrial controllers, and legacy services may fail under aggressive probing. Coordinate with owners, use approved safe-check policies, start slowly, and maintain an emergency stop. Scanning through intrusion prevention may block the scanner and create misleading results; coordinate allowlisting without bypassing the security question being tested.\n\nCredential handling follows least privilege.\n\nUse dedicated accounts, vault retrieval, rotation, restricted source addresses, and auditing. A scanner often needs broad read access and therefore becomes a high-value target. Segment it, harden the host, protect reports, monitor administrative activity, and separate scan operation from result approval where practical. After each job, review unreachable hosts, authentication failure, plugin feed age, duration, and coverage before interpreting severity.",
          "practical": "A scan report without coverage evidence is incomplete. Attach target count, responding count, authenticated count, excluded assets, scanner location, policy version, and plugin date.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "If an authenticated scan suddenly reports far fewer findings, verify credentials and coverage before celebrating."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Reading scan evidence and eliminating false conclusions",
          "lead": "A finding is a claim supported by evidence; the analyst must verify both the affected condition and the proposed fix.",
          "keyIdeas": [
            "CVE, CWE, CPE, and vendor advisory identifiers answer different questions",
            "Version detection and banner evidence can create false positives and false negatives",
            "Validation should be safe, reproducible, and proportionate to risk"
          ],
          "content": "A scanner finding generally includes target, port or component, detection method, evidence, severity, references, and remediation. CVE identifies a publicly disclosed vulnerability record; CWE describes a weakness class such as improper input validation; CPE names a product or platform in a structured way. Vendor advisories and package trackers provide the authoritative affected-version and fix context. An exploit identifier or proof of concept indicates possible technique, not that exploitation occurred in the organization.\n\nRead the evidence before the title. Did the scanner inspect an installed package, match a network banner, observe vulnerable behavior, or infer a version from a fingerprint? Linux vendors often backport security fixes without changing the upstream version in the way a naive check expects. Appliances may hide their underlying packages. Load balancers may expose one banner while routing to several versions.\n\nConversely, a service that suppresses version details may remain vulnerable despite a clean banner-based scan.\n\nFalse positive means the reported condition does not exist. An accepted risk or mitigated vulnerability is still a true finding. A false negative is a condition the assessment missed due to coverage, credentials, plugin logic, timing, or evasion. Duplicate findings may represent one underlying component on several interfaces; consolidate carefully without erasing affected instances. Determine whether a vulnerable library is present, loaded, reachable, and used in a vulnerable configuration.\n\nValidation can include package-manager records, vendor version commands, configuration inspection, safe request-response checks, software bills of materials, code review, or a targeted rescan. Avoid exploit execution in production unless specifically authorized and justified. Keep screenshots secondary to machine-readable output and exact commands or record identifiers. If evidence remains ambiguous, document the uncertainty and choose a protective interim control.",
          "practical": "For every high-risk finding, write: scanner claim, observed evidence, authoritative affected condition, environment-specific exposure, verification method, and closure evidence.",
          "tables": [
            {
              "title": "Identifier reference",
              "headers": [
                "Identifier",
                "Describes",
                "Example use"
              ],
              "rows": [
                [
                  "CVE",
                  "A disclosed vulnerability record",
                  "Cross-reference advisories and tools"
                ],
                [
                  "CWE",
                  "A class of software weakness",
                  "Find systemic development causes"
                ],
                [
                  "CPE",
                  "A standardized product name",
                  "Match products to vulnerability data"
                ],
                [
                  "CVSS",
                  "Technical severity characteristics",
                  "Compare intrinsic exploit and impact factors"
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
          "title": "CVSS, exploit evidence, and contextual prioritization",
          "lead": "A base score describes technical severity under assumptions; organizational priority comes from exposure, threat, asset, and control context.",
          "keyIdeas": [
            "CVSS metrics should be read as a vector, not only a number",
            "Active exploitation and reachable attack paths can outweigh small score differences",
            "Environmental context and compensating controls should be explicit"
          ],
          "content": "CVSS version 3.1 base metrics describe exploitability and impact. Attack Vector ranges from network through adjacent, local, and physical. Attack Complexity captures conditions beyond the attacker's control.\n\n## Privileges Required and User\n\nInteraction describe prerequisites. Scope asks whether impact crosses a security authority. Confidentiality, Integrity, and Availability describe technical impact. The vector communicates why the score exists; two findings with the same number may require very different defenses. Temporal and environmental information changes priority. Exploit-code maturity, remediation level, and report confidence can affect urgency. Asset importance, modified impact, reachable paths, data sensitivity, and control strength matter in the organization's environment.\n\nCVSS version 4 introduces a revised model and supplemental concepts; analysts should identify the version before interpreting a vector rather than mixing terms or thresholds. Prioritization commonly combines technical severity with internet exposure, known exploitation, exploit reliability, ease of discovery, identity privilege, asset role, data, business consequence, and remediation cost. CISA's Known Exploited Vulnerabilities catalog is evidence of exploitation, while EPSS estimates the probability that a published vulnerability will be exploited in the near term.\n\nNeither proves that a particular asset is compromised. Threat intelligence about targeting in the organization's sector or technology stack adds relevance. Avoid a single opaque “risk score” that nobody can explain. A defensible queue might first identify active exploitation and exposed critical services, then reachable high-impact weaknesses, then aging findings and broad systemic issues. Record overrides. A medium-severity authorization flaw in a payroll workflow may deserve immediate attention; a critical laboratory service behind strong isolation may permit scheduled remediation, but isolation must be verified rather than assumed.",
          "practical": "Rank five findings twice: first by CVSS alone, then by exposure, exploitation evidence, asset value, and controls. Explain each change in order and identify the missing data that could reverse it.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "CVSS severity is an input to risk, not a complete remediation priority. Read the metric vector and scenario context."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Configuration, cloud, application, and supply-chain weaknesses",
          "lead": "Many consequential exposures are unsafe settings, excessive trust, and vulnerable dependencies rather than missing operating-system patches.",
          "keyIdeas": [
            "Configuration baselines make drift measurable",
            "SAST, DAST, SCA, IaC, secret, and container tools examine different evidence",
            "A dependency finding needs reachability and deployment context"
          ],
          "content": "Configuration assessment compares systems with an approved baseline such as a vendor guide, CIS Benchmark, internal hardening standard, or policy-as-code rule. Common weaknesses include default credentials, unnecessary services, permissive file or object access, insecure protocols, weak logging, exposed management interfaces, excessive cloud roles, and unrestricted network paths. A deviation may be required for a business function, but it should be documented and protected by an alternative control.\n\nCloud misconfiguration analysis includes public storage, broad identity policies, unused access keys, cross-account trust, open security groups, disabled audit logs, unencrypted data, and unmanaged snapshots. The effective permission may arise from several policy layers, resource policies, groups, and organization controls. Test what an identity can actually reach. Infrastructure-as-code scanning shifts discovery before deployment, while cloud security posture tools observe deployed state; both are necessary because manual drift and runtime changes occur.\n\nApplication assessment uses complementary techniques. Static application security testing inspects source or compiled code without running it. Dynamic testing sends requests to a running application. Interactive testing combines runtime and code context. Software-composition analysis identifies open-source dependencies and licenses. Secret scanning looks for credentials in source and history. Fuzzing supplies varied input to discover unexpected behavior. Each tool has language, framework, build, and authentication limitations.\n\nA vulnerable dependency can exist in source, a lockfile, build cache, container layer, deployed artifact, or running process. A software bill of materials improves traceability, but names and versions still require validation. Determine whether the vulnerable function is reachable and whether surrounding controls reduce exploitability. Supply-chain risk also includes compromised build systems, malicious packages, dependency confusion, stolen signing keys, and untrusted updates.\n\nProtect provenance, isolate build credentials, pin dependencies thoughtfully, verify signatures, and monitor the pipeline itself.",
          "practical": "Choose one application and trace a component from developer declaration through build, registry, deployment, and runtime. Identify where each security tool observes it and where a blind spot remains.",
          "tables": [
            {
              "title": "Application assessment tools",
              "headers": [
                "Method",
                "Evidence",
                "Typical strength"
              ],
              "rows": [
                [
                  "SAST",
                  "Source or compiled code",
                  "Finds code paths before deployment"
                ],
                [
                  "DAST",
                  "Running application responses",
                  "Finds exploitable behavior from outside"
                ],
                [
                  "SCA",
                  "Dependency manifests and artifacts",
                  "Maps known component vulnerabilities"
                ],
                [
                  "IaC scan",
                  "Deployment definitions",
                  "Prevents cloud configuration errors"
                ],
                [
                  "Secret scan",
                  "Text and repository history",
                  "Finds exposed credentials"
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
          "title": "Remediation engineering and compensating controls",
          "lead": "The best fix removes the underlying weakness without introducing unacceptable operational risk.",
          "keyIdeas": [
            "Patching, configuration, architectural change, and removal address different root causes",
            "Compensating controls reduce risk but require coverage and monitoring",
            "Change planning includes testing, rollback, communication, and dependency analysis"
          ],
          "content": "Remediation may update software, change configuration, remove an unnecessary service, rotate a credential, reduce permission, modify code, segment a network, replace an unsupported product, or redesign a workflow. Select the action that addresses root cause. Repeatedly blocking new indicators does not remediate a vulnerable internet service; resetting a password does not invalidate every stolen session; patching one container does not change an image that will redeploy the old package.\n\nBefore change, identify affected versions and instances, dependencies, maintenance constraints, required backups, test criteria, rollback, and communication. Test representative workloads rather than only whether the host boots. Clustered and redundant services may support phased rollout. Emergency remediation accepts more change risk because threat risk is higher, but it still needs approval and observable success criteria. When a direct fix cannot be applied, compensating controls may include isolation, access restriction, web-application firewall rules, intrusion-prevention signatures, feature disablement, application allowlisting, enhanced monitoring, virtual patching, or removal from the internet.\n\nState exactly which attack path the control interrupts. A firewall rule is ineffective if another interface remains reachable; a signature may cover one exploit encoding; monitoring detects but does not prevent. Assign an owner, validate coverage, document residual risk, and set an expiry. Unsupported and end-of-life technology requires a roadmap. Isolation can buy time but cannot create vendor fixes. Track replacement dependencies and use procurement standards to prevent recurrence.\n\nFor code weaknesses, remediation should add regression tests and secure coding guidance. For cloud permissions, reduce grants at the source and search for equivalent policies across accounts. Sustainable remediation changes the system that created the defect, not only the current instance.",
          "practical": "Write a remediation plan with technical change, affected population, owner, deadline, test, rollback, compensating control, residual risk, validation source, and method for preventing recurrence.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Remediate and validate a deliberately vulnerable service.",
            "environment": "A disposable VM or container, scanner, and service test.",
            "steps": [
              "Record the original finding and prove the affected condition safely.",
              "Choose and document a fix with rollback criteria.",
              "Apply the change while capturing package or configuration evidence.",
              "Repeat the original check and test that the intended service still works.",
              "Search the golden image or deployment definition for the same weakness."
            ],
            "expected": "The weakness is absent and the business function remains available.",
            "verification": "Both a targeted test and an independent rescan confirm closure."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Validation, exceptions, SLAs, and program reporting",
          "lead": "Closure is a supported conclusion, not a ticket status selected after someone says the patch was installed.",
          "keyIdeas": [
            "Rescanning is strongest when paired with implementation evidence",
            "Risk acceptance is scoped, approved, monitored, and temporary",
            "Remediation targets should reflect risk while remaining operationally credible"
          ],
          "content": "Validation repeats the relevant detection from an appropriate vantage point and confirms that the affected instances are covered. A package update record may prove installation, while a scanner verifies that the exposed condition changed. For a code fix, use a regression test and a deployment identifier. For access control, test both denied unauthorized access and permitted legitimate access. Marking “not found” after an asset disappears from inventory is not remediation; determine whether it was decommissioned, offline, renamed, or missed.\n\nService-level targets commonly define time to remediate by risk tier, exposure, or asset class. The clock may begin at discovery, confirmation, or public disclosure; define it consistently. Pause conditions should be rare and visible. Aging buckets reveal backlog, but median age can hide a long tail. Track reopened and recurring findings to expose weak fixes. When a deadline is breached, escalation goes to someone able to change priority or formally accept the risk.\n\nAn exception records why standard remediation is infeasible, exact affected assets and vulnerability, business justification, existing and proposed controls, residual risk, accountable owner, approver, review date, and expiry. Broad permanent exceptions become unmonitored policy changes. Revalidate compensating controls and threat conditions at review. If scope expands or exploitation begins, reconsider immediately. Operational reporting serves different audiences. Engineers need exact evidence and instructions.\n\nService owners need affected population, deadline, outage considerations, and support.\n\nLeadership needs exposure trend, overdue critical risk, business concentration, exception burden, and decisions required. Explain improvements and deteriorations caused by better discovery. Never present “zero vulnerabilities” without coverage, authentication, and recency because an empty result can mean a blind scanner.",
          "practical": "Design a closure checklist that requires independent evidence, coverage confirmation, functional testing, and update of the originating image or configuration. Add an exception template with mandatory expiry.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "A risk exception transfers no responsibility to the scanner team; an authorized business owner accepts the documented residual risk."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Designing assessment coverage across a changing environment",
          "lead": "A defensible assessment program can explain which assets, interfaces, credentials, and time periods were examined and which were not.",
          "keyIdeas": [
            "Coverage is measured against an inventory and expected vantage points",
            "Authenticated, unauthenticated, agent, application, and cloud assessments answer different questions",
            "Scanner health and unreachable targets belong in the result"
          ],
          "content": "Coverage begins with populations rather than scanner jobs. Define corporate endpoints, servers, appliances, internet services, cloud accounts and regions, containers, applications, remote workers, development environments, and sensitive or fragile technology. Identify an authoritative source and an independent discovery source for each. Reconcile address changes, autoscaling resources, renamed hosts, and resources that exist only briefly. An external unauthenticated scan shows exposure from one outside vantage point.\n\nAn internal scan sees reachable services from its segment. Authenticated assessment inspects packages and configuration with a controlled account. Agents can assess mobile or intermittently connected systems. Application testing uses routes, identities, and business workflows. Cloud posture tools read control-plane state. Image and dependency scanners inspect artifacts before deployment. No single method replaces the others. For each scan, preserve target definition, exclusions, scanner location, policy, plugin or feed version, start and end time, responding targets, authentication success, errors, and throttling.\n\nA completed job with failed credentials is not authenticated coverage. A clean internet scan from one address does not prove every content-delivery, regional, IPv6, or acquired domain path was tested. Safety affects design. Rate limits, safe checks, maintenance windows, owner contacts, and stop procedures protect fragile equipment and production applications. Tests that create accounts, upload files, send mail, or modify data require explicit approval and cleanup.\n\nCoordinate with monitoring teams so the scan is distinguishable from an intrusion without hiding how controls react. Report coverage alongside findings. “Ninety-eight percent of inventoried servers responded, eighty-nine percent authenticated, seven legacy appliances were excluded, and two cloud accounts lacked the required reader role” allows a reader to judge confidence. Trends in missing coverage are remediation work of their own.",
          "practical": "Create a coverage matrix with asset population, authoritative count, discovery source, method, vantage point, credential success, frequency, owner, and documented gap.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Validating application vulnerabilities safely",
          "lead": "Application validation proves a security boundary failed with the least harmful request that can answer the question.",
          "keyIdeas": [
            "Authorization and test scope come before proof",
            "Use controlled accounts and records whenever possible",
            "Preserve raw requests, responses, application version, and cleanup"
          ],
          "content": "A scanner may flag an application from a response header, reflected input, error pattern, dependency version, or active probe. Read the evidence and identify the exact claim. Cross-site scripting, SQL injection, path traversal, server-side request forgery, authentication weakness, and broken authorization each require different validation. Avoid expanding a minimal proof into data access or system control that the authorization did not permit.\n\nFor authorization testing, create two controlled users and two controlled objects.\n\nConfirm the intended owner can act, then change only the object reference while using the other identity. A denial proves the expected boundary for that path; unexpected success supports a finding without touching real user data. For input handling, use harmless markers and observe where data is interpreted. Do not retrieve operating-system secrets or run commands merely to make a screenshot dramatic.\n\nRecord endpoint, method, headers relevant to identity and content type, body, account role, object ownership, time, response, and backend or application log reference.\n\nRedact reusable secrets in the report while preserving them under evidence controls if required. Browser tools may automatically add cookies, origins, and redirects, so export the request rather than transcribing it from memory. Environment matters. A development instance may run different code, features, identity, data, or gateway rules from production. A web application firewall may mask rather than remove the weakness.\n\nA dependency can be present but its vulnerable function unreachable.\n\nState what was demonstrated and where. Remediation should correct the design: server-side authorization on every object access, parameterized queries, safe output encoding for the correct context, allowlisted server fetch destinations, secure upload storage, or supported dependencies. Add a regression test and validate after deployment with the same minimal request. Check sibling endpoints and shared components to address systemic cause.",
          "practical": "Write a test plan for an object-level authorization report using only two lab users and two lab records. Define the expected matrix and stop condition before making requests.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Cloud, container, and image vulnerability workflows",
          "lead": "Cloud vulnerability work links configuration, workload artifacts, runtime exposure, identity, and the deployment source that can reintroduce a weakness.",
          "keyIdeas": [
            "An image finding is not automatically reachable in a running workload",
            "A fixed container instance is temporary if the deployment image remains vulnerable",
            "Cloud permissions and network exposure can dominate package severity"
          ],
          "content": "A container image contains ordered layers, operating-system packages, application dependencies, configuration, and metadata. A scanner may find a component in an unused build layer, installed package, or application bundle. Determine the final image digest, deployed workloads, loaded or reachable function, runtime user, capabilities, mounted secrets, network paths, and orchestrator policy. Tag names can move; use immutable digests for evidence. Remediation usually rebuilds from a supported base, updates manifests or lockfiles, removes unnecessary tools and secrets, produces a new signed artifact, and deploys it through the normal pipeline.\n\nPatching one running container is lost on replacement and weakens reproducibility. After rollout, confirm that every replica uses the intended digest and that old artifacts are restricted or removed according to policy. Cloud configuration findings include public storage, broad roles, unused keys, open security groups, cross-account trust, disabled logs, snapshots, and unprotected secrets. Effective access may come from identity policy, resource policy, organization policy, network path, and service-specific grants.\n\nA finding that quotes one statement without calculating the combined decision may be incomplete. Prioritization asks whether the resource is internet reachable, holds sensitive data, runs with privilege, can reach control-plane credentials, or belongs to a critical service. Temporary environments can still contain production copies and long-lived tokens. Serverless functions and managed services reduce host responsibility but increase dependence on identities, configuration, provider logs, and deployment packages.\n\nVerification examines the source of truth and deployed state. Inspect infrastructure-as-code, admission policy, image digest, effective permission, runtime inventory, and logs. Add a preventive pipeline or policy test so the insecure state cannot be redeployed.",
          "practical": "Trace one vulnerable library from source manifest to build, registry digest, deployment, running workload, network path, and function call. Mark where each scanner can and cannot see it.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Running a remediation campaign across many owners",
          "lead": "A campaign turns a widespread weakness into a controlled sequence of inventory, priority, communication, change, exception, and validation.",
          "keyIdeas": [
            "Group by root cause and remediation path, not only CVE",
            "Pilot changes on representative systems",
            "Track coverage, failures, exceptions, and recurrence"
          ],
          "content": "Widespread findings arise from shared base images, centrally packaged software, browser extensions, firmware, configuration standards, cloud policies, or libraries. Begin by defining the affected condition and authoritative fix. Build the population from scanner results and independent inventory, then separate confirmed affected, potentially affected, not affected, unreachable, and unknown. Avoid opening thousands of disconnected tickets before understanding whether one platform team can fix the source.\n\nPrioritize exposed critical services, known exploitation, privileged systems, and high-consequence business functions.\n\nIdentify technical owner, business owner, maintenance path, dependency, and recovery requirement. A pilot group should represent operating systems, locations, hardware, application versions, and business workloads. Define success in security and functional terms and prepare rollback. Communications tell owners what is affected, why it matters here, exact required state, deadline, test, support path, and interim control. They should not rely on a long vulnerability description copied from a scanner.\n\nChange windows, reboots, user prompts, network capacity, and vendor support can determine sequencing. Monitor deployment failures and telemetry because an unsuccessful update command may still be marked complete by a weak orchestration system. Exceptions are narrow, approved, controlled, and temporary. Record assets, reason, alternative control, residual risk, owner, approver, review, and expiry. If a device cannot be supported, the durable action may be isolation and replacement rather than an endless patch exception.\n\nValidate with implementation evidence and an independent assessment. Measure percent of authoritative population fixed, authentication and reachability, time by risk tier, business failures, exception age, and recurrence. Update golden images, build pipelines, procurement, and baseline policy. A campaign that fixes every current instance but not the source is waiting to repeat.",
          "practical": "Design a campaign dashboard that distinguishes fixed, failed, offline, excluded, accepted, and unknown assets. Make every percentage use the same authoritative denominator.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Incident Response Management",
      "weight": "20% of exam",
      "intro": "Incident response is disciplined decision-making under uncertainty. This part covers preparation, analysis, containment, evidence, recovery, and improvement as one connected process.",
      "topics": [
        {
          "title": "Adversary methods and analytic frameworks",
          "lead": "Frameworks organize evidence and communication, but the incident must be reconstructed from what actually happened.",
          "keyIdeas": [
            "ATT&CK describes tactics and techniques; the Kill Chain emphasizes broad stages",
            "The Diamond Model relates adversary, capability, infrastructure, and victim",
            "Framework mapping should follow evidence rather than fill missing steps"
          ],
          "content": "Analysts use frameworks to organize complex behavior and communicate consistently. MITRE ATT&CK describes tactics;the adversary's immediate goals;and techniques or sub-techniques used to reach them. A technique can occur at several points and does not guarantee a particular tool. ATT&CK does not prescribe incident severity, prove attribution, or require every tactic to appear.\n\n## The Cyber Kill\n\nChain describes reconnaissance, weaponization, delivery, exploitation, installation, command and control, and actions on objectives. It highlights opportunities to interrupt an operation, but modern identity and cloud incidents may not resemble a linear malware intrusion.\n\n## The Diamond\n\nModel connects adversary, capability, infrastructure, and victim and encourages analysts to pivot among their relationships.\n\nThe Pyramid of Pain illustrates why blocking hashes is easier for an adversary to evade than detecting tools, techniques, or operational habits. An attack timeline may include reconnaissance, initial access, execution, persistence, privilege escalation, defense evasion, credential access, discovery, lateral movement, collection, command and control, exfiltration, and impact. These are analytic categories, not assumptions. For example, a stolen valid cloud token can provide initial access and privilege without malware.\n\nA destructive insider may already possess authorization. A supply-chain compromise can arrive through a trusted update. Use frameworks after establishing observations. Cite the records that support each mapping and maintain alternate explanations. Frameworks are most valuable when they reveal detection and control opportunities: what evidence should have existed, where visibility failed, and which preventive or detective control could interrupt similar behavior.",
          "practical": "Take a short incident narrative and map only supported behaviors to two frameworks. Then identify which useful questions each framework prompts and which facts it cannot establish.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "Do not infer an entire attack sequence from one technique. Select the framework or response action that matches the evidence in the scenario."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Preparation: plans, roles, playbooks, and exercises",
          "lead": "The quality of an incident response is largely determined before the incident begins.",
          "keyIdeas": [
            "Plans define authority and coordination; playbooks guide repeatable incident types",
            "Contact, evidence, access, tooling, and communications must work during disruption",
            "Exercises validate assumptions and produce owned improvements"
          ],
          "content": "An incident response plan defines purpose, scope, incident criteria, roles, authority, escalation, communications, evidence handling, external coordination, and the relationship with continuity and disaster recovery. Policies establish mandatory expectations. Procedures describe repeatable actions. Playbooks tailor those actions to ransomware, account compromise, data exposure, denial of service, lost devices, malicious insiders, or cloud credential theft. A checklist supports memory; it does not replace judgment.\n\nRoles may include incident commander, technical lead, scribe, communications lead, system owner, legal counsel, privacy, human resources, public relations, physical security, and executive decision makers.\n\nSeparate command from detailed investigation so someone maintains priorities, decisions, and rhythm. Define who may isolate a host, disable an executive account, engage an outside firm, notify law enforcement, make a public statement, or take a safety-critical service offline. Preparation includes out-of-band communications, current contact lists, secure evidence storage, clean administrative devices, emergency accounts, tool licensing, collection scripts, forensic images, network diagrams, asset and data inventories, logging, backups, and vendor access.\n\nAssume the primary identity, email, or endpoint system may be impaired. Service providers and insurers can impose notification and evidence requirements; understand them before a crisis. Tabletop exercises walk decision makers through a scenario. Functional exercises test specific procedures, while simulations or purple-team work generate technical evidence. State objectives and boundaries, observe decisions rather than coaching participants to an ideal answer, and create improvement items with owners and deadlines.\n\nRetest material changes. An exercise that produces a polished report but no corrected weakness is unfinished preparation.",
          "practical": "Run a 45-minute tabletop around one realistic service. Inject an ambiguous alert, expanding scope, a business interruption, and a communication decision. Record decisions, missing information, and assigned improvements.",
          "tables": [
            {
              "title": "Response documents",
              "headers": [
                "Artifact",
                "Purpose",
                "Example"
              ],
              "rows": [
                [
                  "Policy",
                  "Sets mandatory expectations",
                  "Report suspected incidents immediately"
                ],
                [
                  "Plan",
                  "Defines organization and authority",
                  "Roles, severity, escalation"
                ],
                [
                  "Playbook",
                  "Guides one incident type",
                  "Business email compromise"
                ],
                [
                  "Procedure",
                  "Explains a specific task",
                  "Acquire a disk image"
                ],
                [
                  "Checklist",
                  "Prompts critical steps",
                  "Containment verification"
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
          "title": "Intake, triage, scoping, and severity",
          "lead": "Triage asks whether the signal is credible, how urgent it is, and what must happen next; scoping is repeated throughout the incident.",
          "keyIdeas": [
            "Validate alert logic and data before expanding",
            "Scope across identities, hosts, resources, time, and related indicators",
            "Severity considers business consequence, spread, control, and uncertainty"
          ],
          "content": "Incident intake may come from a detection, user report, partner, vendor, law enforcement, threat intelligence, or vulnerability disclosure. Record the source, time, original content, affected entity, actions already taken, and contact. Preserve the raw alert because later enrichment and case fields can change. Check sensor health, parser correctness, and whether the triggering behavior actually occurred. Triage develops an initial hypothesis and seeks decisive context.\n\nIdentify the account, host, application, data, source, and time.\n\nDetermine asset criticality and whether the activity is expected through change, travel, testing, or automation records. Search for immediate signs of successful access, persistence, privilege, lateral movement, collection, exfiltration, or impact. Escalate when credible risk exceeds the current team's authority or time budget; “not yet proven” is not the same as benign. Scoping works in both directions. Expand from an indicator to all entities that touched it, and from an affected entity to all related behavior.\n\nSearch hashes, domains, certificate or tool characteristics, usernames, sessions, source addresses, processes, email recipients, cloud resources, and authentication factors. Extend the time range before the first known event because initial access or reconnaissance may precede the alert. Deduplicate shared infrastructure and validate each match. Severity models vary, but generally combine business impact, data sensitivity, privilege, asset criticality, spread, persistence, safety, legal or regulatory consequence, external exposure, and containment state.\n\nConfidence and severity are separate; a low-confidence possibility of catastrophic impact may still justify a reversible protective action. Update severity as facts change and record why. Define handoff criteria and response targets so a case cannot stall between teams.",
          "practical": "Produce a one-page triage record: summary, hypothesis, known facts, disputed facts, scope, impact, severity, confidence, evidence gaps, containment recommendation, and next three queries.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Triage a mixed set of alerts into one incident or separate benign cases.",
            "environment": "Sample identity, endpoint, firewall, and email alerts.",
            "steps": [
              "Validate each alert against its raw source.",
              "Create an entity and time matrix.",
              "Group related records and explain the linkage.",
              "Assign severity and confidence, then specify the next action and owner."
            ],
            "expected": "A justified disposition for every alert and a scoped incident for connected activity.",
            "verification": "No conclusion relies only on alert title or vendor severity."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Containment strategy and decision-making",
          "lead": "Containment limits harm while preserving enough service and evidence to complete the response.",
          "keyIdeas": [
            "Short-term containment buys time; long-term containment supports safe operation until eradication",
            "Account, endpoint, network, application, and cloud controls should address the actual attack path",
            "Every containment action needs verification and a rollback plan"
          ],
          "content": "Containment choices include isolating endpoints, disabling identities, revoking tokens, blocking infrastructure, removing public access, changing routes or firewall policy, pausing a workload, disabling a feature, taking a service offline, or separating a network segment. Choose controls based on the mechanism. Changing a password does not end a stolen token session. Blocking one address does not stop an adversary using a large proxy network.\n\nIsolating one endpoint does not contain compromised administrator credentials.\n\nShort-term containment is fast and may be disruptive. Long-term containment provides a controlled state while teams patch, rebuild, or migrate. In ransomware, disconnecting affected segments and protecting backups may outweigh normal service. In a safety-critical environment, abrupt isolation can cause physical harm, so responders coordinate with operational owners and may instead restrict external paths or monitor a controlled process. Adversaries may notice containment and accelerate.\n\nQuietly collecting evidence can reveal scope, but delaying action increases exposure. The incident commander balances evidence value, business impact, attacker objective, confidence, and reversibility. Legal or law-enforcement interests do not automatically override safety and risk. Record alternatives considered and the authority for consequential actions. Verify containment from independent evidence. Confirm the token is invalid, the host no longer communicates, the policy applies to every interface and region, or the mailbox rule is gone.\n\nMonitor for alternate accounts, persistence, new infrastructure, and degraded logging. Preserve relevant state before destructive actions when feasible. Communicate what changed, what users will observe, duration, and rollback conditions without disclosing sensitive details more broadly than needed.",
          "practical": "For a stolen privileged cloud token, compare password reset, token revocation, key disablement, role removal, session policy, source blocking, and account disablement. State which attack path each does and does not contain.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "Select containment that stops the demonstrated behavior and preserves critical evidence; then verify it independently."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Forensic evidence and chain of custody",
          "lead": "Forensics preserves and analyzes evidence in a repeatable way while respecting volatility, authorization, privacy, and legal purpose.",
          "keyIdeas": [
            "Order of volatility guides collection when evidence may disappear",
            "Chain of custody records control and transfer; hashing demonstrates integrity",
            "A forensic copy and a working copy serve different purposes"
          ],
          "content": "Evidence can include memory, running processes, network connections, temporary files, disks, cloud audit records, SaaS exports, packets, mobile devices, identity logs, screenshots, physical devices, and witness reports. Volatile data disappears first, but collection order also depends on threat and feasibility. Capturing memory on an actively encrypting host may preserve valuable evidence while allowing further damage; isolate or power decisions require judgment and authority.\n\nChain of custody records a unique item identifier, description, source, collector, date and time, method, hash where applicable, storage, every transfer, purpose, and signatures or equivalent accountability.\n\nA cryptographic hash helps demonstrate that a file has not changed; it does not prove the source was truthful or the collection complete. Store originals read-only with access logging. Analyze verified working copies and note tool versions, settings, and commands. Disk acquisition may be physical, logical, or targeted. Physical imaging attempts to preserve addressable media including unallocated space, while logical collection gathers files exposed by the filesystem or service.\n\nFull imaging may be impossible for cloud platforms, encrypted devices, huge storage, or critical systems. Cloud and SaaS evidence often arrives through provider APIs with retention and export limits. Preserve request IDs, export parameters, provider documentation, and original metadata. Filesystem timestamps require careful interpretation. Memory analysis can reveal processes, network state, injected code, keys, and commands, but acquisition changes the system and tools can fail on unsupported versions.\n\nMaintain a contemporaneous investigation log. Observe privacy and scope: collecting a user's entire mailbox or personal device can exceed what the incident requires. Coordinate with legal and human-resources teams when appropriate and never promise courtroom admissibility merely because a checklist was followed.",
          "practical": "Create an evidence register for five artifacts. For each, specify volatility, collection method, authority, integrity check, storage, privacy concern, and the question it can answer.",
          "tables": [],
          "commands": [
            {
              "title": "Hash verification example",
              "description": "Hash both the received original and every later verified copy.",
              "code": "sha256sum evidence.E01\nsha256sum memory.raw\n# Record command, tool version, timestamp, collector, and output in the case log."
            }
          ],
          "lab": {
            "goal": "Practice a defensible evidence handoff.",
            "environment": "Two sample evidence files and a blank custody form.",
            "steps": [
              "Assign unique identifiers and describe the source without interpretation.",
              "Compute and record cryptographic hashes.",
              "Create a protected original and a verified working copy.",
              "Simulate transfer to another analyst and record custody.",
              "Recompute hashes before analysis."
            ],
            "expected": "A complete register showing unchanged evidence and accountable handling.",
            "verification": "Recorded hashes match and every possession change has a timestamp and purpose."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Eradication, recovery, and return to service",
          "lead": "Recovery succeeds when the cause and persistence are removed, trust is re-established, service is tested, and monitoring demonstrates stability.",
          "keyIdeas": [
            "Rebuild is often more trustworthy than ad hoc cleaning",
            "Credentials, keys, tokens, images, dependencies, and backups may all require remediation",
            "Business validation and security validation are both necessary"
          ],
          "content": "Eradication removes malicious artifacts, persistence, vulnerable entry points, exposed credentials, unsafe configuration, and unauthorized changes. Scope determines the plan. A single quarantined file is insufficient if an attacker held domain or cloud administration. Establish a trusted root: clean deployment images, protected identity systems, known-good configuration, verified backups, and controlled administrator devices. Rotate secrets in an order that prevents a still-compromised system from stealing the new values.\n\nRebuilding from a trusted image is generally more reliable than attempting to remove every artifact, particularly after privileged compromise. Some industrial, medical, or bespoke systems cannot be rebuilt quickly; use vendor guidance, isolation, targeted restoration, and enhanced monitoring. Update golden images, templates, and pipeline definitions before mass redeployment or the weakness will return. Backups must be available, intact, appropriately isolated, and from a point before compromise.\n\nRestoration can reintroduce malware or vulnerable configuration. Scan and test copies in a controlled environment, review the timeline to choose a recovery point, and protect backup administration. Recovery priorities follow business impact, dependency order, safety, and recovery objectives. Identity, network, name resolution, and logging services may need to precede applications. Return-to-service criteria include the fixed entry point, removed persistence, rotated credentials and tokens, applied controls, functioning security sensors, business-owner acceptance, successful functional tests, and a period of heightened monitoring.\n\nCompare new activity with known compromise behaviors. Keep a rollback or re-isolation path. Close the incident only after remaining risk, outstanding tasks, ownership, and monitoring duration are recorded.",
          "practical": "Write a recovery runbook for a three-tier application. Order identity, network, database, application, logging, and user access; define security and business tests at every gate.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "Restoring service before removing the original access path creates reinfection. Update the source image or template, not only the affected instance."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Special incident patterns: ransomware, BEC, cloud, and data exposure",
          "lead": "Different incident types share a lifecycle but demand different evidence, containment, and business decisions.",
          "keyIdeas": [
            "Ransomware is an enterprise identity and recovery problem, not only encrypted endpoints",
            "Business email compromise centers on identity, mailbox actions, and financial process",
            "Data exposure requires evidence about access and content, not merely public configuration"
          ],
          "content": "Ransomware response prioritizes safety, spread prevention, identity control, backup protection, and preservation of evidence. Identify encryption, data theft, and destructive activity separately. Isolate affected segments, protect backup and virtualization control planes, disable compromised administrative paths, and preserve ransom notes, binaries, memory where safe, network records, and identity activity. Payment decisions involve executives, legal counsel, insurers, law enforcement, sanctions concerns, and uncertain recovery; the analyst provides facts rather than promises.\n\nBusiness email compromise often uses valid credentials and ordinary mailbox features. Investigate sign-ins, factors, application consent, forwarding and inbox rules, delegate access, search activity, sent and deleted messages, and financial workflow. Revoke sessions, reset credentials through a clean channel, remove persistence, and confirm recovery methods. If payment instructions changed, contact the financial institution through a verified number immediately and preserve the fraudulent messages.\n\nNotify affected correspondents carefully to prevent secondary fraud.\n\nCloud incidents may involve leaked keys, overprivileged roles, public resources, malicious images, or compromised automation. Preserve control-plane logs and configuration snapshots; disable credentials and narrow trust without deleting the only workload evidence. Search every account, region, and replicated service. A key in a repository requires history removal and rotation of every derived secret, not simply deletion from the latest commit.\n\nA publicly accessible storage object is an exposure, but breach conclusions depend on whether unauthorized access occurred and what data was present.\n\nReview access logs, CDN or proxy records, object versions, sharing links, indexes, search-engine caches, and retention gaps. Data classification and jurisdiction determine notification analysis. State clearly when logs cannot prove or disprove access. Similar discipline applies to denial-of-service, insider, lost-device, and web-application incidents: match evidence and containment to the actual mechanism.",
          "practical": "Build a comparison matrix for four incident types covering first evidence, first containment, high-value records, business partner, common scoping mistake, and recovery test.",
          "tables": [
            {
              "title": "Incident pattern comparison",
              "headers": [
                "Pattern",
                "Immediate focus",
                "Frequently missed scope"
              ],
              "rows": [
                [
                  "Ransomware",
                  "Spread, privileged identity, backups",
                  "Hypervisors and backup consoles"
                ],
                [
                  "BEC",
                  "Sessions, rules, finance process",
                  "OAuth grants and correspondents"
                ],
                [
                  "Cloud key leak",
                  "Disable key and trace assumed roles",
                  "Other regions and accounts"
                ],
                [
                  "Data exposure",
                  "Stop access and preserve logs",
                  "Cached copies and historical permissions"
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
          "title": "Post-incident analysis and control improvement",
          "lead": "A blameless review explains how the system allowed the outcome and converts findings into verified changes.",
          "keyIdeas": [
            "Timeline, root cause, contributing conditions, and impact are distinct",
            "Corrective actions need owners, deadlines, evidence, and retesting",
            "Detection and response metrics should illuminate bottlenecks rather than assign blame"
          ],
          "content": "A post-incident review occurs after urgent recovery but while evidence and decisions are fresh. Participants include responders, service owners, operators, and relevant business partners. Establish psychological safety: the purpose is to understand conditions and improve the system, not to punish the last person who touched it. Deliberate malicious behavior and policy accountability can be handled through appropriate processes without corrupting technical learning.\n\nBuild a factual timeline with event time, source, action, analyst interpretation, and confidence.\n\nDistinguish root cause from initial access, detection trigger, and contributing factors. A phishing message may be initial access; absent phishing-resistant MFA, excessive privilege, weak egress control, short log retention, and an unclear escalation path may explain impact. “Human error” ends inquiry too early. Ask why the action was possible, attractive, or hard to detect. Measure detection and response intervals from clearly defined points: compromise, first observable evidence, alert, analyst review, escalation, containment, eradication, and recovery.\n\nMean time can be distorted by a few long cases; show distributions or percentiles where possible. Do not reward rapid closure if cases are mislabeled, or low incident count if telemetry is missing. Combine speed with precision, recurrence, coverage, and business impact. Corrective actions may change architecture, authentication, logging, detection, training, vendor contracts, recovery, or playbooks. Each action needs an accountable owner, due date, priority, success evidence, and tracking forum.\n\nConvert one-time discoveries into durable controls: a new analytic with test data, an updated base image, a tabletop scenario, or a protected backup design. Revisit the review later to confirm that promised changes work.",
          "practical": "Rewrite three weak findings;“user error,” “SIEM failed,” and “patching was late”;as system-level contributing conditions with a measurable corrective action and validation test.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Conduct a miniature lessons-learned review.",
            "environment": "A completed lab incident timeline and response notes.",
            "steps": [
              "Separate observations, decisions, and outcomes.",
              "Identify initial access, root cause, and at least three contributing conditions.",
              "Calculate detection and response intervals using defined timestamps.",
              "Assign three corrective actions with owner, due date, and success evidence."
            ],
            "expected": "A blameless review that can drive operational change.",
            "verification": "Every action is specific enough for someone independent to verify completion."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Building a defensible incident timeline",
          "lead": "A useful timeline joins records from systems with different clocks and meanings while keeping observation separate from interpretation.",
          "keyIdeas": [
            "Normalize time without discarding the original value",
            "Use stable entity and session identifiers where possible",
            "Every material entry cites a source and confidence"
          ],
          "content": "Start with a case time standard, commonly UTC, and preserve original timezone, clock, and timestamp precision. Event time is when a source says an action occurred. Ingestion time is when a collector received it. File timestamps have specific meanings and can change through copying or extraction. Cloud records can arrive late. Document known clock offset and do not force events into an attractive sequence when uncertainty overlaps.\n\nA timeline entry includes normalized time, original time if useful, source, entity, event, record identifier, analyst interpretation, and confidence. Stable user, device, resource, process, request, flow, logon, and session IDs support stronger joins than a shared address. NAT, proxies, dynamic addressing, account reuse, and load balancers require translation or intermediary records. Preserve the query or filter used to find each entry.\n\nWork from anchors. A user report, detection, known file creation, authentication, or cloud change gives a starting point.\n\nExpand before the first known event and after the apparent end. Build separate tracks for identity, endpoint, network, cloud, application, and defensive actions, then interleave them. Track gaps explicitly. An absent event can mean the behavior did not occur, logging was disabled, a parser failed, retention expired, or the source was outside coverage. Observation and inference should be readable. “Identity record X reports successful MFA at 14:03” is observation.\n\n“The employee approved the prompt” is an inference until confirmed. “The adversary entered at 14:03” is a broader conclusion that might be wrong if a token was already stolen. Alternate hypotheses help prevent one early assumption from shaping every later query. The timeline is revised as evidence improves. Preserve corrections and rationale instead of silently rewriting a case. A concise final timeline includes events that change understanding, scope, impact, or response; supporting raw events remain in the evidence set.",
          "practical": "Create five timeline columns for source time, normalized time, observed event, inference, and evidence ID. Ask another analyst to challenge every inference unsupported by the cited record.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Identity compromise response workflow",
          "lead": "Identity incidents require session, factor, token, privilege, application, and resource investigation; a password reset covers only one part of that chain.",
          "keyIdeas": [
            "Scope authentication and post-authentication activity",
            "Revoke sessions and delegated access as well as credentials",
            "Use a known-clean channel for recovery"
          ],
          "content": "Begin by protecting the reporting user and preserving identity records. Determine account type, privilege, normal devices and locations, authentication methods, recovery channels, applications, and data. Validate the suspicious sign-in: source, autonomous system, client, device, result, conditional policy, factor, token type, and session. Corporate egress and mobile networks can make location misleading. Search before and after the alert for failures, successful sign-ins, factor registration, recovery changes, new devices, application consent, refresh tokens, mailbox rules, forwarding, role changes, key creation, resource access, and security-control changes.\n\nA successful MFA event can be produced by prompt fatigue, adversary-in-the-middle phishing, stolen session cookies, compromised endpoints, or a legitimate user. Interview through a trusted contact without revealing more than necessary. Containment matches the path. Revoke sessions and refresh tokens, disable or restrict the account when justified, remove unauthorized factors and applications, rotate passwords and keys, and protect privileged or downstream accounts.\n\nChanging a password may not invalidate every session.\n\nSource blocking is weak against proxy infrastructure. Confirm actions from independent identity and application evidence. Recovery uses a clean device and verified identity. Restore approved factors, permissions, forwarding, and applications; re-enable only after confidence criteria are met. Search for actions the compromised identity performed in cloud, code, finance, support, and data systems. Notify parties affected by messages or transactions through verified channels.\n\nThe final scope separates account access, resource access, data effect, and fraud.\n\nCorrective actions can include phishing-resistant authentication, better factor-change alerts, shorter token lifetime for privilege, application-consent governance, device requirements, and financial verification. Avoid blaming a user for a workflow that made one mistaken approval sufficient.",
          "practical": "Build a containment matrix for password theft, stolen session cookie, malicious OAuth grant, and compromised service key. Show why the same reset action does not contain all four.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Ransomware response as an enterprise workflow",
          "lead": "Ransomware response protects life and essential service, limits spread, preserves recovery, and treats identity and control systems as part of the incident.",
          "keyIdeas": [
            "Encryption, data theft, and destructive administration are separate behaviors",
            "Protect backup and virtualization control planes early",
            "Recovery begins from a trusted identity and deployment foundation"
          ],
          "content": "Confirm the behavior without waiting for perfect attribution. Identify encryption, ransom note, endpoint alert, failed service, mass file rename, backup deletion, privilege change, or external claim. Activate incident command and continuity for affected services. If operational technology, healthcare, or public safety is involved, coordinate containment with safety owners. Scope identities, endpoints, servers, file shares, hypervisors, backup consoles, remote-management systems, network paths, and cloud resources.\n\nSearch for initial access, credential theft, discovery, lateral movement, security-tool tampering, data staging, exfiltration, and encryption.\n\nPreserve representative ransom notes and binaries, identity and EDR records, network and cloud logs, and memory where feasible and valuable. Do not execute attacker tools to “test” them. Containment may isolate segments, disable compromised administrative identities, restrict remote tools, block confirmed infrastructure, protect backup networks, and stop affected shares. Disconnect carefully; abrupt power loss can destroy volatile evidence or harm fragile systems, while leaving an encryptor running causes more damage.\n\nThe incident commander balances those risks. Eradication removes persistence and exploited access, rotates secrets in an order that protects the new values, rebuilds from trusted images, and corrects vulnerable remote access or configuration. Recovery verifies backups from before compromise, scans and tests them in a controlled environment, restores dependencies in business order, and reintroduces service through monitored gates. Replication can copy encrypted data, so it is not an independent backup.\n\nAnalysts provide facts for legal, insurer, law-enforcement, and executive decisions about notification and any attacker communication. They do not promise that payment will restore data or suppress disclosure. Lessons should improve privileged access, segmentation, protected backups, egress visibility, detection, patching, vendor pathways, and exercises.",
          "practical": "Write the first-hour checklist for a ransomware event, including authority, safety, identity control, network containment, backup protection, evidence, continuity, communication, and verification.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Cloud control-plane incident response",
          "lead": "A cloud incident can change identity, policy, logging, workloads, and data across accounts and regions faster than a host-centered playbook expects.",
          "keyIdeas": [
            "Preserve audit and configuration before deleting resources",
            "Trace temporary credentials to their issuance chain",
            "Search every relevant account, subscription, project, and region"
          ],
          "content": "Cloud response begins with organization structure and authoritative inventory. Identify tenant or organization, account, subscription or project, region, resource IDs, identity provider, federation, logging destinations, security services, and deployment pipeline. Names can be reused; immutable identifiers and audit event IDs are stronger evidence. For a suspicious API call, inspect actor, assumed role or service principal, credential type, source, user agent, request parameters, resource, result, and correlation.\n\nTrace temporary credentials back to the login, workload, role assumption, or token exchange that issued them. Then search the session for enumeration, policy and key changes, secrets access, snapshots, sharing, new workloads, network changes, logging disablement, and data operations. Containment can disable a key, revoke a session, remove a role assignment, narrow a trust policy, quarantine a workload, block a network path, or place an account under organization controls.\n\nPreserve current policy, workload disk or snapshot, function package, image digest, and audit exports before deleting the only evidence. A broad account shutdown may interrupt critical service and evidence collection, so use the smallest action that controls the credible path. Cloud attackers create alternate persistence: new keys, federation providers, application credentials, deployment hooks, serverless functions, images, access policies, secrets, and scheduled jobs.\n\nSearch globally, not only in the alerted region.\n\nCheck whether automation redeploys the malicious or vulnerable state. Recovery establishes trusted administrators and devices, rotates exposed secrets, restores policy from reviewed source, rebuilds workloads from known artifacts, validates data access, and confirms logging cannot be removed by ordinary workload identities. The report states provider-log coverage and retention limits. Shared responsibility means the provider secures assigned layers while the customer still owns identity, configuration, data, and response decisions.",
          "practical": "For a leaked cloud access key, create a query and action plan from issuance through every API family used, resource touched, persistence created, containment, rotation, and verification.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Reporting and Communication",
      "weight": "17% of exam",
      "intro": "Analytic work matters only when another person can understand the evidence, decide, act, and later reconstruct why. This part treats reporting as an operational control.",
      "topics": [
        {
          "title": "Writing defensible vulnerability reports",
          "lead": "A vulnerability report connects technical evidence to affected business service, risk, accountable owner, and verifiable remediation.",
          "keyIdeas": [
            "Lead with the condition and consequence, not scanner vocabulary",
            "Scope, evidence, priority, remediation, and validation must agree",
            "Technical and executive views use the same facts at different levels"
          ],
          "content": "A useful finding title names the affected condition and system without exaggeration. The body states the observation, affected population, evidence, prerequisites, plausible impact, priority rationale, and recommended action. Cite authoritative vendor or project guidance and identify the scanner or test method. If validation was limited, say so. Avoid claiming “remote code execution was achieved” when the evidence only matched a version.\n\nScope is both a list and a method.\n\nIdentify affected assets, environments, components, versions, interfaces, owners, and discovery dates. Explain whether assessment was authenticated, where the scanner was located, and which assets were unreachable or excluded. Consolidate repeated instances for management while retaining instance-level detail for remediation. Distinguish vulnerable, potentially affected, mitigated, and not assessed. Priority explains environmental risk: exposure, exploit activity, attack prerequisites, data or service importance, privilege, controls, and potential consequence.\n\nThe recommendation should be feasible and specific;target version or configuration, responsible team, testing needs, and interim control;not “patch immediately.” Provide validation criteria using the original evidence plus an appropriate independent check. An executive summary aggregates the issues that require attention: material exposures, concentration by service, overdue risk, recurring causes, accepted exceptions, and decisions or resources needed. Avoid a wall of CVE numbers or a score without scale.\n\nEngineers receive exact hosts, paths, evidence, commands where safe, dependencies, and rollback considerations. Both audiences must see consistent counts and risk because contradictory reports erode trust.",
          "practical": "Rewrite one scanner finding into a two-layer report: a 120-word owner summary and a technical appendix containing scope, evidence, fix, interim control, and validation.",
          "tables": [
            {
              "title": "Finding structure",
              "headers": [
                "Section",
                "Question answered"
              ],
              "rows": [
                [
                  "Condition",
                  "What is wrong?"
                ],
                [
                  "Scope",
                  "Exactly what is affected and how was it found?"
                ],
                [
                  "Evidence",
                  "What supports the claim?"
                ],
                [
                  "Risk",
                  "What can happen here, and why now?"
                ],
                [
                  "Recommendation",
                  "What should change, by whom, and when?"
                ],
                [
                  "Validation",
                  "How will closure be proved?"
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
          "title": "Incident reports and evidence-based timelines",
          "lead": "The incident record must support immediate coordination, later learning, and possible legal or regulatory review without confusing fact with assumption.",
          "keyIdeas": [
            "Situation reports are time-bound operational snapshots",
            "Final reports distinguish observation, inference, impact, and decision",
            "Timelines cite sources and preserve uncertainty"
          ],
          "content": "During an active incident, a situation report answers what happened, current scope, business impact, actions completed, current containment, decisions needed, next steps, and the time of the next update. Put an “as of” timestamp on it because facts change. State what remains unknown. A regular concise rhythm prevents leaders from seeking answers through parallel, disruptive channels. The final report typically includes executive summary, detection and escalation, scope, technical narrative, timeline, evidence, impact, containment, eradication, recovery, communications, root cause and contributing conditions, lessons, and corrective actions.\n\nAppend detailed indicators and queries when appropriate. Protect sensitive personal data, exploit details, credentials, and security architecture through access control rather than weakening the authoritative record. Timeline entries include normalized time, original source time where helpful, entity, event, source artifact, interpretation, and confidence. Clock drift and delayed ingestion should be noted. “02:14:05;identity provider records successful sign-in from 198.51.100.7 using jdoe” is observation.\n\n“The attacker entered the environment” is an inference that may require device, factor, and user confirmation.\n\nIf a claim changes, preserve the correction and explain why rather than silently rewriting history. Use neutral language. Avoid unsupported attribution, intent, blame, and absolute claims such as “no data was accessed” when retention is incomplete. Prefer “available object-access logs contain no unauthorized reads; logging was not enabled for the first six hours.” Quantify impact with method and range. Record who authorized major actions, because a technically sound containment may still require business acceptance.",
          "practical": "Take ten raw events and create a sourced timeline, then write a five-sentence executive summary that contains no event IDs, tool names, or unsupported certainty.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Produce both a live situation report and a final incident report.",
            "environment": "A completed investigation case with logs and decisions.",
            "steps": [
              "Write a one-page update as of a defined time with knowns, unknowns, impact, actions, and decisions.",
              "Create a source-cited technical timeline.",
              "Explain scope and impact methods, including retention gaps.",
              "Document containment, recovery, root cause, and owned improvements."
            ],
            "expected": "Two reports that share facts but serve distinct decisions.",
            "verification": "A peer can trace every material technical statement to evidence."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Stakeholder communication during pressure",
          "lead": "Communication is part of containment: the right people need accurate, usable information through trusted channels.",
          "keyIdeas": [
            "Audience determines detail, vocabulary, cadence, and requested action",
            "Legal, privacy, human resources, public relations, vendors, and law enforcement have distinct roles",
            "Out-of-band and need-to-know communication may be necessary"
          ],
          "content": "Technical teams need indicators, affected entities, collection requests, changes, and verification steps. Service owners need user impact, downtime, dependencies, and restoration criteria. Executives need material consequence, uncertainty, options, cost or operational tradeoffs, and decisions. Legal and privacy teams need data categories, jurisdictions, contractual obligations, evidence limits, and deadlines. Public relations needs approved facts and a consistent channel; it does not independently determine the technical conclusion.\n\nEstablish a communication matrix before an incident. It should name primary and backup contacts, triggers, channel, cadence, and authority. If corporate identity or email is compromised, use a tested out-of-band system. Limit sensitive indicators and personal information to recipients who need them. At the same time, excessive secrecy can leave operators unable to contain the problem; the incident commander balances confidentiality and action.\n\nVendor, insurer, regulator, customer, and law-enforcement notifications may have contractual or legal timing and content requirements.\n\nAnalysts supply accurate technical facts and preserve evidence; qualified organizational representatives determine obligations. Do not speculate publicly about an attacker, stolen data, or recovery time. Record what was communicated, by whom, to whom, when, and from which approved version. Good updates are short and predictable. Begin with what changed since the last report. Separate confirmed facts, current assessment, unknowns, and requests.\n\nTranslate without distorting: “we observed 320 gigabytes of outbound traffic” is not automatically “320 gigabytes of customer data was stolen.” Use ranges and confidence when appropriate. If a previous statement was wrong, correct it promptly and visibly.",
          "practical": "Prepare the same incident update for a SOC peer, application owner, executive, and customer-support lead. Give each audience one explicit action and keep the factual core consistent.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "Executives need impact, status, options, and decisions;not raw registry keys. Technical teams need reproducible evidence and exact scope."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Security metrics, KPIs, KRIs, and honest measurement",
          "lead": "Metrics should improve decisions and reveal system behavior, not merely make activity look productive.",
          "keyIdeas": [
            "KPIs measure performance; KRIs indicate changing exposure or consequence",
            "Definitions, population, time window, and data quality accompany every number",
            "Speed must be balanced with accuracy, coverage, recurrence, and impact"
          ],
          "content": "A key performance indicator tracks progress toward an operational objective, such as percentage of critical vulnerabilities remediated within target or alert triage time. A key risk indicator signals exposure, such as unsupported internet-facing assets, privileged accounts without phishing-resistant authentication, or untested critical backups. Operational counts;alerts reviewed, tickets opened, scans run;describe workload but not necessarily security outcome. Detection and response metrics require defined start and stop points.\n\nMean time to detect could begin at attacker action, first observable evidence, or alert creation; those produce different values. Mean time to respond could end at first containment, complete eradication, or service restoration. Report the definition. Averages can hide a few very slow cases, so include median, percentiles, or aging distribution where useful. Detection quality includes true-positive rate, precision, false-positive burden, duplicate rate, detection coverage, and observed false negatives from exercises or incidents.\n\nVulnerability quality includes asset coverage, authenticated scanning, exposure age, deadline performance, recurrence, and exception burden. Incident quality includes containment verification, recurrence, corrective-action completion, and business interruption. Pair every metric with data limitations. Beware perverse incentives. If analysts are rewarded for closing alerts quickly, they may underinvestigate. If teams are ranked by vulnerability count, they may resist discovery. If leadership expects an always-improving risk score, uncertainty may be hidden.\n\nUse a balanced set and discuss causes. A metric is useful when it triggers a decision: staffing a queue, fixing ingestion, hardening a common image, changing a control, or accepting a documented risk. Retire measures that no longer guide action.",
          "practical": "Create a metric card containing name, decision supported, formula, population, source, refresh interval, owner, target, caveat, and behavior the metric could accidentally encourage.",
          "tables": [
            {
              "title": "Balanced operations measures",
              "headers": [
                "Area",
                "Useful measure",
                "Necessary context"
              ],
              "rows": [
                [
                  "Detection",
                  "Precision and coverage",
                  "Data sources and tested techniques"
                ],
                [
                  "Triage",
                  "Time to analyst decision",
                  "Severity and queue volume"
                ],
                [
                  "Vulnerability",
                  "Risk fixed within target",
                  "Discovery and authenticated coverage"
                ],
                [
                  "Response",
                  "Time to verified containment",
                  "Incident type and business impact"
                ],
                [
                  "Improvement",
                  "Corrective actions validated",
                  "Priority, age, and recurrence"
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
          "title": "Governance, compliance, and tabletop communication",
          "lead": "Analysts support governance by producing reliable evidence, understanding obligations, and showing whether controls work in practice.",
          "keyIdeas": [
            "Law, regulation, contract, policy, and framework are not interchangeable",
            "Control evidence must demonstrate design and operation over the required period",
            "Tabletops test decision and communication pathways as well as technical steps"
          ],
          "content": "Governance establishes decision rights, accountability, risk appetite, and oversight. Policies translate those expectations into organizational rules. Standards make requirements specific, procedures explain execution, and guidelines offer recommended practice. Frameworks such as NIST CSF help organize outcomes; control catalogs and industry standards may support assurance. A framework is not automatically a legal requirement, and a compliance result is not proof that no attack can succeed.\n\nAnalysts contribute evidence: logs, case records, vulnerability trends, access reviews, detection tests, change records, exercise results, and corrective-action validation.\n\nEvidence should match the control's wording, population, and time period. One current screenshot does not prove a control operated all year. Sampling should be documented, and exceptions should not be silently excluded. Protect collected evidence because audit packages can reveal architecture and weaknesses. Privacy and data-handling requirements affect monitoring. Collect only what serves a legitimate security purpose, restrict access, set retention, and handle cross-border or employee data through approved processes.\n\nSecurity logs can contain personal data. Analysts do not independently interpret law; they identify data, systems, geography, timing, and evidence gaps so authorized counsel and privacy officers can decide. Tabletop scenarios are an effective governance test. Include business decisions, unavailable leaders, vendor dependency, notification ambiguity, misinformation, and recovery conflict. Give participants only information that would be available at that time.\n\nObserve authority, escalation, evidence requests, and communication handoffs. The final report prioritizes improvements by risk and assigns owners. A retest verifies that revised plans, contacts, and controls actually function.",
          "practical": "Design a tabletop around a cloud data exposure. Include four timed injects, the decision each is meant to test, required stakeholders, evidence available, and one measurable success criterion.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [
            "When a scenario asks who determines notification or legal obligation, analysts provide evidence; authorized legal, privacy, and leadership roles make the organizational decision."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Capstone: from first alert to board-ready conclusion",
          "lead": "The complete analyst workflow connects telemetry, vulnerability context, incident decisions, evidence, recovery, and communication.",
          "keyIdeas": [
            "Maintain one evidence-backed hypothesis and revise it visibly",
            "Run technical and communication workstreams in parallel",
            "Finish with verified controls and owned improvements"
          ],
          "content": "Consider a realistic chain. A SIEM reports a successful remote sign-in after distributed failures. The account belongs to a developer with access to a cloud deployment pipeline. Endpoint telemetry later shows a script interpreter launched by a browser, while cloud audit logs record a new access key and object-storage enumeration. A vulnerability scanner also lists a critical weakness on the developer's workstation.\n\nThe analyst must resist collapsing these facts into one story too soon.\n\nFirst validate sources and create an entity-time matrix. Determine whether the authentication, endpoint execution, cloud action, and scanner finding refer to the same user and device. Establish which record came first and account for timezones and ingestion. The vulnerable software might explain initial access, or it may be unrelated technical debt. Preserve the endpoint, relevant tokens, cloud configuration, and audit exports.\n\nExpand scope across recipients, identities, processes, keys, roles, resources, and destinations.\n\nContain the demonstrated paths: revoke sessions and keys, isolate the endpoint if operationally safe, restrict the affected cloud role, protect the deployment pipeline, and monitor for alternatives. Verify each action. Then eradicate by rebuilding from a trusted image, fixing the entry point if established, rotating downstream secrets, reviewing code and artifacts produced by the pipeline, and correcting excessive permissions. Recovery requires functional application testing and renewed sensor health.\n\nCommunication runs throughout. The situation report states facts, unknowns, business exposure, containment, and decisions. The final analysis distinguishes the vulnerability, compromise mechanism, scope, and impact. Metrics capture meaningful intervals and coverage gaps. Corrective actions might introduce phishing-resistant authentication, pipeline signing, improved endpoint logging, stronger role boundaries, and a detection that correlates new cloud credentials with unusual resource access. The incident is complete only when those actions have owners and validation;not when the last alert is closed.",
          "practical": "Use the capstone as an open-book practicum. Produce a query plan, scope matrix, containment decision record, evidence register, recovery gates, situation report, final executive summary, and five corrective actions.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Run an end-to-end analyst capstone using synthetic data.",
            "environment": "Identity, endpoint, cloud, scanner, and network logs plus a case template.",
            "steps": [
              "Validate timestamps, parsers, entities, and sensor coverage.",
              "Build and test competing hypotheses for initial access.",
              "Scope accounts, hosts, resources, sessions, and related indicators.",
              "Select, authorize, and verify containment.",
              "Plan evidence preservation, eradication, recovery, and heightened monitoring.",
              "Deliver a technical timeline and audience-appropriate summaries."
            ],
            "expected": "A complete case package whose conclusions remain traceable to evidence.",
            "verification": "A peer reproduces the material findings and every improvement has an owner, deadline, and test."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "The technical incident record as a reproducible argument",
          "lead": "A technical report should let a qualified reader trace each important conclusion to evidence and each action to authorization.",
          "keyIdeas": [
            "Separate fact, assessment, decision, and recommendation",
            "Cite durable record identifiers and preserved queries",
            "State scope method and evidence limitations"
          ],
          "content": "A technical report begins with purpose, scope, time standard, systems and identities considered, and evidence sources. It defines the incident question and the standard used for inclusion. The executive summary can be short, but the technical narrative should explain detection, validation, attack path, affected entities, containment, eradication, recovery, and unresolved risk. Facts cite sources: event identifier, host, request, case artifact, hash, query, or configuration export.\n\nAssessments explain reasoning and confidence. Decisions name authority and tradeoff. Recommendations specify owner and verification. Mixing them creates confusion, especially when an early theory changes. Use “the process contacted” for an observed connection and “consistent with command and control” only when the supporting behavior is explained. Scope is a method, not a number alone. Describe indicator searches, entity pivots, time bounds, asset population, accounts, regions, and blind spots.\n\nIf endpoint coverage was eighty percent, say which population and date produced that denominator. If packet content was encrypted, describe the metadata available. If cloud data-plane logging was disabled, do not infer absence of access. Include a compact sourced timeline and append long indicator lists, queries, tool exports, and custody records rather than interrupting the narrative. Protect credentials, personal data, exploit details, and architecture through controlled distribution and redaction.\n\nMaintain an authoritative version and correction history. Before publication, peer review asks whether each claim is supported, alternative explanations were addressed, timestamps and identities are consistent, defensive actions are distinguishable from attacker activity, and impact language matches evidence. The most trustworthy report is not the most certain one; it is the one that makes uncertainty inspectable.",
          "practical": "Review a draft and mark every sentence F for fact, A for assessment, D for decision, or R for recommendation. Rewrite any sentence that contains more than one category.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Executive briefings and decision requests",
          "lead": "Leadership needs a truthful account of business effect, uncertainty, options, and requested decisions, not a compressed console transcript.",
          "keyIdeas": [
            "Lead with what changed and why it matters",
            "Quantify ranges and confidence with a stated method",
            "Make the requested decision, deadline, options, and tradeoffs explicit"
          ],
          "content": "An active-incident briefing opens with an as-of time, current situation, affected business services, confirmed and potential impact, containment status, major unknowns, next actions, and decisions needed. Say what changed since the prior update. Use ordinary language without deleting necessary distinctions. “A privileged account accessed the payroll export” is clearer than a list of event IDs; “the attacker stole payroll” may exceed the evidence.\n\nBusiness impact includes safety, service interruption, data, legal or contractual exposure, financial process, customers, partners, recovery effort, and reputation.\n\nQuantify carefully. Provide a range of possibly affected records and explain the source, exclusions, and confidence. Technical severity and business priority differ. Decision requests should be actionable: approve isolation of a revenue service for up to two hours; choose between a faster restore with greater reinfection risk and a slower clean rebuild; engage an external provider; notify a partner; accept a temporary control.\n\nState recommendation, alternatives, evidence, expected effect, deadline, authority, and rollback or review point.\n\nCadence reduces interference. Publish at agreed times and use an approved channel, with urgent escalation for material change. Track who received which version. If identity or email may be compromised, use tested out-of-band communications. Correct earlier statements visibly. Leadership may ask for attribution or a promise that no data left. Explain what the evidence can establish and what additional source or time is required.\n\nConfidence can be high, medium, low, or expressed in defined organizational language, but it must not be decorative. A calm boundary around unknowns helps leaders make better decisions than false reassurance.",
          "practical": "Prepare a two-minute spoken briefing and a one-page written update for the same case. Both must contain impact, confidence, containment, unknowns, next update, and one explicit decision request.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Metrics, case sampling, and operational quality",
          "lead": "A SOC improves by measuring evidence quality and business outcomes along with speed and volume.",
          "keyIdeas": [
            "Define each timestamp and denominator",
            "Balance speed with accuracy, coverage, recurrence, and impact",
            "Sample cases to inspect reasoning that dashboards cannot see"
          ],
          "content": "Time metrics require stable definitions. Time to detect might begin at adversary action, first observable evidence, or alert creation. Time to acknowledge might end when a ticket is opened or when an analyst actually reviews it. Containment can mean first block or verified control of every known path. Report the points and show distributions by severity or incident type; a single mean can hide long delays.\n\nDetection measures include volume, precision, duplicate rate, data coverage, tested technique coverage, time to triage, and observed false negatives from incidents or exercises. Case measures include disposition accuracy, evidence citation, scope quality, authorization, handoff quality, and reopened cases. Response measures include verified containment, business interruption, recovery, recurrence, and corrective-action completion. Metrics can create harmful incentives. Closing alerts quickly can reward shallow dismissal.\n\nCounting more incidents can reward broad classification.\n\nRanking teams by vulnerability count can discourage discovery. Pair metrics and review behavior. A high alert volume with improved coverage may be progress, while a low volume after a parser failure is dangerous. Case quality needs sampling. Select across analysts, shifts, data sources, outcomes, and severity. A reviewer checks raw-event linkage, query reproducibility, entity and time scope, distinction between fact and inference, appropriate action, communication, and closure.\n\nReview should coach analysts and reveal missing enrichment or poor playbooks rather than search only for individual fault. Every dashboard should support a decision. Queue age can change staffing; ingestion gaps can change platform priority; recurring incidents can change architecture; slow owner response can change escalation; noisy rules can change detection investment. Record the owner and review date for each measure, and retire charts that nobody uses.",
          "practical": "Create a metric card with purpose, formula, population, source, owner, refresh, target, limitation, and perverse incentive. Then describe the decision that a bad value triggers.",
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
