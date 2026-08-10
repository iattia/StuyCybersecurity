// Stuy Cybersecurity certification textbook data.
window.CERT_GUIDE = {
  "name": "ISC2 CISSP: A Complete Security Professional Textbook",
  "short": "ISC2 CISSP",
  "version": "2024 exam outline · effective April 15, 2024",
  "official": "https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline",
  "subtitle": "An explanation-first guide to security leadership, architecture, engineering, operations, and software security across all eight CISSP domains.",
  "notice": "CISSP is an experience-based professional certification. This book teaches the body of knowledge, but it does not replace the experience requirement or the current official exam outline. Verify dates and policies with ISC2 before scheduling an exam.",
  "parts": [
    {
      "title": "Domain 1: Security and Risk Management",
      "weight": "16% of the exam",
      "intro": "Security begins as a management discipline. This domain explains how an organization decides what matters, who is accountable, which obligations apply, and how much risk it can responsibly accept.",
      "topics": [
        {
          "title": "Security objectives and professional judgment",
          "lead": "Confidentiality, integrity, and availability are decision tools rather than three products an organization can purchase.",
          "keyIdeas": [
            "Confidentiality limits unauthorized disclosure.",
            "Integrity protects correctness, completeness, and authorized change.",
            "Availability keeps information and services usable when needed.",
            "Authenticity, accountability, privacy, and safety often shape the final decision."
          ],
          "content": "The familiar CIA triad is a way to describe the properties that information and systems need. Confidentiality asks who may learn something. Integrity asks whether information and processes remain accurate and trustworthy. Availability asks whether authorized users can obtain a service at the required time and quality. The three objectives can conflict. A tightly isolated system may protect confidentiality yet be too difficult to use during an emergency.\n\nA highly available public service may need additional controls to protect the integrity of transactions. Security professionals therefore begin with context. A hospital infusion system places unusual weight on safety and availability. A payroll database emphasizes confidentiality and integrity. A public election-results site must remain available, but publishing a wrong result may be worse than a short delay. Authenticity establishes that a person, system, or message is genuine.\n\nAccountability connects an action to an identity through controls such as unique accounts and protected logs. Nonrepudiation provides evidence strong enough that a party cannot credibly deny an action. The CISSP perspective is managerial. The best answer is rarely the newest technical control. First identify the business objective, legal duty, affected people, and risk owner. Then choose a proportionate control.\n\nSecurity exists to enable the organization to pursue its mission with risk that leadership understands and accepts.",
          "practical": "When two controls appear equally plausible, state the asset, the threatened security property, and the business consequence. That short sentence often reveals which control addresses the actual problem.",
          "tables": [
            {
              "title": "Security properties in context",
              "headers": [
                "Property",
                "Question",
                "Example control"
              ],
              "rows": [
                [
                  "Confidentiality",
                  "Who may see it?",
                  "Access control and encryption"
                ],
                [
                  "Integrity",
                  "Who may change it, and how is change detected?",
                  "Digital signatures and change control"
                ],
                [
                  "Availability",
                  "Can authorized users rely on it?",
                  "Redundancy and recovery testing"
                ],
                [
                  "Accountability",
                  "Can actions be traced responsibly?",
                  "Unique identities and protected audit logs"
                ]
              ]
            }
          ]
        },
        {
          "title": "Governance, management, and accountability",
          "lead": "Governance supplies direction and oversight; management turns that direction into an operating program.",
          "keyIdeas": [
            "The board and senior leadership remain accountable for organizational risk.",
            "A data owner decides classification and acceptable use.",
            "A custodian implements handling and protection requirements.",
            "Policies flow from business objectives and authoritative requirements."
          ],
          "content": "Governance establishes decision rights. It defines who may accept risk, how security supports strategy, how performance is measured, and how leaders receive assurance that controls are working. Management develops plans, assigns resources, operates controls, and reports results. A CISO can coordinate the security program, but accountability for enterprise risk remains with senior leadership. Clear ownership prevents a common failure: assuming that IT owns every decision involving information.\n\nA business or data owner understands the information's value and determines classification, access requirements, and retention needs. A system owner is responsible for a system that processes information. A custodian or administrator implements backups, permissions, encryption, and other controls according to the owner's requirements. Users must follow policy and report problems. Auditors require sufficient independence from the work they evaluate.\n\nGood governance is visible in the chain from mission to daily work.\n\nA corporate objective leads to a risk appetite; the appetite influences policy; standards specify mandatory technologies or configurations; procedures explain repeatable tasks; guidelines offer recommended methods. Metrics report whether the system produces the intended result. A count of installed tools is weak evidence. Measures such as the proportion of critical systems within recovery objectives or the time taken to revoke terminated accounts connect security work to business outcomes.",
          "practical": "Draw a RACI chart for one real process such as granting access to student records. If everyone is merely “responsible,” the process lacks a clearly accountable owner.",
          "tables": [
            {
              "title": "Governance documents",
              "headers": [
                "Document",
                "Purpose",
                "Typical authority"
              ],
              "rows": [
                [
                  "Policy",
                  "States management intent and mandatory direction",
                  "Executive management"
                ],
                [
                  "Standard",
                  "Defines mandatory implementation requirements",
                  "Delegated authority"
                ],
                [
                  "Procedure",
                  "Explains how a task is performed",
                  "Process owner"
                ],
                [
                  "Guideline",
                  "Offers recommended, adaptable practice",
                  "Subject-matter owner"
                ]
              ]
            }
          ]
        },
        {
          "title": "Ethics, due care, and due diligence",
          "lead": "A professional must protect people and the public interest while serving an employer or client competently.",
          "keyIdeas": [
            "The ISC2 canons are hierarchical.",
            "Due care is reasonable prudence; due diligence is the continuing investigation and verification behind it.",
            "Negligence is judged against an applicable duty and reasonable behavior.",
            "Conflicts of interest should be disclosed and managed."
          ],
          "content": "The ISC2 Code of Ethics places four canons in order: protect society, the common good, necessary public trust and confidence, and infrastructure; act honorably, honestly, justly, responsibly, and legally; provide diligent and competent service to principals; and advance and protect the profession. The ordering matters when duties conflict. Loyalty to an employer does not justify concealing an imminent danger to the public. Due care describes the care a reasonable person or organization should exercise under the circumstances.\n\nDue diligence is the sustained work of understanding risks, implementing safeguards, monitoring performance, and correcting deficiencies. Writing a patch policy may demonstrate care; inventorying systems, measuring compliance, testing exceptions, and following up on overdue patches demonstrate diligence. Neither phrase is a magic legal shield. The applicable standard depends on law, contract, professional practice, and facts. Ethical practice also includes candor about competence and uncertainty.\n\nA security professional should not exaggerate an assessment, hide a limitation, or use privileged access for curiosity.\n\nConfidential information remains protected after an engagement ends. Evidence should be handled objectively. When an instruction appears illegal or dangerous, the professional should preserve facts, follow appropriate escalation paths, obtain qualified legal advice, and prioritize protection of society.",
          "practical": "Use the four canons to analyze a conflict between an employer’s request and a public-safety concern. Write what facts are known, what is uncertain, who can act, and how harm can be reduced without making unsupported accusations."
        },
        {
          "title": "Law, regulation, contracts, and privacy",
          "lead": "Security obligations come from multiple authorities, and each authority has a different scope and enforcement mechanism.",
          "keyIdeas": [
            "Jurisdiction determines which law applies.",
            "Contracts can impose stricter duties than general law.",
            "Privacy concerns lawful and fair treatment of personal data, not merely secrecy.",
            "Counsel should interpret legal obligations; security translates them into controls."
          ],
          "content": "A multinational organization may face statutes, sector regulations, regulatory orders, contracts, and internal commitments at the same time. Criminal law prohibits conduct on behalf of the state. Civil law resolves disputes and provides remedies such as damages. Administrative or regulatory law comes from authorized agencies. Common law develops through judicial decisions in jurisdictions that use precedent. Intellectual property law protects copyrights, patents, trademarks, and trade secrets through different requirements.\n\nPrivacy programs begin with purpose and authority. Personal information should be collected for a defined, lawful reason; limited to what is necessary; kept accurate; protected; retained only as long as justified; and made available to people through appropriate rights and notices. Controllers or similar decision-making roles determine purposes and means, while processors or service providers handle information under instructions. Terminology and obligations vary by jurisdiction, so mapping data flows and legal entities is essential.\n\nContracts extend the control environment. Security exhibits, data-processing terms, service-level agreements, confidentiality clauses, breach-notification windows, right-to-audit language, data-location restrictions, and secure-deletion obligations should be specific enough to verify. A provider's certification or assurance report is evidence, not a transfer of accountability. The customer still decides whether residual risk is acceptable.",
          "practical": "For a hypothetical student-data service, list the data collected, purpose, location, recipients, retention period, deletion method, and contractual evidence. Missing answers expose governance gaps before a technical review begins."
        },
        {
          "title": "Risk concepts and assessment",
          "lead": "Risk analysis connects valuable assets, plausible threats, weaknesses, existing controls, likelihood, and consequence.",
          "keyIdeas": [
            "Inherent risk exists before the selected controls; residual risk remains afterward.",
            "A risk owner has authority to accept or direct treatment.",
            "Qualitative analysis supports prioritization when precise data is unavailable.",
            "Scenario-based analysis is more useful than an isolated vulnerability score."
          ],
          "content": "Risk is uncertainty that affects objectives. A useful scenario names the asset or process, threat actor or event, vulnerability or condition, and business impact. “Unpatched server” is a finding. “An internet-facing unpatched server could be exploited to interrupt order processing and expose customer records” is a risk scenario that leaders can evaluate. Assessment may be qualitative, quantitative, or hybrid. Qualitative methods use defined scales such as unlikely, possible, and likely combined with impact categories.\n\nTheir value depends on calibrated definitions and consistent facilitation. Quantitative methods estimate frequency and loss in monetary terms. Asset value (AV) multiplied by exposure factor (EF) gives single loss expectancy (SLE). SLE multiplied by annualized rate of occurrence (ARO) gives annualized loss expectancy (ALE). These estimates can guide decisions, but false precision should not conceal uncertain assumptions. Inherent risk is the exposure before considering a selected set of controls.\n\nControls reduce likelihood or impact, producing residual risk. Secondary risk may arise from the treatment itself. The risk owner, not the assessor or system administrator, decides whether residual risk is within appetite and tolerance. Assessments should record assumptions, evidence, control effectiveness, accountable owners, deadlines, and triggers for reassessment.",
          "practical": "Calculate a range rather than a single ALE when frequency is uncertain. A transparent low, expected, and high estimate is more honest and useful than a confidently stated number built on weak evidence.",
          "tables": [
            {
              "title": "Quantitative risk terms",
              "headers": [
                "Term",
                "Meaning",
                "Relationship"
              ],
              "rows": [
                [
                  "AV",
                  "Value exposed to the scenario",
                  "Input"
                ],
                [
                  "EF",
                  "Fraction lost in one event",
                  "Input"
                ],
                [
                  "SLE",
                  "Expected loss from one event",
                  "AV × EF"
                ],
                [
                  "ARO",
                  "Expected annual frequency",
                  "Input"
                ],
                [
                  "ALE",
                  "Expected annualized loss",
                  "SLE × ARO"
                ]
              ]
            }
          ]
        },
        {
          "title": "Risk treatment and control selection",
          "lead": "Treatment changes exposure through avoidance, mitigation, transfer or sharing, or explicit acceptance.",
          "keyIdeas": [
            "Controls should be proportionate to risk and business need.",
            "Control types describe purpose and implementation.",
            "Compensating controls meet an objective when the preferred control is impractical.",
            "Risk acceptance requires an authorized owner and documented rationale."
          ],
          "content": "Avoidance stops the activity that creates a risk. Mitigation reduces likelihood or consequence through controls. Transfer or sharing allocates some financial or operational effect to another party through insurance or contract, but it rarely transfers accountability. Acceptance is a conscious decision to retain residual risk. Ignoring a known problem without authorization is not acceptance. Controls can be administrative, technical, or physical.\n\nBy function they may be preventive, detective, corrective, deterrent, recovery, or compensating.\n\nA locked door is physical and preventive; an access review is administrative and detective; restoring from a protected backup is a recovery control. Defense in depth uses independent or diverse controls so the failure of one does not expose the entire objective. Selection should consider effectiveness, reliability, cost, usability, legal constraints, and the new risks a control introduces. A safeguard's economic value can be approximated as the reduction in ALE minus annualized control cost, but mandatory obligations and safety concerns may require a control even when a narrow calculation is unfavorable.\n\nThe final decision should state the objective, owner, expected residual risk, measurement method, and review date.",
          "practical": "Given a legacy system that cannot support modern MFA, define the control objective first. A compensating design might combine a hardened jump host, network restriction, privileged session recording, short-lived access approval, and accelerated replacement."
        },
        {
          "title": "Threat modeling and attack frameworks",
          "lead": "Threat modeling asks what can go wrong while a design is still inexpensive to change.",
          "keyIdeas": [
            "Models organize thinking; they do not guarantee completeness.",
            "STRIDE categorizes design threats.",
            "Attack trees decompose an adversary goal into possible paths.",
            "Misuse cases and adversary techniques connect architecture to realistic behavior."
          ],
          "content": "A threat model starts with scope, assumptions, trust boundaries, assets, actors, entry points, and data flows. The team then identifies threats, estimates risk, chooses mitigations, and verifies that changes have not created new exposure. A diagram is valuable because disagreements about trust and data movement become visible. STRIDE prompts the team to consider spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege.\n\nAn attack tree begins with an adversary goal and branches into alternative or required steps. Misuse and abuse cases describe how a feature could be used against its intended purpose. Kill-chain and adversary-technique frameworks help defenders connect individual events to campaigns and detection opportunities. Threat modeling should remain grounded in business context. A public brochure site and a medical-device control plane do not deserve identical depth.\n\nModels need periodic revision when architecture, dependencies, data types, or threats change. The output is not merely a list of scary possibilities: it should lead to design decisions, test cases, logging requirements, accepted assumptions, and named risk owners.",
          "practical": "Sketch a password-reset data flow. Mark where identity is asserted, where tokens travel, where rate limiting occurs, which logs are created, and which component is trusted to change the credential."
        },
        {
          "title": "Business impact analysis and continuity",
          "lead": "Continuity planning protects essential outcomes when normal people, facilities, technology, or suppliers are unavailable.",
          "keyIdeas": [
            "The BIA identifies critical processes, dependencies, and impact over time.",
            "RTO concerns restoration time; RPO concerns tolerable data loss measured in time.",
            "MTD is the longest disruption the organization can tolerate.",
            "Plans require exercises and maintenance."
          ],
          "content": "A business impact analysis is performed before selecting recovery technology. Process owners identify essential services, peak periods, legal duties, safety consequences, upstream and downstream dependencies, manual workarounds, and how harm grows over time. The maximum tolerable downtime or period of disruption establishes the outer business limit. Recovery time objectives should be shorter than that limit and coordinated across dependent services.\n\nRecovery time objective (RTO) is the target time to restore a process or system after disruption.\n\nRecovery point objective (RPO) is the maximum acceptable data loss expressed as time: an RPO of four hours requires recoverable data no more than four hours old. Maximum tolerable downtime (MTD) is the business's maximum sustainable interruption. Mean time to repair is an observed reliability measure, not a management recovery target. Business continuity keeps priority operations functioning; disaster recovery concentrates on restoring technology and supporting infrastructure.\n\nCrisis communications, emergency response, succession, supplier alternatives, and return to normal are part of the broader program. Exercises progress from document review and tabletop discussion through simulation, parallel processing, and carefully controlled full-interruption testing. Findings must become funded corrective actions.",
          "practical": "Select one school service and trace every dependency required to recover it: identity, DNS, network, devices, staff, facilities, vendors, records, and communications. Recovery plans fail most often at the connections between systems."
        },
        {
          "title": "Third-party and supply-chain risk",
          "lead": "An organization inherits dependencies from providers, software components, hardware, data processors, and professional services.",
          "keyIdeas": [
            "Assess criticality before selecting review depth.",
            "Contracts must make security expectations measurable.",
            "Concentration and fourth-party dependencies can defeat redundancy.",
            "Offboarding is part of the supplier lifecycle."
          ],
          "content": "Supplier risk management begins before procurement. The sponsoring business identifies what the service will do, data it will handle, privileges it needs, failure consequences, geographic constraints, and how readily it can be replaced. Due diligence then examines architecture, control evidence, financial viability, incident history, software development practice, subcontractors, and continuity capability in proportion to that criticality. Contract language should address ownership, permitted use, confidentiality, access, encryption, vulnerability handling, secure development, incident notification, investigation cooperation, assurance evidence, audit rights, continuity, data portability, retention, destruction, and termination.\n\nA generic promise to use “industry-standard security” is difficult to test. Assurance reports and certifications narrow uncertainty but need review for scope, dates, exceptions, complementary customer controls, and relevance to the actual service. Monitoring continues throughout the relationship. Changes in ownership, architecture, subcontractors, financial condition, or threat exposure may alter risk. Concentration risk exists when nominally different services depend on one cloud region, identity provider, software library, or logistics provider.\n\nExit planning confirms that accounts are removed, integrations disabled, assets returned, data exported in usable form, residual copies destroyed as agreed, and ongoing obligations preserved.",
          "practical": "Build a supplier tiering rule based on data sensitivity, privilege, operational dependency, substitutability, and external connectivity. Use the tier to decide which evidence and contract clauses are required."
        },
        {
          "title": "Security awareness, education, and training",
          "lead": "People need role-specific knowledge, usable processes, and timely reinforcement, not an annual blame exercise.",
          "keyIdeas": [
            "Awareness changes attention and behavior.",
            "Training develops repeatable job skills.",
            "Education builds broader conceptual understanding.",
            "Metrics should measure behavior and risk outcomes."
          ],
          "content": "Awareness communicates a small number of relevant behaviors to a broad population: how to report a suspicious message, protect credentials, handle sensitive information, and obtain help. Training teaches a task, such as secure system administration or evidence handling. Education develops deeper knowledge that supports judgment across unfamiliar situations. The program should distinguish these purposes instead of presenting the same slide deck to everyone.\n\nRole and risk determine content.\n\nDevelopers need secure design and code-review practice; executives need crisis decisions and risk ownership; help-desk staff need identity-verification procedures; administrators need privileged-access and recovery drills. Contractors and temporary personnel require coverage before access. Short reinforcement near the moment of action is often more effective than a single long annual session. Completion rates show participation, not competence. Better measures include reporting rates, time to report, observed handling errors, simulated exercise results interpreted carefully, reduction in repeated incidents, and performance in role-specific demonstrations.\n\nMetrics must not create fear of reporting. A healthy culture makes the secure action clear, practical, and supported by leadership.",
          "practical": "Rewrite one security rule as a two-minute job aid: explain the situation, the safe action, why it matters, and where to get help. Test it with someone who did not write it."
        },
        {
          "title": "Security frameworks and program architecture",
          "lead": "Frameworks give a program common structure, but leadership must adapt them to the organization rather than treating a checklist as strategy.",
          "keyIdeas": [
            "Control frameworks catalog safeguards.",
            "Risk frameworks organize decisions and authorization.",
            "Maturity models describe institutional capability.",
            "Crosswalks help reconcile overlapping obligations without pretending they are identical."
          ],
          "content": "Frameworks serve different purposes. ISO/IEC 27001 specifies requirements for an information security management system; its control guidance supports risk treatment.\n\n## The NIST Cybersecurity\n\nFramework organizes outcomes around governance, identification, protection, detection, response, and recovery. NIST risk and control publications offer more detailed processes and control catalogs. COBIT connects information and technology governance with enterprise objectives. A control framework helps answer what safeguards should be considered. A risk framework explains how systems and risks are categorized, controls selected and assessed, risk authorized, and operation monitored.\n\nA maturity model examines whether practices are informal, repeatable, measured, and continuously improved.\n\nNone automatically decides risk tolerance or proves an implementation is effective. Organizations commonly face several frameworks at once. A control crosswalk can map shared objectives and evidence, reducing duplicated assessment work. Mapping should preserve differences in scope, wording, population, and assurance. “Mapped” does not mean “compliant.” A program architecture identifies authoritative obligations, chosen framework, policy hierarchy, control owners, evidence sources, exceptions, assurance, metrics, and improvement governance.",
          "practical": "Choose one access-control objective and map how a policy, standard, implementation, evidence source, owner, metric, and framework reference form one traceable chain."
        },
        {
          "title": "Investigation types and decision authority",
          "lead": "Administrative, civil, criminal, regulatory, and standards investigations pursue different questions under different authority.",
          "keyIdeas": [
            "The investigation type influences evidence rules and participants.",
            "Security personnel preserve facts and avoid exceeding authority.",
            "Legal counsel guides privilege and notification.",
            "Parallel proceedings require coordination."
          ],
          "content": "An administrative investigation determines whether policy or employment requirements were violated and may lead to discipline. A criminal investigation concerns offenses prosecuted by the state and requires law-enforcement authority and criminal procedure. Civil matters resolve disputes between parties. Regulatory investigations examine compliance with an agency's authority. Industry or contractual investigations examine obligations such as payment-card or assurance requirements. The same incident can trigger several tracks.\n\nA fraud event may involve an internal inquiry, insurer, civil claim, regulator, and law enforcement. Collection acceptable for one purpose may prejudice another if investigators alter evidence, exceed monitoring notice, violate labor rights, or break privilege. The organization should establish who can authorize searches, interviews, monitoring, preservation, external referral, and notification before an incident. Security staff identify and preserve relevant facts, maintain chain of custody, document methods, and consult authorized legal and investigative professionals.\n\nThey should separate confirmed evidence from inference and avoid promising confidentiality they cannot maintain. Retaliation, conflicts of interest, and unnecessary disclosure can harm people and the integrity of the investigation.",
          "practical": "For a suspected insider theft, list the possible investigation tracks, decision owners, legal questions, preservation actions, and conditions for involving external authorities."
        }
      ]
    },
    {
      "title": "Domain 2: Asset Security",
      "weight": "10% of the exam",
      "intro": "Asset security follows information from discovery and ownership through use, sharing, retention, archiving, and verified destruction.",
      "topics": [
        {
          "title": "Asset inventories and ownership",
          "lead": "Protection begins with a reliable record of what exists, what it does, where it is, and who can make decisions about it.",
          "keyIdeas": [
            "Inventories cover information, hardware, software, services, identities, and dependencies.",
            "Ownership is a decision role, not necessarily technical administration.",
            "Discovery must be reconciled with authorized records.",
            "Criticality and dependency are as important as purchase price."
          ],
          "content": "An asset inventory is a maintained body of evidence rather than a one-time spreadsheet. It may include devices, virtual machines, applications, cloud resources, repositories, datasets, certificates, service accounts, facilities, and suppliers. Useful records identify an accountable owner, custodian, business purpose, location, classification, lifecycle status, configuration baseline, dependencies, and support dates. Discovery tools reveal what is present on networks and cloud accounts, while procurement, deployment, and change processes record what should be present.\n\nReconciliation exposes unmanaged or unauthorized assets. Inventories decay when updates depend entirely on human memory, so mature programs connect records to provisioning, configuration management, endpoint management, cloud APIs, and retirement workflows. Value is multidimensional. Replacement cost may be small while operational, legal, safety, or reputational consequences are large. A certificate or service account may be technically simple but critical because many services depend on it.\n\nThe business owner determines value and acceptable use; custodians maintain the asset according to those decisions.",
          "practical": "Choose a small application and inventory not only its server but also its data, repository, secrets, identities, DNS, certificates, dependencies, owner, support dates, and recovery requirements."
        },
        {
          "title": "Information classification",
          "lead": "Classification groups information by sensitivity and criticality so handling requirements can be applied consistently.",
          "keyIdeas": [
            "Schemes should be simple enough to use correctly.",
            "Owners assign classification using defined criteria.",
            "Labels communicate requirements but do not enforce them alone.",
            "Classification can change as information ages or becomes public."
          ],
          "content": "Commercial schemes often use levels such as public, internal, confidential, and restricted. Government schemes use legally defined national-security categories. Names matter less than precise criteria and handling rules. Classification should consider harm from disclosure, alteration, unavailability, or unauthorized use; legal and contractual requirements; aggregation; and time sensitivity. The owner assigns or approves classification. Creators and automated discovery tools may suggest a label, while custodians implement storage, access, transmission, and disposal controls.\n\nMarking needs to travel with the information through headers, metadata, watermarks, repository attributes, or structured tags. A label that is lost when content is copied cannot reliably drive protection. Overclassification makes systems expensive and encourages workarounds. Underclassification exposes information. Default rules, exceptions, review periods, and declassification triggers reduce inconsistent judgment. An acquisition plan may be restricted before announcement and public afterward; regulated records may remain protected long after their immediate business use ends.",
          "practical": "Write four classification levels with one sentence of criteria and concrete rules for storage, email, printing, external sharing, and disposal. Ask whether a new user could classify an ordinary document without guessing."
        },
        {
          "title": "Privacy and sensitive data categories",
          "lead": "Different kinds of information create different harms, obligations, and handling expectations.",
          "keyIdeas": [
            "Personal data identifies or relates to a person directly or indirectly.",
            "Health, financial, authentication, and student records may receive heightened protection.",
            "Aggregation can turn ordinary fields into sensitive information.",
            "Privacy decisions include purpose, fairness, transparency, and individual rights."
          ],
          "content": "Personally identifiable information is contextual: a field that seems harmless may identify a person when combined with other data. Protected health information, payment-card data, government identifiers, credentials, precise location, biometrics, and records about children often require specialized safeguards. Intellectual property, trade secrets, legal privilege, and export-controlled information may be sensitive without being personal. Security classification and privacy categorization overlap but are not identical.\n\nClassification asks what protection an organization assigns.\n\nPrivacy asks whether processing personal data is lawful, necessary, fair, transparent, and respectful of applicable rights. De-identification reduces linkability; pseudonymization replaces identifiers but may remain reversible; anonymization aims to prevent reasonable re-identification and is difficult to guarantee. Data inventories should identify subjects, sources, purpose, fields, recipients, storage, transfers, retention, and responsible legal entities. Minimization reduces both privacy risk and attack value.\n\nCollection “just in case” creates ongoing cost and liability without a defined benefit.",
          "practical": "Review a registration form field by field. For each item, name the purpose, whether it is necessary, who uses it, and when it can be removed."
        },
        {
          "title": "The information lifecycle",
          "lead": "Controls must follow information through creation, use, sharing, storage, archive, and destruction.",
          "keyIdeas": [
            "Lifecycle states are business states, not only storage locations.",
            "Copies, caches, exports, and backups complicate control.",
            "Retention and legal holds can override routine deletion.",
            "Transfer of custody should preserve accountability."
          ],
          "content": "Information is created or collected, processed, stored, transmitted, shared, archived, and eventually destroyed. Real systems branch rather than follow a neat line. A record may be copied into analytics, logs, backups, support tickets, and a vendor platform. Each copy can have different access paths, retention behavior, and ownership. Controls should be chosen for the state. Collection requires purpose limitation and validation.\n\nActive use requires authorized access, integrity protection, and monitoring.\n\nTransmission needs secure endpoints and channels. Archives need durable formats, access restrictions, integrity checks, and recoverability. Disposal needs a method matched to media, sensitivity, and assurance needs. Retention schedules reconcile operational value, contractual duties, limitation periods, regulation, historical value, and storage risk. A legal hold suspends normal destruction for relevant information and must reach copies and custodians without silently retaining unrelated data forever.\n\nChain of custody records possession and handling when information becomes evidence or crosses organizational boundaries.",
          "practical": "Trace one document through email, collaboration, endpoint caches, exports, backups, and deletion queues. The exercise usually reveals more copies than the policy assumes."
        },
        {
          "title": "Data states and protection methods",
          "lead": "Data at rest, in transit, and in use faces different exposure and needs different control combinations.",
          "keyIdeas": [
            "Encryption at rest protects lost media but not every compromise of a running system.",
            "Transport protection authenticates peers and protects a channel.",
            "Data in use may be exposed in memory, displays, logs, and endpoints.",
            "Keys and identities determine the real strength of encryption."
          ],
          "content": "At-rest protection includes full-disk, volume, file, field, database, object-storage, and backup encryption. The threat model determines the right layer. Full-disk encryption helps when a powered-off device is lost; it does not stop malware operating under an authorized session. Field-level encryption can limit exposure from a database copy but complicates search and key management. In-transit controls such as TLS, IPsec, and protected tunnels provide combinations of peer authentication, confidentiality, and integrity.\n\nEnd-to-end protection keeps data protected across intermediaries, while link encryption protects one segment at a time. The organization must still validate endpoints, certificate names, protocol versions, and termination points. Data in use appears in process memory, temporary files, browser storage, displays, clipboard history, crash dumps, observability platforms, and administrator tools. Isolation, least privilege, masking, tokenization, protected execution, and careful logging reduce exposure.\n\nEncryption is only as dependable as key generation, storage, rotation, access, recovery, and destruction.",
          "practical": "For a laptop, database, and web session, state exactly which threat each encryption control addresses and what exposure remains after the control is enabled."
        },
        {
          "title": "Retention, archiving, and records management",
          "lead": "Keeping information too briefly can violate duties; keeping it indefinitely increases cost, discovery burden, and breach impact.",
          "keyIdeas": [
            "Retention periods derive from business and authoritative requirements.",
            "Archives require integrity, readability, and controlled access.",
            "Legal holds suspend normal disposition for scoped material.",
            "Defensible disposal depends on consistent policy and evidence."
          ],
          "content": "Records management identifies authoritative records, assigns schedules, protects their integrity, and disposes of them when obligations end. The schedule should name the trigger, such as contract termination or student graduation, not merely a number of years. Conflicting requirements are resolved with records management and counsel, with the rationale documented. Archives must remain readable across technology changes. Durable formats, media refresh, checksums, environmental control, metadata, and tested restoration preserve evidentiary and operational value.\n\nAccess should be narrower than for active data because archived information is less frequently used yet often concentrated. Backups are optimized for recovery and are not automatically a suitable records archive. When litigation or investigation is reasonably anticipated, a legal hold identifies relevant custodians and systems, suspends scheduled destruction, preserves metadata, and records collection. When the hold ends, ordinary disposition should resume.\n\nConsistent, documented destruction under an approved schedule is more defensible than selective deletion.",
          "practical": "Create a retention entry with record type, owner, authoritative source, trigger, duration, legal basis, archive requirements, destruction approval, and hold procedure."
        },
        {
          "title": "Media sanitization and destruction",
          "lead": "Secure disposal removes information to a level appropriate for its sensitivity, media, reuse plan, and adversary.",
          "keyIdeas": [
            "Clear protects against ordinary recovery.",
            "Purge resists laboratory recovery while permitting reuse in some cases.",
            "Destroy makes media unusable.",
            "Verification and chain of custody matter as much as the selected technique."
          ],
          "content": "Clearing uses logical techniques to remove data from user-addressable locations against simple recovery. Purging applies stronger logical or physical techniques so recovery is infeasible with advanced laboratory methods; cryptographic erase can purge suitable encrypted media by securely destroying the relevant keys. Destruction physically renders media unusable through approved processes such as shredding, disintegration, or incineration. The method depends on media technology.\n\nOverwriting may not reach remapped sectors or flash wear-leveling.\n\nDegaussing applies only to magnetic media and can make drives unusable; it does not sanitize optical or solid-state media. Cloud storage requires provider-supported lifecycle and key controls plus contractual assurance because the customer does not possess the physical device. A sanitization program authorizes methods by classification and media, controls transport, separates duties for sensitive items, records serial numbers and custody, verifies outcomes, and obtains certificates from destruction vendors.\n\nLabels and adjacent components must also be considered. Destruction without inventory reconciliation leaves uncertainty about whether the right asset was processed.",
          "practical": "Build a disposal matrix for paper, magnetic disk, solid-state storage, mobile devices, backup tapes, and cloud objects. Include reuse, verification, and evidence requirements."
        },
        {
          "title": "Data loss prevention, rights management, and monitoring",
          "lead": "Content-aware controls can identify sensitive information and influence how it is stored, transmitted, or used.",
          "keyIdeas": [
            "DLP relies on discovery, classification, policy, and accurate context.",
            "False positives and business workarounds require careful tuning.",
            "DRM attempts to keep use restrictions with a document.",
            "Monitoring must respect privacy and legal boundaries."
          ],
          "content": "Data loss prevention systems inspect endpoints, networks, messaging, and repositories for information that matches rules. Detection may use exact data matching, fingerprints, regular expressions, labels, dictionaries, and statistical models. Policies can log, warn, require justification, quarantine, block, or encrypt an action. Starting in monitor mode allows the team to understand ordinary business flows before imposing disruptive controls. DLP does not understand intent perfectly.\n\nA pattern resembling a government identifier may be test data; a photograph may contain sensitive text that simple inspection misses.\n\nTuning requires owners who can explain legitimate workflows, analysts who can investigate events, and exception processes with expiration and review. Unusable controls drive people toward unmanaged channels. Digital rights management or information rights management can restrict opening, copying, printing, or forwarding after distribution, but it depends on compatible clients, identity, and key services and cannot stop an authorized viewer from re-recording content.\n\nMonitoring itself processes employee and customer information, so notice, proportionality, access restriction, retention, and legal review are part of the design.",
          "practical": "Design a staged DLP rule for sending restricted documents to personal email: observe, measure, notify, allow justified exceptions, then block the narrow high-confidence cases."
        },
        {
          "title": "Secure handling, transfer, and accountability",
          "lead": "Handling rules translate classification into ordinary actions people can perform and custodians can verify.",
          "keyIdeas": [
            "Handling covers storage, display, reproduction, transmission, transport, and disposal.",
            "Recipients need both authorization and a business need.",
            "Custody transfers should be recorded for sensitive assets.",
            "Exceptions should be explicit, temporary, and owned."
          ],
          "content": "A handling standard states where each classification may be stored, which devices and repositories are approved, whether encryption is required, how documents are marked, who may print or copy them, which communication channels may carry them, and how they are transported and destroyed. Rules must include remote work, mobile devices, collaboration services, removable media, support tools, and emergency operation. Before transfer, the sender verifies the recipient, authorization, purpose, classification, destination, and protection method.\n\nPhysical media may require tamper-evident packaging, tracked transport, and signed custody. Electronic transfer may require authenticated encryption, expiration, recipient restrictions, and confirmation. A checksum detects accidental or malicious change but does not conceal content. Sensitive output left on printers, screens visible to visitors, test datasets copied from production, and files attached to tickets are common handling failures. Useful training presents recognizable situations and an approved alternative.\n\nMonitoring and sanctions should be proportional and consistent. When ordinary work cannot follow the rule, an accountable owner assesses and time-limits the exception rather than allowing a hidden workaround.",
          "practical": "Take one restricted dataset and write a handling card covering approved locations, access, screen and print rules, external transfer, removable media, backup, incident reporting, and disposal."
        }
      ]
    },
    {
      "title": "Domain 3: Security Architecture and Engineering",
      "weight": "13% of the exam",
      "intro": "Architecture turns requirements into systems whose trust assumptions, failure modes, and protections can be explained and tested.",
      "topics": [
        {
          "title": "Secure design principles",
          "lead": "Durable architecture follows a small set of principles that remain useful as products and platforms change.",
          "keyIdeas": [
            "Least privilege limits authority.",
            "Fail secure preserves protection when components fail.",
            "Complete mediation checks every access.",
            "Economy of mechanism and open design reduce hidden complexity."
          ],
          "content": "Least privilege gives each subject only the authority needed for its current task and duration. Separation of privilege requires multiple conditions or parties for sensitive action. Complete mediation checks authorization on every access rather than trusting a stale earlier decision. Fail-secure defaults deny or preserve a safe state when a component cannot make a trusted decision. Economy of mechanism favors designs small enough to understand and verify.\n\nOpen design avoids depending on secrecy of the mechanism; secrets belong in keys and credentials, not undocumented algorithms. Least common mechanism minimizes shared resources that could create unintended communication or coupling. Psychological acceptability makes the secure path comprehensible and practical, reducing pressure to bypass controls. These principles involve tradeoffs. A fail-closed door protects a secure area during power loss but may threaten life safety; an emergency exit must fail in a safe physical direction.\n\nZero trust is not a product but a design approach that avoids implicit trust based solely on network location, continuously evaluates context, and limits access to explicit resources.",
          "practical": "Review a familiar login flow against least privilege, complete mediation, secure defaults, error handling, and usability. Identify one assumption that is trusted but not verified."
        },
        {
          "title": "Security models and evaluation concepts",
          "lead": "Formal models describe a particular security property; none is a complete design for a modern organization.",
          "keyIdeas": [
            "Bell–LaPadula protects confidentiality.",
            "Biba protects integrity.",
            "Clark–Wilson uses well-formed transactions and separation of duties.",
            "Brewer–Nash addresses conflicts of interest."
          ],
          "content": "Bell–LaPadula is a confidentiality model for multilevel systems. Its simple security property prevents reading up to a higher classification; its star property prevents writing down to a lower classification. Biba reverses the direction to protect integrity: no read down and no write up. These memorable rules express information-flow constraints, not every access decision a real system needs. Clark–Wilson protects commercial integrity through well-formed transactions.\n\nSubjects transform constrained data items through authorized transformation procedures, with separation of duties and auditing.\n\nBrewer–Nash, or the Chinese Wall model, changes access according to earlier choices to prevent conflicts between competing client datasets. The noninterference model asks whether actions at one security level can influence what another level observes. Evaluation standards provide structured assurance that products meet stated security targets under defined assumptions. Assurance is evidence about design and implementation, not a guarantee that a product is invulnerable or suitable for every environment.\n\nThe surrounding configuration, administrators, dependencies, and business process remain part of the system.",
          "practical": "For a financial transfer, use Clark–Wilson language to identify the constrained data, approved transformation, authorized roles, separation of duties, and audit evidence.",
          "tables": [
            {
              "title": "Selected security models",
              "headers": [
                "Model",
                "Primary concern",
                "Memorable idea"
              ],
              "rows": [
                [
                  "Bell–LaPadula",
                  "Confidentiality",
                  "No read up; no write down"
                ],
                [
                  "Biba",
                  "Integrity",
                  "No read down; no write up"
                ],
                [
                  "Clark–Wilson",
                  "Commercial integrity",
                  "Well-formed, audited transactions"
                ],
                [
                  "Brewer–Nash",
                  "Conflict of interest",
                  "Access changes after a dataset is chosen"
                ]
              ]
            }
          ]
        },
        {
          "title": "Trusted computing and system boundaries",
          "lead": "A system is only as trustworthy as the components and assumptions that enforce its security policy.",
          "keyIdeas": [
            "The TCB contains mechanisms that enforce policy.",
            "A security perimeter separates trusted mechanisms from the rest of the system.",
            "A reference monitor must be tamper resistant, always invoked, and small enough to analyze.",
            "Attestation reports measured state; it does not prove all behavior is safe."
          ],
          "content": "The trusted computing base includes hardware, firmware, and software responsible for enforcing the system's security policy. Its security perimeter marks the boundary across which interactions with less-trusted components occur. A reference monitor is the abstract mechanism that mediates access; a reference validation mechanism is its implementation. It should be tamper resistant, invoked for every relevant access, and sufficiently small and simple to test.\n\nModern roots of trust begin in hardware or protected firmware.\n\nSecure boot verifies a chain of signed components before execution. Measured boot records hashes into protected registers so another party can evaluate the boot state. A trusted platform module can generate and protect keys, seal secrets to platform state, and support attestation. These mechanisms establish evidence about startup; runtime compromise, vulnerable signed software, or stolen administrative authority can still defeat the system.\n\nThe boundary must include management planes, build systems, update channels, identity providers, and recovery processes.\n\nA beautifully isolated runtime is not trustworthy if an attacker can alter its update package or administrator account. Assurance cases make claims, identify assumptions, and link evidence so reviewers can see where trust is earned and where it is merely inherited.",
          "practical": "Draw a trust boundary around a laptop from firmware through identity and software update. Mark which keys, services, and people can change what runs on it."
        },
        {
          "title": "Hardware, processor, and memory security",
          "lead": "Hardware creates isolation and speed, but microarchitecture and physical access introduce their own attack paths.",
          "keyIdeas": [
            "Privilege rings and modes separate operating-system authority from applications.",
            "Memory protection prevents one process from freely reading another.",
            "Side channels infer secrets from timing, power, cache, or electromagnetic effects.",
            "Redundancy can improve availability but not automatically integrity."
          ],
          "content": "Processors use privilege levels, address translation, and execution modes to separate kernels, applications, and virtual machines. Memory-management units map virtual addresses and enforce read, write, and execute permissions. Non-executable memory, address randomization, stack protection, control-flow defenses, and memory-safe languages reduce exploitation opportunities but work best together. Side channels exploit implementation effects rather than breaking an algorithm mathematically. Cache timing, branch prediction, speculative execution, power use, sound, and electromagnetic emissions may reveal secret-dependent behavior.\n\nMitigations include constant-time implementation, partitioning, disabling vulnerable features, firmware updates, isolation, shielding, and reducing co-residency between hostile and sensitive workloads. Fault tolerance techniques include redundant components, error-detecting or correcting memory, watchdogs, diverse implementations, and graceful degradation. RAID improves storage availability under particular disk failures; it is not a backup and does not protect against deletion, corruption, ransomware, or site loss.\n\nHardware lifecycle risk also includes counterfeit components, malicious modification, unsupported firmware, and insecure maintenance ports.",
          "practical": "Explain what a RAID array, offline backup, and geographically separate recovery copy each protects against. If the explanations are identical, the design is confusing different failure modes."
        },
        {
          "title": "Virtualization, containers, and cloud architecture",
          "lead": "Shared infrastructure changes trust boundaries and divides control responsibilities among providers and customers.",
          "keyIdeas": [
            "A hypervisor mediates virtual machines and becomes a high-value component.",
            "Containers share a kernel and are not equivalent to virtual machines.",
            "Cloud service models redistribute responsibility rather than eliminating it.",
            "Management planes and identities deserve stronger protection than individual workloads."
          ],
          "content": "A type 1 hypervisor runs directly on hardware; a type 2 hypervisor runs above a host operating system. Isolation failure, hypervisor compromise, insecure device emulation, management-plane exposure, and VM escape can affect many guests. Snapshot and image sprawl may preserve secrets or outdated software. Virtual networks still need segmentation, inspection, and trustworthy configuration. Containers isolate processes primarily through kernel namespaces, control groups, capabilities, and security policies.\n\nBecause containers share the host kernel, a kernel vulnerability or overly privileged container can cross boundaries. Minimal images, non-root execution, signed provenance, runtime restrictions, secret separation, and rapid rebuilds reduce risk. Orchestration platforms add APIs, schedulers, service identities, admission controls, and supply-chain dependencies. In infrastructure, platform, and software service models, the provider and customer control different layers. The customer remains responsible for data, identities, intended configuration, and appropriate use even when much of the stack is managed.\n\nControl-plane accounts, automation credentials, infrastructure templates, and audit logs often represent the shortest path to widespread compromise.",
          "practical": "Create a responsibility matrix for one SaaS and one IaaS service. Include identity, data classification, configuration, patching, logging, backup, key management, and incident notification."
        },
        {
          "title": "Cryptographic foundations",
          "lead": "Cryptography provides specific properties under assumptions about algorithms, keys, implementation, and operation.",
          "keyIdeas": [
            "Symmetric encryption is efficient but requires shared-secret management.",
            "Asymmetric cryptography supports key agreement and signatures at higher cost.",
            "Hashes detect change but do not prove who made it.",
            "Digital signatures provide integrity, origin authentication, and evidence of signing."
          ],
          "content": "Symmetric algorithms use the same secret for encryption and decryption. They are fast enough for bulk data but create a distribution problem: every authorized endpoint needs protected access to the key. Block cipher modes determine how blocks are combined; authenticated-encryption modes provide confidentiality and integrity together and should be preferred when supported. Asymmetric systems use mathematically related public and private keys.\n\nThey enable key agreement, encryption for a recipient, and digital signatures, but their properties depend on the algorithm and protocol.\n\nIn practice, hybrid protocols use asymmetric operations to authenticate and establish fresh symmetric session keys, then protect bulk traffic symmetrically. A cryptographic hash maps arbitrary input to a fixed-size digest and should resist preimage, second-preimage, and collision attacks. A keyed message-authentication code supplies integrity and origin authentication to parties sharing a secret. A digital signature hashes a message and applies a private-key operation; verification with the public key supports integrity and signer authentication.\n\nNonrepudiation also depends on identity proofing, private-key control, timestamps, records, and law, not mathematics alone.",
          "practical": "For encrypted, hashed, MAC-protected, and digitally signed messages, write which security properties each method does and does not provide.",
          "tables": [
            {
              "title": "Cryptographic building blocks",
              "headers": [
                "Mechanism",
                "Key material",
                "Primary properties"
              ],
              "rows": [
                [
                  "Symmetric encryption",
                  "Shared secret",
                  "Confidentiality; integrity only in authenticated modes"
                ],
                [
                  "Hash",
                  "No key",
                  "Change detection and one-way representation"
                ],
                [
                  "MAC",
                  "Shared secret",
                  "Integrity and shared-source authentication"
                ],
                [
                  "Digital signature",
                  "Private/public key pair",
                  "Integrity and signer authentication"
                ]
              ]
            }
          ]
        },
        {
          "title": "Public key infrastructure and key management",
          "lead": "Keys are the durable security problem behind otherwise sound cryptography.",
          "keyIdeas": [
            "Certificates bind public keys to named subjects under a trust model.",
            "Revocation and expiration limit reliance on compromised or obsolete credentials.",
            "Private keys need generation, storage, access, backup, rotation, and destruction controls.",
            "Key recovery is appropriate for encryption keys, not usually signing keys."
          ],
          "content": "A certification authority signs certificates that bind a public key to an identity or attribute. Registration authorities support identity proofing. Relying parties validate the chain to a trusted root, intended key usage, subject name, validity period, algorithm constraints, and revocation status. Certificate policies and practice statements describe how assurance is established. Revocation lists provide signed lists of invalid certificates; online status protocols offer more timely responses but introduce availability and privacy considerations.\n\nShort-lived certificates reduce reliance on revocation. Certificate pinning narrows trust but creates operational risk when keys or providers change. Transparency logs help detect misissued public certificates. Key management spans secure random generation, approved algorithms and lengths, protected distribution, hardware-backed or software storage, separation of duties, usage restrictions, inventory, rotation, escrow where authorized, compromise response, and verified destruction. Encryption keys may need recovery for business continuity.\n\nRecovering a private signing key can undermine the claim that only one signer controlled it, so signature continuity is normally handled through new keys and preserved verification evidence.",
          "practical": "Trace a web certificate from request and identity validation through issue, deployment, monitoring, renewal, emergency revocation, and removal. Most outages occur because ownership or renewal is unclear."
        },
        {
          "title": "Physical and environmental design",
          "lead": "Facilities protect people first, then the services and information they depend on.",
          "keyIdeas": [
            "Site selection evaluates natural, utility, political, and neighboring hazards.",
            "Layered zones delay, detect, and respond to unauthorized entry.",
            "Power, cooling, fire, and water controls support availability.",
            "Life safety overrides asset protection."
          ],
          "content": "Site selection considers flood plains, seismic activity, storms, transportation hazards, crime, civil unrest, neighboring businesses, utility reliability, emergency response, communications diversity, and flight or vehicle approach. A facility's outward appearance and signage can either reveal or obscure its function. Layered protection uses property boundaries, lighting, landscaping, barriers, controlled entrances, guards, badges, mantraps where justified, surveillance, intrusion detection, locked rooms, racks, and equipment enclosures.\n\nControls should support accessibility and emergency egress.\n\nTailgating is addressed through culture, entry design, monitoring, and response rather than badges alone. Power design may include conditioned utility service, uninterruptible power for short interruptions and orderly shutdown, and generators for longer operation. Cooling controls temperature, humidity, airflow, particulates, and static. Fire protection combines detection, alarm, safe evacuation, containment, and suppression appropriate to occupancy and equipment. Water sensors and shutoff knowledge matter because suppression and plumbing failures can be as damaging as fire.",
          "practical": "Walk through a facility from the street to a server rack. At each boundary, note deterrence, detection, delay, authorized entry, emergency exit, and response."
        },
        {
          "title": "Architecture vulnerabilities and distributed systems",
          "lead": "Client-server, distributed, serverless, edge, and data architectures fail at their trust assumptions and interfaces.",
          "keyIdeas": [
            "Race conditions and state confusion create integrity failures.",
            "Distributed systems must handle partial failure and inconsistent views.",
            "Management and orchestration planes concentrate authority.",
            "Caching and replication change confidentiality and deletion behavior."
          ],
          "content": "Client-server designs centralize some control but trust clients to present inputs and servers to enforce policy. Distributed systems add partial failure: one component may be unreachable while others continue, messages may arrive late or twice, and nodes may disagree about state. Idempotent operations, authenticated messaging, replay protection, bounded retries, consensus appropriate to the problem, and explicit failure modes preserve integrity and availability.\n\nRace conditions arise when security depends on a state that can change between check and use.\n\nTime-of-check/time-of-use flaws, double spending, inconsistent authorization caches, and concurrent updates require transactional design or synchronization rather than faster execution. Caches, search indexes, replicas, queues, and analytics systems create additional copies that must inherit classification, access, retention, and deletion. Serverless and edge platforms reduce infrastructure administration but introduce event sources, short-lived runtimes, provider identities, deployment packages, and externally managed control planes.\n\nArchitecture reviews should examine tenant isolation, administrator recovery, metadata services, secret delivery, logging, geographic processing, failure concentration, and the path by which trusted software is built and updated.",
          "practical": "Analyze a purchase workflow under duplicate requests, delayed messages, stale authorization, service timeout, and regional failure. Specify which outcomes are safe and how the system proves them."
        },
        {
          "title": "Industrial, embedded, IoT, and safety-critical systems",
          "lead": "Systems that control physical processes require security decisions that preserve safety, determinism, and long equipment lifecycles.",
          "keyIdeas": [
            "Safety and availability can outrank confidentiality.",
            "Legacy protocols may assume trusted local networks.",
            "Patching can require vendor validation and maintenance windows.",
            "Segmentation and passive monitoring reduce exposure without disrupting process."
          ],
          "content": "Operational technology includes industrial control systems, supervisory control and data acquisition, programmable controllers, sensors, actuators, and engineering workstations. Cyber-physical action can harm people, equipment, or the environment. Security changes therefore involve process engineers and safety professionals, and emergency manual operation may be more important than ordinary IT recovery. Many field protocols lack authentication or encryption because they were designed for isolated, deterministic environments.\n\nConnecting them to enterprise networks and remote support introduces paths their designers did not anticipate.\n\nAsset discovery may need passive methods because aggressive scanning can disrupt fragile devices. Supported protocol gateways, strict zones and conduits, unidirectional transfer where appropriate, controlled vendor access, application allowlisting, and protected engineering stations reduce risk. Embedded and consumer IoT devices add constrained hardware, default credentials, insecure update paths, opaque cloud dependencies, microphones or cameras, and uncertain support periods. Procurement should require unique identity, secure update, vulnerability response, data controls, and defined end of support.\n\nWhen a component cannot be secured to the required level, isolation and replacement planning become architectural controls.",
          "practical": "Draw zones for an industrial process from corporate users to engineering workstations, supervisory servers, controllers, and safety systems. Permit only justified conduits and define a safe loss-of-communications state."
        }
      ]
    },
    {
      "title": "Domain 4: Communication and Network Security",
      "weight": "13% of the exam",
      "intro": "Network security depends on understanding how communication actually moves, where trust changes, and which controls can observe or constrain it.",
      "topics": [
        {
          "title": "Layered network models and encapsulation",
          "lead": "Models give engineers a shared language for locating functions and failures without pretending that every protocol fits neatly.",
          "keyIdeas": [
            "The OSI model has seven conceptual layers.",
            "TCP/IP groups functions into a practical protocol suite.",
            "Encapsulation adds headers as data moves down a stack.",
            "Security controls need visibility at the layer where the relevant meaning exists."
          ],
          "content": "The OSI layers are physical, data link, network, transport, session, presentation, and application. The TCP/IP model commonly groups these into link, internet, transport, and application layers. A web request becomes application data, a transport segment, an IP packet, and a link-layer frame before transmission. Each hop may replace the link header while the IP path continues. Switches primarily forward frames using link-layer addresses; routers forward packets between networks using IP routes.\n\nStateful firewalls track conversations across network and transport information. Proxies and application gateways interpret higher-level protocols. Encryption changes visibility: a network control may see endpoints and timing while the application or TLS terminator sees content. Troubleshooting works from evidence rather than rigidly ascending a model. A service failure may arise from power, link negotiation, addressing, routing, name resolution, transport filtering, certificate validation, authentication, or application state.\n\nCaptures taken at multiple boundaries show how encapsulation, translation, and policy alter traffic.",
          "practical": "Follow one HTTPS request from a browser through DNS, local switching, routing, transport, TLS, reverse proxy, and application. At each step, name what can be observed and changed."
        },
        {
          "title": "Ethernet, switching, and local segmentation",
          "lead": "Local networks rely on address learning and broadcast behavior that need deliberate boundaries.",
          "keyIdeas": [
            "Ethernet uses MAC addresses within a broadcast domain.",
            "VLANs create logical layer-two segments but require routing between them.",
            "Loop-prevention protocols maintain a usable topology.",
            "Port security and network access control limit unauthorized attachment."
          ],
          "content": "An Ethernet switch learns source MAC addresses on ports and forwards known destinations selectively; unknown unicast and broadcast traffic is flooded within the VLAN.\n\nAddress Resolution Protocol maps IPv4 addresses to link-layer addresses on a local network. Because classic ARP lacks strong authentication, attackers may poison mappings unless segmentation, inspection, endpoint protection, or cryptographic upper-layer protocols limit the effect. Virtual LANs separate broadcast domains on shared switching infrastructure. Access ports serve one VLAN; trunks carry tagged frames for multiple VLANs. Communication between VLANs crosses a router or layer-three switch, creating a policy enforcement opportunity.\n\nNative-VLAN mismatches, unused ports, permissive trunks, and weak management-plane access can undermine the design. Spanning Tree prevents forwarding loops by placing redundant paths into non-forwarding states until needed. Link aggregation combines links under controlled rules. Network access control may assess device identity, user identity, and posture before assigning a segment or policy. Local segmentation reduces lateral movement only when routing and management paths enforce the intended boundaries.",
          "practical": "Document the purpose, allowed flows, gateway, addressing, management method, and monitoring for each VLAN. A VLAN named “secure” has no security value without an enforced policy."
        },
        {
          "title": "IP addressing, routing, and translation",
          "lead": "Routing determines the path between networks; security depends on controlling and observing those path decisions.",
          "keyIdeas": [
            "IPv4 and IPv6 use prefixes to identify networks.",
            "Routers choose the most specific matching route.",
            "Dynamic routing exchanges reachability and needs authentication and filtering.",
            "NAT changes addresses but is not a substitute for access control."
          ],
          "content": "CIDR expresses an address and prefix length. Longer prefixes describe more specific routes and take precedence over less specific matches. Subnetting divides address space for scale, policy, and failure containment. IPv6 expands address space and relies heavily on neighbor discovery and router advertisements, which require controls analogous to protections used for IPv4 local-network protocols. Static routes are predictable but difficult to maintain at scale.\n\nInterior routing protocols exchange information within an administrative domain; exterior routing connects autonomous systems.\n\nRoute authentication, prefix filtering, peer control, monitoring, and resilient design reduce hijacking and misconfiguration. Control-plane protection is distinct from filtering ordinary user traffic. Network address translation rewrites addresses and often ports. It conserves IPv4 space and can obscure internal addressing, but the security effect usually comes from the stateful policy deployed with it. A deliberate firewall rule can permit or deny traffic without translation.\n\nTunnels create logical paths across another network and must be included in topology, inspection, and incident analysis.",
          "practical": "Given a route table, identify the selected route for several destinations by longest-prefix match. Then state where a security policy is enforced and where address translation occurs."
        },
        {
          "title": "Transport protocols and common services",
          "lead": "Transport protocols create different reliability, ordering, and state assumptions that affect security controls.",
          "keyIdeas": [
            "TCP provides an ordered byte stream with connection state.",
            "UDP provides datagrams without built-in delivery guarantees.",
            "Ports identify service endpoints, not trustworthy applications.",
            "Common infrastructure services are high-value dependencies."
          ],
          "content": "TCP uses a handshake, sequence numbers, acknowledgments, flow control, and retransmission to provide an ordered stream. Resource exhaustion can target half-open or established state. UDP has lower overhead and preserves message boundaries but leaves reliability to the application. QUIC builds secure multiplexed transport over UDP and changes what middleboxes can observe. Port numbers are conventions. A malicious service can listen on a familiar port, and a legitimate protocol can use a nonstandard one.\n\nSecurity devices should combine network context with protocol validation, identity, and endpoint telemetry. Ephemeral ports identify client-side conversations and matter when reading firewall or flow logs. DNS, DHCP, NTP, directory services, and routing infrastructure deserve special protection because many systems inherit trust from them. DNS security includes controlled recursion, protected administration, resilient authoritative service, validation where supported, and monitoring for abuse.\n\nTime synchronization supports authentication, certificate validation, distributed troubleshooting, and trustworthy logs.",
          "practical": "Capture a DNS lookup and TCP or QUIC web connection in an authorized lab. Identify endpoints, ports, state transitions, name-resolution dependencies, and what remains encrypted."
        },
        {
          "title": "Firewalls, proxies, and network policy enforcement",
          "lead": "Policy devices differ mainly in the context they understand and the place where they enforce a decision.",
          "keyIdeas": [
            "Packet filters evaluate individual headers.",
            "Stateful firewalls track conversations.",
            "Application proxies terminate and re-originate sessions.",
            "Default-deny policies need explicit business-owned exceptions."
          ],
          "content": "Stateless packet filters evaluate fields such as addresses, protocol, direction, and port without remembering a conversation. Stateful inspection maintains connection state and can permit response traffic associated with an authorized flow. Application proxies act as intermediaries and can validate protocol behavior, authenticate users, inspect content where lawful, and conceal direct endpoints. Next-generation labels often combine stateful filtering, application identification, identity context, intrusion prevention, URL controls, and encrypted-traffic handling.\n\nCapability does not guarantee effective policy. Broad rules, stale objects, unreviewed exceptions, asymmetric routing, and management-plane exposure commonly cause failure. Rules should state source, destination, service, action, business purpose, owner, logging, expiration, and approval. Order matters in first-match systems. Egress control limits unauthorized outbound communication and helps detect compromised hosts. Host firewalls remain useful even behind network controls because workloads move and internal networks are not inherently trusted.",
          "practical": "Review a firewall rule as a sentence: who needs to reach what service, for which business reason, during what period, and what evidence should be logged. Remove “any” values that the sentence cannot justify."
        },
        {
          "title": "Wireless, mobile, and short-range communication",
          "lead": "Radio crosses walls and administrative boundaries, so authentication and encryption must not depend on physical containment.",
          "keyIdeas": [
            "Modern enterprise Wi-Fi separates user authentication from link encryption.",
            "Personal pre-shared keys do not scale well.",
            "Rogue and evil-twin access points exploit trust in network names.",
            "Bluetooth, NFC, and cellular each have distinct range and pairing assumptions."
          ],
          "content": "Modern Wi-Fi security uses reliable authenticated encryption and protected management features where available. Enterprise deployments commonly use 802.1X with an EAP method and a RADIUS-backed identity service so users or devices receive individual authentication rather than sharing one password. Client validation of the authentication server's certificate is essential; otherwise an evil twin may capture credentials. Wireless architecture separates guest, managed-device, operational-technology, and administrative access according to risk.\n\nControllers, access points, identity services, certificate enrollment, radio monitoring, and wired uplinks all form part of the trust boundary. A hidden network name or MAC filtering offers little meaningful protection. Bluetooth and other personal-area protocols rely on discovery and pairing modes whose safety varies by version and device capability. NFC's short range reduces but does not eliminate risk. Mobile networks add carrier trust, subscriber identity, baseband software, roaming, and signaling systems.\n\nMobile-device management, application control, certificate-based access, and remote revocation complement link security.",
          "practical": "In an authorized environment, inspect the certificate prompt for enterprise Wi-Fi. Identify the server name and trusted issuer a user should verify before entering credentials."
        },
        {
          "title": "Secure remote access and private communication",
          "lead": "A secure channel must authenticate endpoints, protect traffic, and limit what the remote party may reach after connection.",
          "keyIdeas": [
            "IPsec protects IP traffic in transport or tunnel mode.",
            "TLS commonly protects application sessions.",
            "Remote access design includes endpoint posture and authorization.",
            "Split tunneling trades bandwidth for inspection and path control."
          ],
          "content": "IPsec uses security associations to define algorithms, keys, lifetimes, and traffic selectors. Authentication Header provides integrity and origin authentication but not confidentiality and interacts poorly with address translation.\n\n## Encapsulating Security\n\nPayload commonly supplies confidentiality and integrity. Tunnel mode wraps an original packet for gateway-to-gateway or remote-access designs; transport mode protects the payload between endpoints. TLS authenticates servers through certificates and can authenticate clients as well. Protocol version, cipher negotiation, certificate validation, private-key security, session resumption, and termination architecture determine its protection. SSH provides encrypted remote shells, tunneling, and file transfer but requires careful host-key verification and administrative key lifecycle management.\n\nA VPN is only the channel. Strong identity, device health, least-privilege authorization, DNS handling, logging, session limits, and rapid revocation determine what the connection permits. A zero-trust access broker may publish a specific application instead of placing a device broadly on an internal network. Split tunneling sends some traffic outside the protected enterprise path, improving performance while reducing centralized visibility.",
          "practical": "Compare a full-tunnel VPN, split-tunnel VPN, and application-specific access broker for a contractor. Consider device trust, reachable resources, inspection, latency, and revocation."
        },
        {
          "title": "Network attacks, detection, and resilient design",
          "lead": "Architecture should limit the blast radius of interception, impersonation, route manipulation, and resource exhaustion.",
          "keyIdeas": [
            "Segmentation constrains movement only when identities and flows are enforced.",
            "IDS detects; IPS can intervene inline.",
            "DDoS resilience requires upstream capacity and response coordination.",
            "Out-of-band management reduces dependence on the production network."
          ],
          "content": "Network attacks include passive observation, spoofing, on-path manipulation, replay, name or route poisoning, scanning, session disruption, covert channels, and denial of service. Cryptographic upper-layer protocols reduce the value of a compromised local segment, while network controls provide containment, telemetry, and enforcement. Intrusion detection systems observe and alert; intrusion prevention systems operate inline and can block or alter traffic. Signature methods recognize known patterns, while anomaly methods compare activity with a model or baseline and require tuning.\n\nNetwork flow records summarize conversations efficiently; packet capture offers detail at higher storage and privacy cost. Endpoint and identity evidence are often needed to interpret encrypted traffic. Resilience uses diverse paths, redundant devices, tested failover, rate limits, capacity planning, upstream filtering, content distribution, and practiced provider contacts. Segmentation separates users, servers, management, backup, development, and high-risk devices. Management interfaces should use dedicated protected paths, strong authentication, restricted administration stations, and recoverable configurations.",
          "practical": "Create a simple data-flow allowlist between three network zones. Then identify the logs and failure tests needed to prove that unauthorized paths remain blocked."
        },
        {
          "title": "Email, messaging, voice, and collaboration security",
          "lead": "Human communication systems combine identity, content, external federation, automation, and urgent social pressure.",
          "keyIdeas": [
            "Email sender authentication helps domain reputation but does not prove a message is trustworthy.",
            "Gateways inspect content and links within privacy and encryption limits.",
            "Voice and video inherit signaling, media, identity, and availability risks.",
            "Collaboration integrations and bots hold valuable delegated authority."
          ],
          "content": "SMTP was designed for store-and-forward delivery without strong sender authentication. SPF states which systems may send for a domain, DKIM signs selected message fields on behalf of a domain, and DMARC tells receivers how to evaluate alignment and report results. These mechanisms reduce domain spoofing; they do not prevent compromise of a legitimate account, misleading display names, or lookalike domains.\n\nMail security combines reputation, attachment analysis, link controls, malware defense, sandboxing, user reporting, and identity signals.\n\nEnd-to-end content encryption protects confidentiality but may reduce gateway inspection, creating a design tradeoff. Administrative logs, mailbox delegation, forwarding rules, OAuth grants, and recovery events are important investigation sources. Voice and video systems use signaling, media streams, directories, meeting controls, and sometimes public telephone gateways. Threats include toll fraud, eavesdropping, caller-ID spoofing, meeting intrusion, recording exposure, and denial of service.\n\nCollaboration platforms add guest users, public links, retention, bots, webhooks, and third-party apps. Each integration should have an owner, minimal scopes, reviewed data access, and rapid revocation.",
          "practical": "Trace a phishing-resistant approval workflow for a payment request received through email or chat. Include a trusted secondary verification path and evidence of the final decision."
        },
        {
          "title": "Network management and observability",
          "lead": "The systems used to configure and observe a network often have more authority than the traffic they manage.",
          "keyIdeas": [
            "Management planes should be isolated and strongly authenticated.",
            "Configuration backups need integrity and secret protection.",
            "SNMP versions provide very different security properties.",
            "Flow, packet, and device telemetry answer different questions."
          ],
          "content": "Network administration should originate from controlled workstations over protected management paths. Devices use individual administrative identities or accountable privileged brokering, role-based commands, configuration authorization, secure protocols, time synchronization, and centralized logs. Default services and community strings should be removed. SNMPv3 can provide authenticated and encrypted management, while earlier community-string designs offer weak protection. Configuration repositories should version changes, protect embedded secrets, validate syntax, support peer review, and preserve known-good recovery.\n\nAutomated configuration is powerful: a faulty or malicious template can alter the entire network rapidly. Deployment therefore uses scoped credentials, staged rollout, health checks, rollback, and separation between authoring and approval. Device logs explain control decisions, flow records summarize conversations, routing telemetry shows path changes, and packet capture reveals protocol detail. Observability design chooses collection points around important boundaries and maintains capacity during incidents.\n\nManagement availability needs an out-of-band path that does not depend entirely on the production control plane it is meant to repair.",
          "practical": "Document how an administrator reaches a core router when production identity, DNS, and routing are unavailable. The emergency path should be both usable and independently protected."
        }
      ]
    },
    {
      "title": "Domain 5: Identity and Access Management",
      "weight": "13% of the exam",
      "intro": "IAM establishes who or what is acting, how confidently that identity is known, and which actions are permitted throughout the identity lifecycle.",
      "topics": [
        {
          "title": "Identity lifecycle and authoritative sources",
          "lead": "Access quality depends on accurate identity records from creation through changes, leave, and eventual removal.",
          "keyIdeas": [
            "Authoritative sources initiate identity events.",
            "Joiner, mover, and leaver processes need accountable timing.",
            "Human, service, device, and workload identities require different governance.",
            "Orphaned and shared accounts weaken accountability."
          ],
          "content": "An identity lifecycle begins with proof that an entity exists and is eligible for a relationship. An authoritative source: often human resources for employees or a contract system for vendors: triggers creation. Provisioning establishes accounts and attributes. Role or status changes should revise access promptly. Termination disables access, recovers assets, preserves necessary records, and eventually removes accounts according to policy.\n\nMovers are often more difficult than leavers because old privileges quietly accumulate.\n\nEvent-driven automation, manager and owner approval, separation of duties, and periodic certification reduce privilege creep. Emergency termination may require coordinated revocation of logical access, badges, tokens, keys, remote sessions, cloud accounts, and third-party access before notification. Non-human identities include service accounts, API keys, certificates, robots, devices, and ephemeral workloads. They need owners, narrow purpose, noninteractive restrictions, protected credentials, rotation, usage monitoring, and retirement tied to the service lifecycle.\n\nShared accounts should be eliminated where possible; when unavoidable, checkout, session recording, and individual authentication restore some accountability.",
          "practical": "Trace a role change from the authoritative source to every downstream system. Record expected completion times, failed-provisioning alerts, rollback, and who confirms excessive access was removed."
        },
        {
          "title": "Identification, authentication, and authorization",
          "lead": "These stages answer different questions and should not be blurred together.",
          "keyIdeas": [
            "Identification claims an identity.",
            "Authentication verifies evidence for the claim.",
            "Authorization decides whether an action is allowed.",
            "Accounting records relevant activity and supports review."
          ],
          "content": "A username, certificate subject, device identifier, or service principal identifies an entity. Authentication evaluates one or more authenticators associated with that identity. Authorization applies policy to the authenticated subject, requested action, resource, and context. Accounting or auditing records the security-relevant result. Authentication factors are something known, possessed, or inherent; some frameworks also discuss location or behavior as contextual signals. Two passwords are not two-factor authentication because both use the knowledge factor.\n\nA password plus a cryptographic hardware key combines independent factors. Enrollment and recovery must be at least as trustworthy as routine login, since attackers target weaker help-desk or reset paths. Authorization should be checked at the point of use and use server-side trusted attributes. Authentication does not imply broad permission. Session management carries the authenticated state after login, making token confidentiality, rotation, timeout, reauthentication, logout, and revocation part of access control.",
          "practical": "For a password reset, separate identification, identity proofing, authentication, authorization to change the secret, notification, and audit evidence. Look for a weak shortcut between stages."
        },
        {
          "title": "Passwords, MFA, and passwordless authentication",
          "lead": "Authentication strength is determined by the complete ceremony, including enrollment, recovery, device security, and resistance to phishing.",
          "keyIdeas": [
            "Passwords should be long, unique, screened, and manager-supported.",
            "MFA combines independent factors.",
            "One-time codes can still be phished and relayed.",
            "Public-key authenticators can bind authentication to the legitimate site."
          ],
          "content": "Password policy should encourage long unique secrets, password managers, breached-password screening, protected storage with salted adaptive hashes, rate limiting, and risk-based monitoring. Frequent forced changes often produce predictable variations and should be reserved for compromise or a justified requirement. Knowledge-based security questions are weak because answers are discoverable and reusable. MFA limits damage when one factor is compromised. SMS and one-time codes improve on passwords alone but may be intercepted or entered into a real-time phishing proxy.\n\nPush approval can suffer fatigue attacks. Cryptographic authenticators such as FIDO2 security keys and platform passkeys prove possession of a private key and bind the response to the legitimate service origin, providing stronger phishing resistance. Passwordless does not mean riskless. Device enrollment, cloud synchronization, biometric unlock, recovery, shared-device use, and account removal need design. Biometrics are usually a local activation mechanism rather than a secret sent to a server.\n\nFalse acceptance and false rejection vary with thresholds, while crossover error rate offers a rough comparison under defined testing conditions.",
          "practical": "Create an authentication assurance comparison that includes phishing, theft, malware, recovery, accessibility, shared devices, and administrative reset, not only the login screen."
        },
        {
          "title": "Access-control models",
          "lead": "Models determine who defines permissions and which attributes influence the decision.",
          "keyIdeas": [
            "DAC lets owners exercise discretion within policy.",
            "MAC uses centrally controlled labels and clearances.",
            "RBAC assigns permissions through job roles.",
            "ABAC evaluates attributes and context through policy."
          ],
          "content": "Discretionary access control allows an owner or authorized subject to grant access, commonly through access-control lists or capabilities. It is flexible but can spread permissions inconsistently. Mandatory access control uses centrally assigned labels and clearances under rules users cannot override, fitting multilevel environments. Role-based access control groups permissions into roles that reflect job functions. Users receive roles, and role engineering must avoid a unique role for every person.\n\nHierarchies can inherit permission, while constraints enforce separation of duties. Attribute-based control evaluates subject, object, action, and environmental attributes, supporting contextual decisions such as permitting a clinician to view assigned patient data from a managed device during a shift. Rule-based controls apply systemwide conditions, while risk-adaptive approaches incorporate signals such as device posture, location, behavior, and transaction sensitivity. Whatever the model, policy needs a trusted decision point, reliable attributes, enforcement at every relevant resource, understandable denial behavior, and auditability.",
          "practical": "Express one authorization decision in DAC, RBAC, and ABAC terms. Compare who maintains it, how it changes, and which mistakes each model makes likely.",
          "tables": [
            {
              "title": "Access-control models",
              "headers": [
                "Model",
                "Decision basis",
                "Common strength"
              ],
              "rows": [
                [
                  "DAC",
                  "Owner-granted permissions",
                  "Flexibility"
                ],
                [
                  "MAC",
                  "Labels and clearances",
                  "Central multilevel enforcement"
                ],
                [
                  "RBAC",
                  "Job roles",
                  "Administration at organizational scale"
                ],
                [
                  "ABAC",
                  "Subject, resource, action, and context attributes",
                  "Fine-grained contextual policy"
                ]
              ]
            }
          ]
        },
        {
          "title": "Federation, SSO, and identity protocols",
          "lead": "Federation lets one administrative domain rely on identity assertions made by another.",
          "keyIdeas": [
            "SSO is a user experience; federation is a trust relationship.",
            "SAML commonly carries browser-based enterprise assertions.",
            "OAuth delegates authorization; OpenID Connect adds authentication.",
            "Token audience, issuer, signature, time, and redirect validation are essential."
          ],
          "content": "Single sign-on allows a user to authenticate once and reach multiple services. Federation crosses a trust boundary: an identity provider authenticates the subject and issues an assertion or token that a service provider or relying party validates. The agreement includes identifiers, attributes, assurance, keys, lifecycle, incident handling, and responsibility. SAML uses signed XML assertions and is common in enterprise browser SSO.\n\nOAuth 2.0 is an authorization framework through which a client receives limited access to a resource on a user's or its own behalf.\n\nIt is not by itself an authentication protocol. OpenID Connect adds an identity layer and ID token. Kerberos uses a trusted key-distribution center and time-limited tickets for authentication within a realm. Secure implementations validate issuer, audience, signature algorithm, key, expiration, nonce or state, redirect URI, and intended token type. Tokens should be short-lived, minimally scoped, protected in transit and storage, and revocable or compensable where risk requires.\n\nFederation concentrates risk in identity services, signing keys, domain ownership, and administrative recovery.",
          "practical": "Draw an OpenID Connect login involving user, browser, client, authorization server, and API. Mark which party receives each token and what it must validate."
        },
        {
          "title": "Privileged access management",
          "lead": "Administrative authority is powerful enough to bypass ordinary controls and therefore needs its own lifecycle and evidence.",
          "keyIdeas": [
            "Administrators should use separate ordinary and privileged identities.",
            "PAM can vault credentials, broker sessions, and issue just-in-time privilege.",
            "Break-glass access must be available, protected, and reviewed.",
            "Standing privilege increases exposure."
          ],
          "content": "Privileged accounts can alter security configuration, read broad datasets, create identities, suppress logs, or recover systems. Administrators should use named ordinary accounts for routine work and distinct privileged accounts only for administrative tasks. Direct remote access from unmanaged endpoints should be replaced with hardened administration workstations or jump services where risk warrants. Privileged access management systems inventory accounts, vault and rotate credentials, require approval, broker connections, record sessions, and issue just-in-time or just-enough authority.\n\nSession recording supports accountability but contains sensitive information and needs access and retention controls. Automated service credentials should be retrieved at runtime rather than embedded in code. Emergency accounts protect availability when ordinary identity infrastructure fails. They need strong offline or separately controlled credentials, monitoring, tested procedures, immediate notification on use, and post-event review. Eliminating all emergency access can be as dangerous as leaving it unrestricted.",
          "practical": "Design a privileged database change: individual request, owner approval, time-limited role, protected session, command evidence, credential rotation, and verification that privilege expired."
        },
        {
          "title": "Access reviews and lifecycle assurance",
          "lead": "Periodic review tests whether real access still matches authorized business need.",
          "keyIdeas": [
            "Managers know job need; resource owners know permission risk.",
            "Reviews should show understandable entitlements and recent use.",
            "Toxic combinations reveal separation-of-duties conflicts.",
            "Removal must be verified, not merely requested."
          ],
          "content": "Access certification asks an accountable reviewer to confirm, modify, or revoke entitlements. A manager can judge whether a person still performs a function, while a resource owner understands the meaning and risk of a permission. High-risk access deserves more frequent and evidence-rich review than ordinary access. Raw group names are poor review evidence. Campaigns should translate entitlements into business meaning, show how access was obtained, last use, peer comparison, risk, expiration, and conflicting privileges.\n\nReviewers need a genuine revoke option and escalation for nonresponse. Rubber-stamp approval is an assurance failure, not proof that access is correct. Continuous controls supplement periodic review by detecting dormant accounts, privilege outside a role, ownership gaps, shared credentials, excessive service-account use, and failed deprovisioning. Metrics should include verified removal time and repeated exceptions. The goal is not to finish a campaign; it is to reduce unjustified authority.",
          "practical": "Take a sample entitlement and rewrite its technical group name into a statement a manager can decide: resource, permitted action, business role, sensitivity, source, last use, and conflict."
        },
        {
          "title": "Physical access and converged identity",
          "lead": "Badges, locks, visitors, and logical identities share lifecycle and accountability problems.",
          "keyIdeas": [
            "Physical and logical access should change together.",
            "Anti-passback and mantraps address different entry risks.",
            "Visitor access needs sponsorship, limitation, and return.",
            "Safety and accessibility constrain physical controls."
          ],
          "content": "Physical identity begins with trustworthy badge issuance and ends with prompt recovery or invalidation. Access levels should reflect role, hours, location, and risk. Anti-passback detects or prevents repeated use of one credential without a matching exit. Mantraps control passage between doors but require safety, accessibility, emergency-release, and staffing considerations. Visitors should be identified according to risk, sponsored, given visibly distinct and time-limited credentials, escorted where necessary, and recorded.\n\nDeliveries, cleaning, maintenance, and emergency responders need processes that do not rely on social familiarity. Tailgating resistance comes from design, awareness, observation, and polite challenge supported by culture. Converged systems coordinate human-resource events with badge, directory, application, and facility changes. That improves speed but also creates a high-impact dependency. Offline emergency access, privacy limits on location records, separation of administration, and audit protection should be part of the design.",
          "practical": "Walk through employee termination as a single timeline covering accounts, active sessions, tokens, API keys, badges, keys, parking, lockers, devices, and third-party portals."
        },
        {
          "title": "Identity proofing and enrollment",
          "lead": "Before authentication can be strong, the organization must establish which real person, device, or organization an identity represents.",
          "keyIdeas": [
            "Proofing strength should match account risk.",
            "Evidence validation, verification, and resolution are distinct tasks.",
            "Remote proofing creates fraud, privacy, and accessibility concerns.",
            "Enrollment binds authenticators to the established identity."
          ],
          "content": "Identity proofing resolves a claimed identity to one record, validates evidence as genuine, and verifies that the applicant is rightfully associated with it. Methods may inspect authoritative records, physical documents, trusted organizational sponsorship, in-person presence, remote video, biometrics, or prior relationships. More evidence is not automatically better if sources share the same weakness. The required assurance depends on consequences. A newsletter account needs little proof; payroll change, privileged administration, or digital signing may need stronger verification and separation of duties.\n\nRemote proofing must address forged documents, synthetic identities, deepfakes, stolen devices, coerced applicants, unequal access to documentation, and collection of sensitive evidence. Data minimization and retention apply to proofing records. Enrollment binds one or more authenticators to the proofed identity through a protected process. Initial credentials should be delivered through an independent or appropriately trusted channel, expire promptly, and require replacement.\n\nAdding a new factor later is itself a high-risk enrollment event. Notifications let the legitimate subject challenge unauthorized changes.",
          "practical": "Design proofing and enrollment for a low-risk club account and a privileged administrator. Explain why the evidence, approval, authenticator, and recovery processes differ."
        },
        {
          "title": "Device and workload identity",
          "lead": "Machines need verifiable identities so services can distinguish an authorized workload from an imitation.",
          "keyIdeas": [
            "Device certificates bind keys to managed assets.",
            "Workload identities should be short-lived and automatically issued.",
            "Attestation can add evidence about platform state.",
            "Secrets copied across fleets create shared compromise."
          ],
          "content": "A device identity may be rooted in a certificate, hardware-protected key, enrollment record, or management platform. Authentication proves possession of key material; authorization also considers owner, health, configuration, location, and intended service. A certificate alone does not guarantee that the device is patched or uncompromised. Workloads in cloud and orchestration environments should obtain identity from the platform rather than share static API keys.\n\nShort-lived credentials bound to service, namespace, instance, or deployment reduce reuse and simplify rotation.\n\nMutual TLS can authenticate both service endpoints, but certificate issue, naming, authorization, revocation, and observability remain necessary. Attestation reports measurements or claims about boot and runtime state to a verifier. It can strengthen admission decisions under explicit trust assumptions but cannot prove that all application behavior is benign. Inventory connects machine identities to owners and lifecycle. Decommissioning removes certificates, trust records, service principals, permissions, and dependent secrets.",
          "practical": "Map how a new workload receives an identity, obtains a database credential, is authorized, rotates its material, produces audit evidence, and loses access when the deployment is removed."
        }
      ]
    },
    {
      "title": "Domain 6: Security Assessment and Testing",
      "weight": "12% of the exam",
      "intro": "Assessment turns claims about security into evidence, while testing examines whether controls behave as expected under defined conditions.",
      "topics": [
        {
          "title": "Assessment strategy and independence",
          "lead": "A useful assessment begins with a question, defined criteria, reliable evidence, and an audience able to act on the result.",
          "keyIdeas": [
            "Scope follows risk and purpose.",
            "Independence increases objectivity but does not replace expertise.",
            "Compliance and security effectiveness are related but different.",
            "Rules of engagement protect systems and people during active testing."
          ],
          "content": "An assessment strategy states objectives, scope, criteria, timing, methods, dependencies, authority, reporting, and follow-up. A control design review asks whether a control could meet its objective. An operating-effectiveness test asks whether it worked consistently over a period. A vulnerability assessment finds and prioritizes weaknesses; a penetration test attempts defined exploitation; an audit compares evidence with criteria. First-party assessments are performed by the organization, second-party assessments by a customer or interested party, and third-party assessments by an independent organization.\n\nIndependence reduces conflicts but must be paired with competence and sufficient evidence. Self-assessment remains useful for frequent operational feedback if limitations are understood. Active tests require authorization and rules of engagement defining targets, permitted techniques, times, contacts, data handling, stop conditions, incident coordination, liability, and cleanup. Testing without written scope can disrupt service or become unauthorized access. Results should distinguish observation, inference, and confirmed fact.",
          "practical": "Write an assessment objective as a question that evidence can answer, such as “Were terminated privileged accounts disabled within four hours throughout the last quarter?”"
        },
        {
          "title": "Audit planning and evidence",
          "lead": "Audit evidence must be sufficient, reliable, relevant, and traceable to the conclusion.",
          "keyIdeas": [
            "Criteria define what should be true.",
            "Sampling supports conclusions about a population under stated assumptions.",
            "Inquiry alone is weaker than observation or reperformance.",
            "Workpapers preserve the path from evidence to finding."
          ],
          "content": "Auditors identify objectives, criteria, population, materiality, sampling, evidence sources, stakeholders, and limitations. Evidence may come from inspection, observation, inquiry, confirmation, recalculation, or reperformance. System-generated evidence is only as reliable as the system, access controls, configuration, and extraction method that produced it. Statistical sampling allows quantified inference; judgmental sampling selects high-risk or informative items without claiming statistical representativeness. Sample size depends on population, expected deviation, tolerable deviation, confidence, and method.\n\nA sample should not be described as random unless each relevant item had an appropriate selection chance. Findings connect condition, criteria, cause, effect or risk, and recommendation. Management owns corrective action and may respond with remediation, compensating control, or authorized acceptance. Workpapers record procedures, evidence, analysis, reviewers, and conclusions so another competent person can understand the work.",
          "practical": "For a patch audit, define the population, authoritative inventory, selection method, evidence of installation, exception criteria, and method for verifying a corrective action."
        },
        {
          "title": "Vulnerability assessment",
          "lead": "Scanning is a measurement process whose results require context, validation, and accountable remediation.",
          "keyIdeas": [
            "Authenticated scans usually provide deeper host evidence.",
            "A vulnerability score is not a complete business risk rating.",
            "False positives and false negatives both matter.",
            "Coverage and asset accuracy limit the conclusion."
          ],
          "content": "Network, host, application, database, cloud, and dependency scanners look for different conditions. Authenticated scanning uses authorized credentials to inspect configurations, packages, and patch state; unauthenticated scanning approximates an external observer. Agent-based methods improve visibility for intermittent devices but introduce deployment and trust requirements. A scanner finding should record affected asset, evidence, severity, exploitability, exposure, business criticality, existing controls, ownership, and remediation.\n\nCommon scoring systems support consistency but do not know the organization's data, attack path, or outage consequence.\n\nThreat intelligence and known exploitation may alter priority. Safe operation requires approved windows, performance limits, credentials, source addresses, contacts, exclusions, and data protection. Coverage metrics compare scanned assets with an authoritative inventory. Re-scanning confirms that a change altered the condition; it does not by itself prove every attack path is closed. Exceptions need risk ownership, expiration, and review.",
          "practical": "Take one hypothetical scanner result and convert it into a risk statement and remediation ticket. Include enough evidence for an administrator to reproduce and verify it."
        },
        {
          "title": "Penetration testing and red teaming",
          "lead": "Authorized adversarial testing demonstrates paths and consequences that isolated findings may miss.",
          "keyIdeas": [
            "A penetration test has scoped objectives and constraints.",
            "Black-, gray-, and white-box describe tester knowledge.",
            "Red teams test detection and response against an objective.",
            "Cleanup and evidence handling are part of the engagement."
          ],
          "content": "A penetration test typically includes planning, reconnaissance, discovery, vulnerability analysis, controlled exploitation, post-exploitation within scope, cleanup, and reporting. The purpose is not to collect the largest number of findings but to show credible attack paths and business effects. White-box testing uses extensive internal knowledge; black-box testing begins with little; gray-box lies between. Red teams emulate an adversary to test people, process, and technology across an objective, often while a blue team defends.\n\nPurple teaming emphasizes collaborative learning and rapid improvement rather than competition. Breach-and-attack simulation automates selected behaviors but cannot reproduce all human adaptation. Rules must specify whether social engineering, persistence, credential access, data exfiltration, denial of service, physical entry, or third parties are permitted. Testers protect obtained data, maintain logs, avoid unnecessary harm, notify through agreed channels, remove artifacts, and verify restoration.\n\nReports provide executive impact, technical evidence, attack narrative, root causes, and prioritized corrective actions.",
          "practical": "Draft rules of engagement for a web test. Include authorization, targets, excluded data, prohibited techniques, stop conditions, communications, evidence handling, cleanup, and retest."
        },
        {
          "title": "Security control testing",
          "lead": "A control test should measure the objective, not merely the presence of a configuration value.",
          "keyIdeas": [
            "Design effectiveness precedes operating effectiveness.",
            "Negative tests verify that prohibited behavior is rejected.",
            "Recovery controls require restoration tests.",
            "Test data and environments need protection."
          ],
          "content": "A preventive control can be tested by attempting an authorized denied action and confirming both enforcement and logging. A detective control requires a known test event, expected telemetry, alert logic, analyst receipt, and timing. A corrective or recovery control needs demonstration that the organization can restore the required outcome within objectives. Static application testing examines code or compiled artifacts without executing the full application.\n\nDynamic testing evaluates a running system.\n\nInteractive methods combine runtime observation with code context. Fuzzing supplies varied or malformed inputs to discover unexpected states. Interface and misuse testing examine authorization boundaries, error handling, concurrency, and business logic. Tests should specify preconditions, inputs, expected result, evidence, cleanup, and pass criteria. Production testing may provide realism but increases risk; controlled environments must remain representative. Synthetic or masked data reduces privacy exposure.\n\nA passing test is limited to the examined version, configuration, path, and time.",
          "practical": "Turn “MFA is enabled” into a suite of positive and negative tests covering enrollment, login, recovery, remembered devices, administrator bypass, factor removal, logging, and revocation."
        },
        {
          "title": "Log, configuration, and account analytics",
          "lead": "Operational data can reveal control drift and suspicious behavior when its origin and limitations are understood.",
          "keyIdeas": [
            "Baselines make change visible.",
            "Configuration assessment compares actual state with approved state.",
            "Account analytics identify dormant, shared, excessive, and anomalous access.",
            "Time, identity, and asset context are essential for correlation."
          ],
          "content": "Configuration assessment collects relevant settings and compares them with hardened baselines, policy, and exceptions. File-integrity monitoring detects selected changes but cannot decide whether a change was authorized. Account analysis examines inactivity, privilege, ownership, credential age, impossible combinations, failed deprovisioning, and unusual use. Log analysis correlates events across identity, endpoint, network, application, cloud, and physical systems. Normalization maps different formats into consistent fields.\n\nReliable time synchronization, durable identifiers, protected collection, documented parsing, and retention make correlation possible.\n\nMissing logs and sudden volume changes are themselves signals. Statistical and machine-learning methods can find outliers, but rarity is not the same as malice. Analysts need business context and explainable evidence. Baselines must account for seasonality, deployments, new populations, and changing workloads. Privacy and employment rules influence what may be monitored and how long evidence may be kept.",
          "practical": "Choose a control and identify one configuration measure, one operational log measure, and one outcome measure. Explain how each could mislead an assessor."
        },
        {
          "title": "Metrics, reporting, and remediation assurance",
          "lead": "Reporting should help each audience make a decision and should distinguish activity, performance, and risk outcome.",
          "keyIdeas": [
            "KPIs measure performance; KRIs signal changing exposure.",
            "Counts need denominators, trends, and context.",
            "Executive and technical audiences need different levels of detail.",
            "Closure requires evidence that the corrective action worked."
          ],
          "content": "A useful metric has a defined owner, source, calculation, frequency, threshold, audience, and action. “500 vulnerabilities” lacks a denominator and context. The percentage of critical internet-facing assets beyond remediation SLA, trended over time and reconciled to inventory, is more actionable. Mean values can conceal severe outliers, so distributions and age bands often matter. Key performance indicators describe process achievement; key risk indicators signal conditions that may increase exposure.\n\nLeading indicators anticipate problems, while lagging indicators describe outcomes already observed. Metrics become harmful when teams optimize the number rather than the objective, such as closing tickets without correcting root causes. Reports should explain scope, period, method, limitations, risk, ownership, and recommended decision. Technical teams need reproducible evidence; executives need business impact and choices. A remediation ticket is not closed merely because someone changed a setting.\n\nRetest, observation over time, or independent evidence should demonstrate that the original condition and cause have been addressed.",
          "practical": "Rewrite a raw count into a decision-ready metric with population, severity, age, trend, owner, threshold, and the action triggered when the threshold is crossed."
        },
        {
          "title": "Third-party assessments and assurance reports",
          "lead": "External assurance can reduce duplicated work only when its scope, method, timing, and exceptions match the relying organization’s needs.",
          "keyIdeas": [
            "A report is evidence about a defined system and period.",
            "Complementary customer controls remain the customer’s responsibility.",
            "Bridge letters address a time gap but do not replace testing.",
            "Right-to-audit provisions preserve options for high-risk services."
          ],
          "content": "Supplier questionnaires are efficient screening tools but rely heavily on self-report. Certifications show conformance to a defined scheme and scope. Independent attestation reports describe controls and testing under a particular standard. Penetration summaries, vulnerability metrics, architecture evidence, resilience exercises, and customer references may supplement assurance according to risk. Reviewers examine the legal entity, products, locations, subservice organizations, control objectives, assessment period, auditor opinion, testing method and sample, deviations, management response, and user responsibilities.\n\nA clean report for one hosting region or service does not cover every product sold by the provider. Point-in-time evidence and period-of-time evidence answer different questions. Complementary user-entity controls state what the customer must implement for the provider's controls to achieve their objective. Complementary subservice controls identify dependencies. Significant exceptions require discussion with the supplier and a decision by the risk owner.\n\nOngoing assurance uses updated reports, incident notice, performance data, material-change notification, and targeted review rather than repeating a full assessment without cause.",
          "practical": "Review a fictional assurance report cover page and scope. Write five questions about excluded services, time period, exceptions, customer controls, and relevance to the purchased product."
        },
        {
          "title": "Test environments, data, and continuous assurance",
          "lead": "Testing infrastructure can contain production-like access and data while receiving less operational protection.",
          "keyIdeas": [
            "Test data should be synthetic or appropriately masked.",
            "Environment differences limit what a result proves.",
            "Continuous control monitoring complements periodic assessment.",
            "Assurance automation needs governed evidence and change control."
          ],
          "content": "Development and test environments often contain copied data, broad debug access, shared credentials, old software, and externally reachable services. They should be classified, inventoried, segmented, patched, monitored, and retired according to their real contents. Production data should be avoided; when use is necessary, authorization, minimization, masking, access, retention, and disposal must be explicit. Representative testing requires alignment in versions, configurations, identity, network, dependencies, scale, and failure behavior.\n\nExact cloning can create dangerous duplicate secrets or external integrations. Controlled substitutes and service virtualization reduce that risk while preserving meaningful behavior. Results should state where the environment differs from production. Continuous control monitoring collects evidence such as configuration state, account lifecycle, scan coverage, logging health, and backup verification on a recurring basis. Automation shortens feedback but can repeatedly produce wrong evidence if queries, parsers, or asset mappings are flawed.\n\nEvidence pipelines need ownership, version control, access restriction, validation, exception handling, and periodic independent challenge.",
          "practical": "Compare a staging environment with production across data, identity, network, secrets, versions, integrations, scale, and monitoring. State which security conclusions remain valid and which do not."
        }
      ]
    },
    {
      "title": "Domain 7: Security Operations",
      "weight": "13% of the exam",
      "intro": "Operations keeps controls dependable under ordinary change and guides the organization through investigation, incident response, recovery, and crisis.",
      "topics": [
        {
          "title": "Operational foundations and administrative controls",
          "lead": "Secure operations depends on repeatable authority, controlled change, trustworthy assets, and disciplined daily practice.",
          "keyIdeas": [
            "Least privilege and need to know apply to operational work.",
            "Separation of duties reduces fraud and error.",
            "Job rotation and mandatory vacation support resilience and detection.",
            "Service levels turn expectations into measurable commitments."
          ],
          "content": "Need to know limits information to what a task requires; least privilege limits the permissions and resources available. Separation of duties divides a sensitive process so one person cannot complete it alone. Dual control requires two people to participate, while split knowledge ensures neither possesses the entire secret. Job rotation develops coverage and may expose irregularities. Mandatory vacation can reveal schemes that require a person's continuous presence.\n\nOperational documentation includes runbooks, contact lists, escalation paths, service-level agreements, maintenance procedures, baselines, inventories, and recovery instructions. Documents must be available during outages and protected from unauthorized change. Teams should understand which decisions can be made routinely and which require a risk owner, emergency authority, or change approval. Privileged tasks use named accounts, protected administration paths, and evidence appropriate to risk.\n\nOperators should not be forced to choose between restoring service and following an unusable process; emergency procedures should be designed, tested, monitored, and reviewed rather than improvised during a crisis.",
          "practical": "Take one recurring administrative task and write its authority, prerequisites, steps, validation, logging, rollback, escalation, and evidence-retention requirements."
        },
        {
          "title": "Logging, monitoring, and detection engineering",
          "lead": "Telemetry becomes security evidence only when collection, meaning, protection, and response are deliberately designed.",
          "keyIdeas": [
            "Log sources should map to detection and investigation needs.",
            "Centralization supports correlation but creates a sensitive repository.",
            "Detection rules need hypotheses, tests, tuning, and owners.",
            "Missing or delayed telemetry reduces confidence."
          ],
          "content": "Useful sources include identity providers, endpoints, networks, applications, databases, cloud control planes, physical access, email, DNS, and security tools. Teams define fields, timestamps, identifiers, event semantics, expected volume, retention, access, and integrity. Collection paths should tolerate temporary disconnection and detect tampering or gaps. A SIEM centralizes and correlates events; SOAR coordinates enrichment and response actions; endpoint tools observe process and host activity; network tools observe flows and protocols.\n\nNone replaces analysts or a detection strategy. A rule begins with an adversary behavior or misuse hypothesis, identifies available evidence, specifies logic and severity, and is tested against true and benign cases. Alerts need ownership, routing, context, runbooks, and performance review. False positives waste attention, while false negatives create unjustified confidence. Metrics such as coverage of high-priority techniques, alert-to-incident conversion, time to triage, and recurrence after remediation are more meaningful than raw alert volume.",
          "practical": "Create a detection for impossible travel or a new privileged assignment. Document the hypothesis, fields, exclusions, severity, response, and a safe test event."
        },
        {
          "title": "Incident response lifecycle",
          "lead": "Incident response limits harm, preserves evidence, restores trustworthy service, and turns experience into improvement.",
          "keyIdeas": [
            "Preparation precedes detection.",
            "Containment decisions balance evidence, harm, and continuity.",
            "Eradication removes causes and persistence.",
            "Recovery restores a known-good service and monitors recurrence."
          ],
          "content": "Preparation establishes authority, roles, contacts, tooling, logging, communications, legal support, providers, evidence processes, playbooks, and exercises. Detection and analysis validate events, determine scope and severity, establish a timeline, identify affected assets and data, and decide whether the situation meets the incident definition. Containment may be short-term, such as isolating a host, and long-term, such as moving service to a clean environment.\n\nAbrupt action can tip off an intruder, destroy volatile evidence, or interrupt essential services, so the incident commander chooses deliberately.\n\nEradication removes malicious artifacts, compromised credentials, vulnerable paths, and persistence while addressing root cause. Recovery rebuilds or restores from known-good sources, validates configuration and data, returns services in stages, and watches for recurrence. Post-incident review reconstructs facts without blame, identifies control and coordination gaps, assigns funded actions, and updates risk assessments and plans. External notification should follow verified facts, applicable deadlines, and authorized legal and communication processes.",
          "practical": "Run a tabletop in which a privileged cloud key is exposed. Force decisions about revocation, evidence, service continuity, customer impact, communication, recovery, and proof that persistence is gone."
        },
        {
          "title": "Digital forensics and evidence handling",
          "lead": "Forensics preserves and interprets evidence so findings remain technically reliable and procedurally defensible.",
          "keyIdeas": [
            "Volatility influences collection order.",
            "Chain of custody records control and transfer.",
            "A forensic image should be verified with hashes.",
            "Analysis should preserve original evidence and document tools and actions."
          ],
          "content": "Potential evidence includes memory, running processes, network connections, temporary files, local storage, cloud logs, backups, mobile devices, and provider records. Volatile information may disappear on power loss, but collection order depends on safety, legal authority, and case objectives. Responders should avoid changing the source more than necessary and document unavoidable changes. Chain of custody records what was collected, by whom, when, where, how, its identifiers and condition, every transfer, storage, and final disposition.\n\nForensic acquisition creates a bit-stream copy where appropriate, often through write-blocking, and computes cryptographic hashes to verify that the working copy matches the acquisition. A hash establishes sameness, not who created the data or whether it is true. Analysis uses verified copies, validated tools, reproducible procedures, synchronized timelines, and documented interpretation. Legal hold and evidence rules vary by matter and jurisdiction, so counsel and authorized investigators guide collection.\n\nCloud and SaaS evidence requires early provider coordination because logs may be short-lived and physical acquisition unavailable.",
          "practical": "Write an evidence form for a laptop and a cloud audit export. Include authority, time source, collector, method, hashes, transfers, storage, and limitations."
        },
        {
          "title": "Vulnerability, patch, and configuration management",
          "lead": "Operational risk falls when teams know their assets, prioritize exposure, deploy controlled change, and verify the result.",
          "keyIdeas": [
            "Inventory and criticality underpin prioritization.",
            "Patch urgency considers exploitation, exposure, and business effect.",
            "Exceptions need compensating controls and expiration.",
            "Secure baselines detect and prevent drift."
          ],
          "content": "The lifecycle discovers assets and weaknesses, validates relevance, prioritizes risk, assigns ownership, remediates or treats, verifies, and reports. Criticality, external exposure, privilege, data, exploit availability, compensating controls, and potential safety or availability impact modify a generic severity score. Patch management inventories versions, receives advisories, assesses applicability, tests, schedules, deploys, monitors, supports rollback, and verifies coverage. Emergency changes accelerate review without abandoning authorization, evidence, or recovery planning.\n\nSystems that cannot be patched may require isolation, feature removal, virtual patching, enhanced monitoring, or replacement under formal risk ownership. Configuration management defines approved baselines, controls changes, detects drift, and preserves known-good builds. Infrastructure as code and immutable deployment can make changes reviewable and repeatable, but errors scale rapidly. Exceptions should name the asset, reason, owner, compensating controls, expiration, and review trigger.",
          "practical": "Prioritize five fictional vulnerabilities using asset criticality, exposure, known exploitation, privilege, data, and operational constraints. Explain why the highest numeric score may not be first."
        },
        {
          "title": "Change and release management",
          "lead": "Change control reduces unintended risk without turning necessary work into an obstacle course.",
          "keyIdeas": [
            "Changes need purpose, impact, test, approval, schedule, and rollback.",
            "Standard, normal, and emergency changes follow different paths.",
            "The CAB advises and coordinates; accountability remains with authorized owners.",
            "Post-implementation review compares result with intent."
          ],
          "content": "A request for change describes the proposed state, business reason, affected assets and dependencies, security and privacy impact, validation plan, implementation window, communication, rollback criteria, and owner. Segregating development, approval, and deployment lowers fraud and error. Version control and build pipelines provide evidence but require protected branches, identities, secrets, and artifacts. Standard changes are low-risk, repeatable, and preauthorized under defined conditions.\n\nNormal changes receive case-specific review.\n\nEmergency changes address urgent risk or outage through an expedited authorized process and undergo retrospective review. Labeling routine poor planning as an emergency defeats governance. After implementation, monitoring determines whether objectives and service levels were met. The team confirms configuration records, documentation, inventory, recovery material, and security controls. Failed changes should be rolled back or corrected under clear authority, and recurring causes should improve the process rather than merely blame an implementer.",
          "practical": "Draft a change for a firewall policy update with test traffic, affected routes, logging, maintenance window, communication, rollback trigger, and post-change verification."
        },
        {
          "title": "Backup, restoration, and recovery engineering",
          "lead": "A backup is valuable only when it is complete, protected, restorable, and aligned with business recovery objectives.",
          "keyIdeas": [
            "Full, incremental, and differential backups trade time and storage differently.",
            "Offline or immutable copies reduce ransomware exposure.",
            "Restoration tests validate dependencies and procedures.",
            "Recovery order follows business processes, not arbitrary server lists."
          ],
          "content": "A full backup copies the selected dataset. An incremental backup copies changes since the last backup of any type, reducing backup time while requiring a full and each subsequent incremental for restoration. A differential copies changes since the last full, growing over time but requiring only the full and latest differential. The 3-2-1 idea keeps multiple copies on different media with one offsite; modern variants add offline or immutable copies and verified recovery.\n\nBackup administrators, consoles, credentials, catalogs, keys, and deletion APIs require separation and strong protection because attackers target them before disruptive action. Replication improves continuity but can reproduce corruption or deletion. Restoration testing confirms data integrity, application consistency, identity, secrets, network, DNS, certificates, dependencies, capacity, documentation, and staff capability. Recovery sequencing starts with business outcomes and shared infrastructure. Returning quickly to an untrusted or still-vulnerable environment is not successful recovery.",
          "practical": "Restore a small authorized service into an isolated environment. Record elapsed time, missing dependencies, data age, validation results, and the changes required to meet its RTO and RPO.",
          "tables": [
            {
              "title": "Backup patterns",
              "headers": [
                "Type",
                "Copies",
                "Restore set"
              ],
              "rows": [
                [
                  "Full",
                  "All selected data",
                  "Latest full"
                ],
                [
                  "Incremental",
                  "Changes since any last backup",
                  "Full plus every later incremental"
                ],
                [
                  "Differential",
                  "Changes since last full",
                  "Full plus latest differential"
                ]
              ]
            }
          ]
        },
        {
          "title": "Disaster recovery sites and exercises",
          "lead": "Recovery facilities trade cost, readiness, capacity, distance, and shared-failure risk.",
          "keyIdeas": [
            "Hot sites are highly prepared; cold sites require substantial setup.",
            "Warm sites occupy the middle.",
            "Reciprocal agreements depend on compatible capacity and simultaneous-disaster assumptions.",
            "Exercises must produce corrected plans."
          ],
          "content": "A hot site has infrastructure, connectivity, and often replicated data ready for rapid use. A warm site has some equipment and connectivity but needs configuration or data restoration. A cold site provides space and basic utilities with longer setup time. Mobile sites can be transported, while cloud recovery supplies resources on demand if identities, quotas, templates, data, and provider dependencies are prepared.\n\nDistance should separate the site from regional hazards while maintaining communications, staffing, legal, and latency needs.\n\nTwo sites on different maps may still share a flood plain, power substation, carrier conduit, cloud control plane, identity service, or key-management system. Capacity assumptions must include a widespread event in which many customers invoke the same vendor. Tabletop exercises discuss decisions; walkthroughs inspect procedures; simulations execute substantial portions without moving production; parallel tests run recovery alongside normal service; full interruption transfers real operations and has the highest risk.\n\nEvery exercise needs objectives, observers, evidence, findings, owners, deadlines, and retest.",
          "practical": "Compare two recovery locations using hazard independence, communications, staffing, provider concentration, capacity guarantee, data currency, recovery time, and return-to-normal plan."
        },
        {
          "title": "Personnel safety and crisis management",
          "lead": "The first priority in an emergency is human life and safety; technology recovery supports that obligation.",
          "keyIdeas": [
            "Emergency response, crisis management, continuity, and disaster recovery coordinate but serve different purposes.",
            "Communications must be timely, authorized, and accessible.",
            "Travel and lone-worker risks need planning.",
            "Exercises should include decision pressure and incomplete information."
          ],
          "content": "Emergency procedures address evacuation, shelter, medical response, fire, hazardous conditions, violence, severe weather, and accountability for people. Controls must comply with life-safety codes and accessibility needs. No data center asset justifies trapping a person or delaying evacuation. Crisis management provides leadership, situation awareness, priorities, communications, and coordination across legal, safety, security, operations, human resources, public affairs, and external agencies. An incident commander needs defined authority and alternates.\n\nOut-of-band communications, contact trees, status channels, and rumor control help when ordinary systems fail. Personnel security extends to travel, remote work, high-risk locations, coercion, and wellbeing during sustained incidents. Plans should consider family responsibilities, shift length, transportation, lodging, and relief. A technically correct recovery that depends on exhausted or endangered staff is not resilient.",
          "practical": "Run a communications exercise in which email and the primary identity provider are unavailable. Determine how staff authenticate instructions, report safety, and receive authoritative updates."
        },
        {
          "title": "Protective operations: endpoint, malware, and deception",
          "lead": "Preventive and detective tools work best as an engineered set whose failures and response paths are understood.",
          "keyIdeas": [
            "Application control restricts execution to authorized code.",
            "Endpoint detection records behavior and supports response.",
            "Sandboxing contains untrusted activity within enforced boundaries.",
            "Honeypots and sinkholes produce signals but require careful isolation and authority."
          ],
          "content": "Endpoint hardening removes unnecessary services, enforces configuration, limits local administration, protects credentials, controls applications and scripts, and keeps security tooling tamper resistant. Anti-malware combines signatures, reputation, heuristics, behavior, and cloud analysis. Endpoint detection and response records processes, files, network activity, identity events, and other telemetry to detect and investigate behavior. Allowlisting permits approved executables, libraries, scripts, or publishers and can be highly effective on stable systems.\n\nSandboxes and containers restrict untrusted code but remain software boundaries that may be escaped. Browser isolation and document detonation move risky interpretation away from the user endpoint. Controls need safe update, performance testing, exclusions, monitoring, and an emergency recovery path. Honeypots imitate targets to attract activity; honeynets provide broader decoy environments; honeytokens are fake records or credentials whose use is suspicious.\n\nSinkholes redirect malicious traffic to controlled infrastructure for observation or containment. Deception must be authorized, isolated from production, monitored, and designed so it cannot become a pivot or collect unrelated personal activity.",
          "practical": "Design endpoint protection for a computer lab: standard build, application policy, local privilege, browser controls, telemetry, reimage process, exceptions, and a safe way to test one detection."
        },
        {
          "title": "Resource provisioning and capacity protection",
          "lead": "Secure operations allocates compute, storage, network, identities, and licenses through controlled, observable lifecycles.",
          "keyIdeas": [
            "Provisioning starts from approved templates and ownership.",
            "Quotas and rate limits protect shared capacity.",
            "Deprovisioning removes resources and dependent authority.",
            "Capacity monitoring connects ordinary growth with denial-of-service resilience."
          ],
          "content": "Provisioning should establish a business purpose, owner, classification, cost center, approved image or template, network zone, identities, logging, backup, support period, and expiration where appropriate. Automation increases consistency but needs reviewed templates, narrow deployment identities, protected state, and reconciliation between intended and actual resources. Shared platforms need CPU, memory, storage, connection, API, and spending limits. Quotas prevent one tenant or runaway process from consuming all capacity.\n\nRate limiting, queues, backpressure, circuit breakers, and graceful degradation preserve priority functions during spikes. Capacity plans account for ordinary peaks, recovery operation, security-tool load, and attacks. Deprovisioning removes workloads, addresses, DNS, certificates, service accounts, firewall rules, volumes, snapshots, backups under schedule, monitoring objects, and vendor subscriptions. Abandoned resources create both attack surface and cost. Reconciliation detects cloud or virtual resources that were created outside the approved lifecycle.",
          "practical": "Follow a temporary test server from request to automatic expiration. List every dependent object that must be removed so the server leaves no credential, route, data, or bill behind."
        },
        {
          "title": "Threat intelligence and operational decision-making",
          "lead": "Threat intelligence is analyzed information that supports a decision; a feed of indicators is only raw material.",
          "keyIdeas": [
            "Strategic intelligence informs leadership and investment.",
            "Operational and tactical intelligence guide campaigns and defenses.",
            "Indicators have confidence, context, and useful lifetimes.",
            "Sharing must respect classification, privacy, and source protection."
          ],
          "content": "Strategic intelligence describes long-term actors, trends, and business implications for leaders. Operational intelligence examines campaigns and likely intent. Tactical intelligence describes techniques and defensive opportunities. Technical indicators identify artifacts such as addresses, domains, hashes, or certificates and often decay quickly. The intelligence cycle defines requirements, collects information, processes it, analyzes competing explanations, disseminates for action, and receives feedback. Source reliability and information credibility should be assessed separately.\n\nAnalysts state confidence, assumptions, alternatives, timing, and gaps rather than converting uncertainty into certainty. Indicator blocking without context can disrupt legitimate shared infrastructure or chase expired artifacts. Intelligence is most useful when it changes a priority, control, hunt, detection, supplier review, exercise, or executive decision. Sharing communities improve collective defense, but organizations must handle personal data, victim information, privileged material, and source sensitivity appropriately.",
          "practical": "Write one intelligence requirement for a school or small organization, then name collection sources, decision owner, update frequency, and the action a credible answer would trigger."
        }
      ]
    },
    {
      "title": "Domain 8: Software Development Security",
      "weight": "10% of the exam",
      "intro": "Software security builds protection into requirements, design, implementation, testing, deployment, and maintenance rather than treating security as a final gate.",
      "topics": [
        {
          "title": "The secure development lifecycle",
          "lead": "Security activities belong in every lifecycle phase and should produce evidence that survives staff and technology changes.",
          "keyIdeas": [
            "Requirements include abuse prevention, assurance, privacy, and operations.",
            "Architecture exposes trust boundaries before code exists.",
            "Implementation uses standards, review, and protected dependencies.",
            "Operations feeds incidents and vulnerability data back into design."
          ],
          "content": "During concept and requirements, teams classify data, identify stakeholders, define security and privacy requirements, model misuse, and set acceptance criteria. Design establishes components, trust boundaries, identities, authorization, cryptography, logging, resilience, and deployment assumptions. Implementation follows secure coding standards and uses review and automated analysis. Verification includes unit, integration, security, abuse, performance, recovery, and acceptance tests. Release protects build systems, artifacts, configuration, secrets, provenance, and deployment authority.\n\nOperations monitors behavior, manages vulnerabilities and dependencies, responds to incidents, and plans retirement and data disposition. Stage-gate lifecycles can require evidence before progression, while Agile and DevOps integrate small security tasks into frequent iterations. DevSecOps emphasizes shared responsibility and automation but does not remove independent review or risk ownership. The goal is rapid trustworthy feedback, not a collection of tools.",
          "practical": "For a small application, create one security deliverable per phase: requirement, threat model, coding rule, automated test, release evidence, runtime detection, and retirement step."
        },
        {
          "title": "Software requirements and threat modeling",
          "lead": "A testable security requirement states behavior, conditions, and acceptable evidence.",
          "keyIdeas": [
            "Functional requirements define security behavior.",
            "Nonfunctional requirements set qualities such as resilience and auditability.",
            "Abuse cases describe hostile use.",
            "Requirements need traceability through design and test."
          ],
          "content": "“The application shall be secure” cannot be tested. A stronger requirement might state that an administrator session expires after a defined period of inactivity, requires phishing-resistant MFA, and produces specified audit events. Requirements derive from data classification, law, contract, business risk, architecture, and threat models. Functional security requirements include authentication, authorization, validation, cryptographic operations, logging, and recovery. Nonfunctional requirements address availability, performance under attack, maintainability, privacy, accessibility, and assurance.\n\nAbuse stories describe what an attacker or careless user might attempt and create concrete negative tests. Traceability links each important requirement to design decisions, code, tests, results, deployment configuration, and owner. When a requirement changes, the team can identify affected artifacts. Security champions help teams interpret requirements, but product owners and risk owners remain responsible for business decisions.",
          "practical": "Replace three vague requirements: “encrypt data,” “use strong passwords,” and “log access”: with testable statements naming scope, conditions, expected behavior, and evidence."
        },
        {
          "title": "Architecture, APIs, and trust boundaries",
          "lead": "Secure software design gives each component the minimum authority and treats every boundary crossing as an explicit contract.",
          "keyIdeas": [
            "Client input is untrusted even when the client is managed.",
            "Server-side authorization must protect every object and action.",
            "APIs need identity, schema validation, rate limits, and useful errors.",
            "Service decomposition can increase both isolation and complexity."
          ],
          "content": "Architecture diagrams should show components, stores, actors, data flows, protocols, trust boundaries, secrets, and external dependencies. Every boundary asks how peers authenticate, how messages are authorized and validated, how replay is prevented, how failure behaves, and what is logged. APIs enforce authorization on the server for each object and operation. Predictable object identifiers are not access controls. Schemas constrain structure and size; business rules constrain meaning.\n\nRate and resource limits protect availability. Error responses should help legitimate clients without exposing internal paths, queries, credentials, or stack details. Microservices can isolate capabilities and deployment, but they multiply identities, network calls, configuration, logs, and supply-chain components. A monolith with clear internal boundaries may be safer than poorly governed services. Security follows actual authority and data flow, not architectural fashion.",
          "practical": "Threat-model an endpoint that downloads a document by ID. Consider object authorization, enumeration, metadata leakage, caching, range requests, malware, rate limits, and audit evidence."
        },
        {
          "title": "Input handling, output encoding, and memory safety",
          "lead": "Software should treat external data as structured input to validate, not as executable instructions to concatenate.",
          "keyIdeas": [
            "Parameterized interfaces separate data from commands.",
            "Validation uses allowlisted structure and semantic rules.",
            "Output encoding is specific to the destination context.",
            "Memory-safe languages remove broad classes of defects but not logic flaws."
          ],
          "content": "Injection occurs when untrusted data changes the meaning of a command, query, template, or interpreter input. Parameterized database queries, safe APIs, and avoidance of shell construction preserve the boundary between instructions and data. Validation should check type, length, range, encoding, structure, and business meaning at a trusted boundary. Cross-site scripting is addressed by context-specific output encoding, safe templating, careful DOM APIs, content security policy as defense in depth, and control of rich content.\n\nHTML, JavaScript, CSS, URL, and command contexts require different handling. Canonicalization must occur before validation when multiple representations could bypass a rule. Memory corruption such as buffer overflow and use-after-free can redirect control or expose data. Bounds checks, non-executable memory, randomization, control-flow defenses, testing, and compiler hardening help; memory-safe languages prevent many defects by construction. Integer, concurrency, deserialization, and business-logic errors still require design and review.",
          "practical": "For one input that reaches a database and later an HTML page, identify the validation, parameterization, storage, and output-encoding steps separately."
        },
        {
          "title": "Authentication, sessions, and application authorization",
          "lead": "Applications must preserve identity and authorization across every request, workflow, and administrative path.",
          "keyIdeas": [
            "Use established identity protocols and libraries.",
            "Session tokens need confidentiality, integrity, lifetime, and revocation.",
            "Authorization belongs server-side and defaults to deny.",
            "Sensitive actions may require step-up authentication and transaction confirmation."
          ],
          "content": "Applications should delegate authentication to well-maintained identity systems where practical and validate tokens fully. Password storage uses salted adaptive hashing, never reversible encryption. Enrollment, linking, password reset, factor replacement, and account recovery need strong verification and notification because they can bypass the primary authenticator. Session identifiers should be unpredictable, transmitted only over protected channels, protected from script access where appropriate, rotated after authentication or privilege change, expired after reasonable inactivity and absolute lifetime, and invalidated on logout or compromise.\n\nCross-site request forgery defenses bind state-changing actions to the intended session and origin. Authorization checks every action and object in trusted server logic. UI hiding is convenience, not control. Denials should be safe and auditable without revealing sensitive existence. High-risk transactions may require recent authentication, independent approval, signed details, or out-of-band confirmation so malware cannot silently alter the action after login.",
          "practical": "Map every way an account can gain or recover access. Attackers often ignore the main login and target email change, support reset, invite acceptance, remembered sessions, or administrator impersonation."
        },
        {
          "title": "Software supply chain and build security",
          "lead": "The delivered application inherits risk from source, dependencies, tools, identities, pipelines, and artifact distribution.",
          "keyIdeas": [
            "Dependency inventories and SBOMs improve visibility.",
            "Build systems and signing keys are production assets.",
            "Pinning and verified provenance reduce unreviewed change.",
            "Vulnerability response must distinguish presence, reachability, and exposure."
          ],
          "content": "Dependencies include libraries, frameworks, container images, compiler plugins, actions, package repositories, operating-system packages, and hosted services. Selection considers maintenance, provenance, license, transitive dependencies, known risk, and replaceability. Lockfiles and digest pinning make resolution reproducible; automated updates need review and tests. An SBOM records components and relationships, supporting inventory and incident response. It does not prove components are safe or actually reachable.\n\nSoftware composition analysis identifies known issues but may miss unpublished flaws, local modification, and exploit context.\n\nTeams need a process to receive advisories, locate affected products, assess exposure, patch or mitigate, and communicate. Pipelines hold broad authority. Protect source branches, runners, build definitions, package registries, secrets, artifact stores, and signing keys. Isolated reproducible builds, minimal ephemeral credentials, review, provenance attestations, and signed artifacts make unauthorized change harder and more visible. Production should accept only artifacts from the controlled path.",
          "practical": "Trace one released artifact backward to source commit, reviewer, build definition, runner, dependencies, tests, signing identity, registry, deployment approval, and runtime version."
        },
        {
          "title": "Security testing and code review",
          "lead": "Different testing methods illuminate different defect classes, so coverage comes from a coordinated portfolio.",
          "keyIdeas": [
            "SAST analyzes code or artifacts without a full running system.",
            "DAST tests exposed behavior of a running application.",
            "Fuzzing explores unexpected input and state.",
            "Manual review is essential for trust and business logic."
          ],
          "content": "Static analysis finds patterns in source or binaries and can run early, but it needs language-aware tuning and may lack runtime context. Dynamic analysis interacts with a running application and observes exposed behavior, but may not reach hidden paths. Interactive analysis combines runtime and code insight. Software composition analysis inventories dependencies and known issues. Fuzzing generates or mutates inputs to trigger crashes, hangs, leaks, or invariant violations.\n\nCoverage-guided fuzzers use execution feedback to explore new paths. Unit and property-based tests express invariants; integration tests examine component boundaries; penetration testing follows attack paths; manual review finds authorization and business-logic mistakes that tools rarely understand. Findings need validation, ownership, severity informed by context, remediation, and retest. A tool gate that teams routinely bypass provides weak assurance. Trends should drive prevention: recurring injection findings suggest better APIs, frameworks, examples, and training rather than endless individual fixes.",
          "practical": "Create a test matrix for one feature with unit, negative, authorization, static, dynamic, dependency, fuzz, manual review, and recovery tests. Explain what each method cannot see."
        },
        {
          "title": "Deployment, secrets, logging, and runtime protection",
          "lead": "A secure binary can become an insecure service through configuration, identity, secret, or operational failure.",
          "keyIdeas": [
            "Configuration should be versioned, reviewed, and separated by environment.",
            "Secrets should be retrieved through authorized runtime identity.",
            "Logs avoid credentials and sensitive content by design.",
            "Runtime detection and rollback complete the release."
          ],
          "content": "Development, test, and production should use separate identities, data, secrets, and authorization. Configuration is validated and promoted through controlled mechanisms rather than edited invisibly on servers. Feature flags, canaries, blue-green deployment, and progressive rollout limit blast radius when accompanied by monitoring and rollback. Secrets should not be committed to source, embedded in images, printed in pipelines, or shared through tickets.\n\nWorkloads authenticate to a secret service using a protected platform identity and receive narrowly scoped, short-lived material where possible.\n\nRotation, revocation, ownership, and emergency recovery are planned before compromise. Applications log security-relevant events with time, actor, action, target, result, request correlation, and safe context. Passwords, tokens, private keys, and unnecessary personal data are excluded or masked. Runtime controls may include application firewalls, rate limiting, sandboxing, endpoint sensors, health checks, integrity validation, and anomaly detection. They complement secure design rather than excuse defects.",
          "practical": "Review a sample application log as if it were breached and subpoenaed. Remove secrets and unnecessary personal data while retaining enough context to reconstruct authorized and denied actions."
        },
        {
          "title": "Acquired software and outsourced development",
          "lead": "Buying software changes how assurance is obtained; it does not remove the need for requirements, testing, and lifecycle control.",
          "keyIdeas": [
            "Contracts translate requirements into supplier obligations.",
            "Acceptance testing verifies the delivered product in its intended environment.",
            "Source escrow addresses a narrow continuity scenario.",
            "End-of-support and exit plans are security requirements."
          ],
          "content": "Acquisition begins with risk and requirements before a product is selected. Evaluation considers architecture, deployment model, data use, identity integration, secure development, vulnerability disclosure, patch history, assurance reports, administrative controls, logging, portability, subcontractors, and support lifespan. Demonstrations should test realistic security workflows rather than only features. Contracts address defects and remediation, security updates, incident notification, audit evidence, testing rights, component transparency, data ownership, deletion, intellectual property, support, and termination.\n\nSource-code escrow may help if a vendor fails, but deposited source can be obsolete, unbuildable, undocumented, or dependent on unavailable services; verification and update terms are essential. Acceptance testing confirms requirements in the customer's configuration and includes security, privacy, performance, recovery, integration, and administrative use. Ongoing monitoring tracks advisories, updates, provider changes, service levels, and concentration risk. Exit planning provides data export, migration, account removal, integration shutdown, and evidence of deletion.",
          "practical": "Write five measurable security acceptance criteria for a SaaS product covering identity, authorization, audit export, data deletion, recovery, and incident notification."
        },
        {
          "title": "Database and data-processing security",
          "lead": "Database security protects the meaning and permitted use of records, not merely the server that stores them.",
          "keyIdeas": [
            "Schemas and constraints preserve structural integrity.",
            "Views, stored procedures, and row or column policy can narrow exposure.",
            "Transactions provide defined consistency properties.",
            "Inference and aggregation can reveal protected information without direct row access."
          ],
          "content": "Database access should use distinct application and administrative identities with minimal privileges. Parameterized queries separate data from commands. Views expose selected rows or columns; stored procedures can constrain operations; row-level security applies policy to individual records. Encryption protects files or fields under a key model but does not replace authorization inside a running database. Transactions are commonly described through atomicity, consistency, isolation, and durability.\n\nIsolation levels trade concurrency against anomalies such as dirty, nonrepeatable, or phantom reads.\n\nApplication designers must choose semantics that preserve business rules under concurrent activity. Database constraints, not only UI checks, protect critical invariants. Inference combines allowed query results to derive restricted facts. Aggregation can make a large collection more sensitive than each individual record. Query limits, minimum group sizes, suppression, perturbation, differential-privacy methods, monitoring, and purpose restrictions address different cases. Backups, replicas, exports, analytics, caches, and support snapshots must inherit classification and lifecycle controls.",
          "practical": "Model a grade database with student, teacher, and administrator roles. Define row and field access, authorized updates, concurrency rules, audit events, exports, and inference risks."
        },
        {
          "title": "Development maturity, governance, and measurement",
          "lead": "A mature software-security program makes secure practice normal, measurable, and improvable across teams.",
          "keyIdeas": [
            "Maturity models describe institutional capability, not the security of one release.",
            "Standards and paved roads make the safe path easier.",
            "Metrics should expose risk and feedback delay.",
            "Exceptions and technical debt need owners and deadlines."
          ],
          "content": "A software capability maturity model examines whether practices depend on individual heroics or are defined, repeated, measured, and improved. Security maturity may cover governance, requirements, architecture, implementation, verification, deployment, vulnerability response, and training. An assessment guides investment; it should not become a contest for a high score disconnected from product risk. Central teams provide standards, threat-model support, secure libraries, pipeline templates, approved deployment patterns, and consulting.\n\nProduct teams retain ownership of their risk and operation. Security champions extend local expertise. A paved road combines sensible defaults and automation so ordinary delivery receives strong controls without repeated custom negotiation. Useful measures include time from introduction to detection of a defect, remediation age by exposure, percentage of critical flows threat-modeled, dependency inventory coverage, build provenance, recurring root causes, and time to revoke a released secret.\n\nRaw finding counts reward noisy tools. Exceptions record affected products, rationale, compensating controls, risk owner, expiration, and funded resolution.",
          "practical": "Assess a small development process at three levels: what is informal, what is consistently repeatable, and what is measured for improvement. Choose one next step that removes recurring friction."
        },
        {
          "title": "Security considerations for AI-enabled software",
          "lead": "AI components add probabilistic behavior, data lineage, model supply chains, and new interfaces while retaining familiar software risks.",
          "keyIdeas": [
            "Model output is untrusted input to downstream systems.",
            "Training and retrieval data have ownership, privacy, integrity, and provenance concerns.",
            "Prompt injection exploits instruction and data boundaries.",
            "Human oversight must have genuine authority and usable evidence."
          ],
          "content": "An AI-enabled system includes more than a model: data collection, labeling, training or fine-tuning, model artifacts, prompts, retrieval sources, tools, APIs, evaluation, monitoring, and human decisions. Each component has an owner and trust boundary. Conventional controls for identity, authorization, dependency integrity, secrets, logging, resilience, and supplier risk still apply. Prompt injection and malicious retrieved content can cause a model to follow untrusted instructions.\n\nModels should not receive broad tool authority merely because they can generate plausible language.\n\nThe surrounding application validates inputs and outputs, constrains tools, scopes identities, requires confirmation for consequential actions, and treats model responses as untrusted. Sensitive prompts and outputs need classification and retention decisions. Evaluation covers security misuse, privacy leakage, bias and harmful outcomes relevant to the use, robustness, hallucination consequences, override behavior, and monitoring. Model and dataset provenance support incident response and reproducibility.\n\nHuman review is not a control if reviewers lack time, context, independence, or a practical way to stop the action.",
          "practical": "Threat-model an assistant that can search private documents and send messages. Limit retrieval, tool scopes, recipients, confirmation, logging, content handling, and emergency shutdown."
        }
      ]
    }
  ]
};
