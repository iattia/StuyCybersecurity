// Stuy Cybersecurity certification textbook data.
window.CERT_GUIDE = {
  "name": "Cisco CCST Networking Study Guide",
  "short": "Cisco CCST Networking",
  "version": "100-150",
  "official": "https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-networking.html",
  "subtitle": "A first networking textbook: how networks are built, how IP communication works, how to use basic Cisco tools, and how to troubleshoot methodically.",
  "notice": "This guide follows the major skill areas in the Cisco Certified Support Technician Networking exam and teaches the surrounding ideas needed to understand them.",
  "parts": [
    {
      "title": "Network foundations",
      "weight": "Standards and concepts",
      "intro": "A network is a system for moving information between devices. Before configuring one, learn the language engineers use to describe its size, shape, speed, and behavior.",
      "topics": [
        {
          "title": "What a network actually does",
          "lead": "Networks let applications exchange data across a shared set of rules and devices.",
          "keyIdeas": [
            "LAN, WAN, PAN, campus, and data-center networks",
            "Clients, servers, peers, and network infrastructure",
            "On-premises, cloud, and hybrid services"
          ],
          "content": "A network is more than a collection of cables. It is an agreement about how devices identify one another, divide information into manageable units, carry those units across a medium, and recover when something goes wrong. A phone joining school Wi-Fi, a laptop opening a website, and a server copying a backup all use this same basic process. The **scope** of a network helps describe it.\n\nA personal area network connects devices near one person. A local area network usually belongs to one home, office, or building. A campus network joins several nearby LANs. A wide area network connects distant sites through a service provider. The Internet is a network of networks rather than one centrally owned system. Applications can use a **client-server** model, where clients request a service from a dedicated server, or a **peer-to-peer** model, where endpoints communicate more directly.\n\nCloud computing changes where a service runs, not the basic networking principles. A cloud-hosted application still needs addresses, routes, name resolution, transport protocols, access controls, and monitoring. Follow one ordinary page load to see the whole system. The client first needs usable local configuration. It asks a resolver for the server address, chooses a route, learns the link-layer address of its next hop, opens a transport conversation, negotiates encryption, and exchanges application messages.\n\nSwitches, routers, provider networks, and the remote service each make separate decisions. A failure called “the Internet is down” may occur at any one of those steps. Networks also share finite resources. Many conversations take turns on the same access link, switch uplink, wireless channel, or provider circuit. Queues absorb short bursts; sustained overload creates delay and loss. Engineers therefore design not only for connectivity but for capacity, security, manageability, and recovery.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A classroom can reach its local printer but no websites after a router replacement. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: LAN, WAN, PAN, campus, and data-center networks; Clients, servers, peers, and network infrastructure; On-premises, cloud, and hybrid services.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes interface state, addressing, gateway reachability, DNS lookup, route and NAT state. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is changing several endpoint settings before locating the shared boundary. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure.\n\nRecord cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up. This makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "When a service fails, first name the client, the service it wants, where that service runs, and which networks lie between them.",
          "lab": {
            "goal": "Draw a network you use",
            "environment": "Paper or a diagramming app",
            "steps": [
              "Mark endpoints, switches or access points, router, Internet connection, and two services.",
              "Label which parts you control and which belong to a provider."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Standards and the OSI model",
          "lead": "Layered models divide a complicated communication process into smaller jobs.",
          "keyIdeas": [
            "OSI and TCP/IP models",
            "Encapsulation and decapsulation",
            "Frames, packets, segments, and application data"
          ],
          "content": "Standards allow equipment and software from different vendors to interoperate. IEEE develops standards such as Ethernet and Wi-Fi. The IETF publishes many Internet standards as Requests for Comments. Vendor implementations differ, but a correctly implemented standard creates a common language. The seven-layer **OSI model** is mainly a reasoning tool. Physical concerns signals and media. Data link handles local delivery and frames.\n\nNetwork handles logical addressing and routing.\n\nTransport manages end-to-end conversations. Session, presentation, and application describe functions closer to user software. The practical TCP/IP model groups these into link, Internet, transport, and application layers. During **encapsulation**, an application gives data to the transport layer, which adds a TCP or UDP header. IP adds source and destination addresses. Ethernet or Wi-Fi adds a local frame header and trailer.\n\nThe receiver removes those headers in reverse.\n\nEach device usually cares most about the headers at its own layer: a switch examines a frame, while a router examines the IP packet inside it. The models are not laws of nature, but they help isolate faults. If link lights are dark, an HTTP setting is not the first place to look. Protocol data units are named for the layer being discussed: application data, a TCP segment or UDP datagram, an IP packet, and a data-link frame.\n\nThe names describe viewpoints, not four unrelated objects. The packet is carried inside the frame, and the segment is carried inside the packet. Troubleshooting crosses layers. A DNS query is application data, usually carried by UDP or TCP, addressed with IP, and delivered locally in an Ethernet or Wi-Fi frame. A capture tool may show all of those interpretations at once.\n\nWhen speaking with another technician, name both the layer and the evidence: “the interface is associated, but the host has no DHCP lease” is clearer than “Layer 2 works.”\n\n**Worked reasoning and field notebook** Consider this support case: A student must explain why a video call crosses switches and routers without treating the OSI model as literal software. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation.\n\nThe chapter's core concepts provide the model: OSI and TCP/IP models; Encapsulation and decapsulation; Frames, packets, segments, and application data.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes capture layers, addresses, ports, encapsulation and the device that changes each header. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is assigning a complex device to exactly one layer. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Use layers as a checklist, not as trivia. Start near the symptom and verify the lowest uncertain layer before moving upward.",
          "lab": {
            "goal": "Observe encapsulation",
            "environment": "Wireshark on a computer you control",
            "steps": [
              "Capture a DNS lookup followed by an HTTPS connection.",
              "Expand Ethernet, IP, TCP or UDP, and application headers.",
              "Write which addresses change when traffic crosses a router."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Topologies, diagrams, and ownership",
          "lead": "Good diagrams make physical placement and logical communication visible.",
          "keyIdeas": [
            "Star, mesh, point-to-point, and hub-and-spoke designs",
            "Physical versus logical topology",
            "Network diagrams, inventories, and labels"
          ],
          "content": "A **physical topology** describes equipment and cabling. A **logical topology** describes how traffic flows. Most Ethernet access networks form a physical star around switches. Wireless clients also share an access point even though no cable forms the spokes. WANs may be hub-and-spoke, partial mesh, full mesh, or a mixture. Redundant paths improve availability, but they introduce cost and complexity. Ethernet loops can multiply broadcast frames until a network is unusable, so switches run loop-prevention protocols.\n\nRouted networks handle multiple paths differently. A technician does not need to memorize every design algorithm yet, but should understand that an extra cable is not automatically harmless. A useful diagram names devices, interfaces, addresses, VLANs, uplinks, and boundaries between organizations. A matching inventory records model, serial number, operating system or firmware, location, owner, and support status. Labels matter during an outage: 'SW-3 Gi1/0/24 -> AP-LIBRARY-2' is much safer than guessing which unlabeled cable to unplug.\n\nA topology also reveals single points of failure. In a star, failure of one access cable affects one endpoint, while failure of the central switch affects every spoke. A full mesh offers many paths but grows quickly: connecting every pair of n sites requires n(n-1)/2 links. Partial meshes place redundancy where consequences justify it. Keep a diagram legible by separating views.\n\nThe physical view answers where equipment and cables are.\n\nThe Layer 2 view shows VLANs and trunks. The Layer 3 view shows subnets, gateways, and routes. A service view shows DNS, DHCP, identity, Internet, and cloud dependencies. Put a date and owner on each document; an unlabeled old diagram can be more dangerous than no diagram.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A new lab has a correct logical diagram but installers cannot identify rack ports or the provider handoff. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Star, mesh, point-to-point, and hub-and-spoke designs; Physical versus logical topology; Network diagrams, inventories, and labels.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes physical diagram, cable labels, port map, circuit ID, owner and last revision. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is using one diagram for physical and logical questions. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Before changing a live network, update or verify the diagram. The fastest fix is not useful if it disconnects a different room.",
          "lab": {
            "goal": "Create a physical and logical view",
            "environment": "A small real or imagined school network",
            "steps": [
              "Draw rooms and cable paths in the physical view.",
              "Draw subnets, VLANs, and traffic paths in the logical view.",
              "List three facts that appear in only one of the views."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Bandwidth, throughput, latency, and loss",
          "lead": "Network speed has several meanings, and confusing them leads to weak diagnoses.",
          "keyIdeas": [
            "Bits per second and bytes per second",
            "Bandwidth versus measured throughput",
            "Latency, jitter, packet loss, and utilization"
          ],
          "content": "## Bandwidth\n\nis the theoretical carrying capacity of a link, normally stated in bits per second. **Throughput** is the useful rate actually observed. A one-gigabit link does not guarantee a one-gigabit file transfer: protocol overhead, storage speed, congestion, server limits, wireless interference, and competing users can all reduce it. Remember that file sizes are usually shown in bytes and link rates in bits; eight bits make one byte before overhead.\n\n**Latency** is delay. Round-trip time measures the trip to a destination and back. **Jitter** is variation in delay and is especially noticeable in calls and games. **Packet loss** forces reliable protocols such as TCP to retransmit data and can make real-time media stutter. **Utilization** describes how much of a link's capacity is being used. Measurements need context. A speed test to a nearby server evaluates more than the local cable, while copying between two local machines can isolate the LAN.\n\nA single ping is weak evidence. Test several times, note the destination, and compare with a healthy device on the same network. A rough transfer estimate begins by converting bytes to bits. A 1 GB file contains about 8 Gb before protocol overhead, so at a perfect 100 Mb/s it needs at least about 80 seconds. Real transfer time is longer.\n\nDecimal network units and binary storage units can create additional apparent disagreement.\n\nBandwidth-delay product explains why a fast long-distance path may need a large amount of data in flight. TCP adjusts its sending rate based on acknowledgments and loss. On a congested link, adding bandwidth may help; on a distant underutilized link, tuning endpoints or eliminating loss may matter more. Always pair a speed measurement with latency, loss, interface errors, utilization, and the test path.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A speed test is high while voice calls still sound broken during busy periods. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Bits per second and bytes per second; Bandwidth versus measured throughput; Latency, jitter, packet loss, and utilization.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes latency, jitter, loss, utilization, queue drops and time-aligned baseline. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises.\n\nFor example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit. A common trap is equating bandwidth with application quality.\n\nThe safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "A slow download with low latency may be a capacity or server problem; a call with enough bandwidth may still sound bad because of jitter or loss.",
          "lab": {
            "goal": "Compare measurements",
            "environment": "ping and a browser-based speed test on an authorized network",
            "steps": [
              "Ping the default gateway and record minimum, average, and maximum delay.",
              "Ping a public address and compare.",
              "Run a speed test twice and explain what each test includes."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Media and endpoint connectivity",
      "weight": "Physical and wireless access",
      "intro": "The first hop connects an endpoint to the network. Cable construction, radio conditions, interface settings, and link negotiation all affect that hop.",
      "topics": [
        {
          "title": "Copper Ethernet cabling",
          "lead": "Twisted-pair cable carries Ethernet reliably when category, length, termination, and environment are appropriate.",
          "keyIdeas": [
            "Cat5e, Cat6, and Cat6A",
            "RJ-45 connectors and T568A/T568B",
            "Straight-through, crossover, Auto-MDI/MDIX, and PoE"
          ],
          "content": "Ethernet over balanced twisted-pair copper uses four pairs of wires twisted to reduce interference. Cat5e commonly supports 1 Gb/s to 100 meters. Cat6 improves noise performance and can support 10 Gb/s over shorter runs. Cat6A is designed for 10 Gb/s to 100 meters. The entire channel - including patch cords, jacks, and permanent cable - must meet the category rating.\n\nT568A and T568B define conductor order at an eight-position modular connector.\n\nEither works when used consistently. A straight-through cable uses the same scheme at both ends. Historic crossover cables swapped transmit and receive pairs, although modern interfaces usually detect this automatically with Auto-MDI/MDIX. Common faults include an open conductor, short, reversed pair, split pair, excessive untwisting, crushed cable, and a run longer than specification. A basic continuity tester finds several wiring faults but may not certify performance.\n\n**Power over Ethernet** sends power along with data to access points, phones, and cameras. The switch and powered device negotiate supported power; insufficient power can cause a device to boot partially or reset under load. Cable category is not the only limit. Ethernet standards specify supported speed and maximum channel length. Patch panels, wall jacks, couplers, bend radius, heat, and electrical interference affect the complete channel.\n\nA split pair can pass simple pin continuity while suffering severe crosstalk under traffic, which is why certification testing is different from a wire map. Link auto-negotiation selects compatible speed and duplex. If one side is forced and the other negotiates poorly, the link may show late collisions, frame errors, and terrible performance rather than staying down. Inspect both ends.\n\nFor PoE problems, compare the powered device’s requested class and actual draw with the switch budget, especially when many devices reboot together after a power event.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A newly terminated cable links at 100 Mb/s instead of 1 Gb/s. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Cat5e, Cat6, and Cat6A; RJ-45 connectors and T568A/T568B; Straight-through, crossover, Auto-MDI/MDIX, and PoE.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes wiremap, pair quality, negotiated state, errors, length and known-good substitution. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is accepting continuity as proof of standards compliance. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Do not treat a link light as proof that a cable is good. Some faults permit negotiation but produce errors and unstable throughput.",
          "lab": {
            "goal": "Test a patch cable",
            "environment": "Two known-good cables and a continuity tester",
            "steps": [
              "Test the known-good cable and record the pattern.",
              "Test the second cable and identify opens, reversals, or shorts.",
              "Inspect how far pairs were untwisted at each plug."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Fiber, transceivers, and safe handling",
          "lead": "Fiber carries light over long distances and through electrically noisy environments.",
          "keyIdeas": [
            "Single-mode and multimode fiber",
            "LC and SC connectors; SFP-family modules",
            "Wavelength, distance, polarity, and cleanliness"
          ],
          "content": "## Multimode fiber\n\nhas a larger core and is common for shorter building and campus links. **Single-mode fiber** has a small core and supports much longer distances. The fiber type, transceiver wavelength, speed, and distance rating must match at both ends. An SFP is a pluggable module commonly used for 1 Gb/s links; SFP+ commonly supports 10 Gb/s, while other form factors support higher rates.\n\nMost duplex links need transmit on one side to reach receive on the other.\n\nReversed polarity leaves the link down even when every component is healthy. Connector contamination is another frequent cause of low optical power and errors. Inspect and clean with approved tools; never look into a fiber or transceiver because invisible laser light can damage eyes. Optical diagnostics may report transmit and receive power. A reading outside the module's supported range can indicate excessive loss, dirt, a damaged strand, too many connectors, or the wrong optic.\n\nFiber avoids electromagnetic interference and does not conduct electricity between buildings, but it requires more careful termination and handling than ordinary patch copper. The optical budget subtracts loss from connectors, splices, and fiber distance from transmitter output and compares the result with receiver sensitivity. Too little light prevents a stable link; excessive light can also overload a receiver. Digital optical monitoring offers evidence, but readings and thresholds depend on the module.\n\nDo not mix multimode and single-mode components simply because the connectors fit. Verify speed, wavelength, fiber type, distance, and vendor support. A loopback plug can isolate one interface in a controlled test. When the link is one-way, check each strand and receive level independently. Replace one known component at a time so a successful repair identifies the faulty segment.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A fiber uplink stays down after both modules and the cable were replaced. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Single-mode and multimode fiber; LC and SC connectors; SFP-family modules; Wavelength, distance, polarity, and cleanliness.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes optic type, wavelength, fiber mode, Tx/Rx polarity, power levels and interface alarms. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is mixing individually working but incompatible components. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "For a dark fiber link, verify module compatibility, administrative state, polarity, and cleanliness before replacing expensive equipment.",
          "lab": {
            "goal": "Trace a fiber link safely",
            "environment": "A diagram or supervised lab rack",
            "steps": [
              "Record fiber type, connector, optic model, wavelength, and rated distance.",
              "Trace transmit-to-receive polarity.",
              "State the safe inspection and cleaning procedure."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Wi-Fi and radio behavior",
          "lead": "Wireless networking shares a radio channel, so signal quality and airtime matter as much as advertised speed.",
          "keyIdeas": [
            "2.4, 5, and 6 GHz characteristics",
            "Channels, interference, signal strength, and roaming",
            "SSID, authentication, and encryption"
          ],
          "content": "A wireless access point bridges wireless clients into a wired network. The SSID is the network name; it is not a security control. Clients discover networks, authenticate, associate, and then usually request IP configuration. A failure at any step produces a different symptom. The 2.4 GHz band generally travels farther and penetrates obstacles better, but it has fewer non-overlapping channels and more interference.\n\nThe 5 GHz band provides more channel choices and capacity with less range.\n\nThe 6 GHz band offers additional clean spectrum for capable devices but has compatibility and range considerations. Wider channels can increase peak speed while consuming more spectrum and increasing contention. Signal strength alone does not determine quality. Interference, noise, too many clients, low-rate clients, and channel reuse all consume airtime. WPA2 or WPA3 protects a network when configured with strong authentication and encryption.\n\nOpen networks provide no link-layer privacy.\n\nEnterprise Wi-Fi commonly authenticates individual users or devices through 802.1X and a RADIUS server. Wi-Fi is half-duplex shared access: devices on a channel listen and take turns rather than transmitting and receiving simultaneously. Advertised PHY rate includes modulation and coding, not pure application throughput. Distance, obstacles, interference, retransmission, and slower clients consume airtime. A client - not the access point - usually decides when to roam, so sticky clients may remain on a weak AP.\n\nChannel planning depends on country, band, width, and neighboring cells. In 2.4 GHz, 20 MHz channels 1, 6, and 11 are a common non-overlapping plan in many regulatory domains. Wider is not always better. Place access points for useful overlap, wire them where possible, and measure in the actual environment rather than judging from a floor plan alone.\n\n## Worked reasoning and field notebook\n\nConsider this support case: Wi-Fi works in an empty room but fails during a crowded event. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: 2.4, 5, and 6 GHz characteristics; Channels, interference, signal strength, and roaming; SSID, authentication, and encryption.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes channel use, client count, SNR, retries, airtime, survey and wired uplink. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is raising transmit power without examining contention. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "A user with “full bars” can still have poor service when the channel is crowded. Compare signal, noise, retransmissions, channel use, and behavior near another access point.",
          "lab": {
            "goal": "Survey nearby Wi-Fi",
            "environment": "A device with a Wi-Fi analyzer, where permitted",
            "steps": [
              "List channels and bands used by nearby access points.",
              "Identify overlapping networks and note signal strength.",
              "Recommend a channel plan without changing the production network."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Connecting and configuring a host",
          "lead": "An endpoint needs a working interface, compatible link, valid IP settings, and the right services.",
          "keyIdeas": [
            "NIC status and drivers",
            "DHCP versus static configuration",
            "Default gateway and DNS settings"
          ],
          "content": "A host network interface may be wired, wireless, virtual, or cellular. First confirm the adapter exists, is enabled, has a suitable driver, and reports a link or association. Then inspect its configuration. A typical IPv4 host needs an address, subnet mask or prefix, default gateway, and DNS server. DHCP supplies settings automatically and reduces mistakes. A static address is useful for infrastructure that must remain at a predictable location, but it must be planned to avoid conflicts.\n\nAn address in '169.254.0.0/16' often means a host could not obtain IPv4 configuration from DHCP and assigned itself a link-local address. The default gateway must be in a network the host can reach directly. DNS servers may be local resolvers or public services, but a correct DNS address does not guarantee that queries are permitted through the network. Proxy, VPN, and host firewall settings can also change traffic.\n\nAlways record the original configuration before modifying it. A prefix must agree with the local network. If a host has 192.0.2.10/24 and gateway 192.0.2.1, it considers the gateway local and can resolve its MAC address. If the prefix or gateway is typed incorrectly, the host may send local traffic to the wrong place or be unable to reach the router at all.\n\nDuplicate static addresses cause intermittent symptoms because neighbors learn competing MAC mappings.\n\nDHCP reservations preserve predictable addresses without configuring each endpoint manually. On a multi-interface host, route metrics decide whether wired, wireless, VPN, or virtual adapters are preferred. Troubleshooting should record all active interfaces, not only the one the user expects to be in use.\n\n## Worked reasoning and field notebook\n\nConsider this support case: One laptop has a link but receives a 169.254 address while neighboring devices work. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: NIC status and drivers; DHCP versus static configuration; Default gateway and DNS settings.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes adapter configuration, DHCP exchange, VLAN, reservation, relay and scope state. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is rebuilding shared infrastructure for a one-device issue. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Compare a broken host with a working host on the same network. Differences in address, prefix, gateway, DNS, VLAN, or Wi-Fi authentication often reveal the fault.",
          "lab": {
            "goal": "Inspect host configuration",
            "environment": "Windows, macOS, or Linux computer",
            "steps": [
              "Display interface, address, prefix, gateway, and DNS information.",
              "Identify which values came from DHCP.",
              "Renew the lease only on a lab or authorized host and note what changes."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Ethernet switching",
      "weight": "Local network infrastructure",
      "intro": "Switches move frames inside a LAN. Their forwarding decisions, VLAN boundaries, and interface state explain much of local network behavior.",
      "topics": [
        {
          "title": "MAC addresses and frame forwarding",
          "lead": "A switch learns which source MAC addresses appear on each port and uses that table to forward frames.",
          "keyIdeas": [
            "Unicast, broadcast, and multicast frames",
            "MAC address table learning and aging",
            "Unknown unicast flooding"
          ],
          "content": "An Ethernet frame includes source and destination MAC addresses. The switch learns from the **source** address of each incoming frame and records the port where it appeared. If the destination is known, the switch forwards the frame only toward that port. If it is unknown, the switch floods it within the VLAN. Broadcasts are also flooded within the VLAN, except back through the incoming port.\n\nThis behavior is data-plane forwarding, not routing. MAC addresses are locally significant and usually change at each routed hop because a new frame is created for the next link. A switch table entry ages out when it has not been used. Moving a device may briefly cause flooding while the new location is learned. Symptoms such as many MAC addresses appearing on an access port can indicate another switch was connected, a virtual host is bridging several systems, or an unauthorized device is present.\n\nFrequent address movement between ports can indicate a loop or wiring mistake. A MAC address is 48 bits, usually written as six hexadecimal octets. The least significant bit of the first octet distinguishes individual from group addresses; another bit distinguishes universally administered from locally administered addresses. Modern operating systems may randomize Wi-Fi client addresses for privacy. Switch learning is per VLAN.\n\nThe same MAC could appear in separate tables or contexts, and a trunk legitimately carries many source addresses.\n\nBroadcast and unknown unicast flooding stays within the VLAN. A hub, unlike a switch, repeats incoming bits toward all other ports and creates one shared collision domain. Switches give each port a separate collision domain and normally operate full duplex.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A switch learns a laptop on alternating ports and users report intermittent delivery. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Unicast, broadcast, and multicast frames; MAC address table learning and aging; Unknown unicast flooding.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes MAC table history, topology, cabling, loop state and legitimate mobility. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is treating a moving MAC as proof of an attack. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure.\n\nRecord cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up. This makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "The destination IP tells the router where a packet ultimately belongs; the destination MAC tells the current LAN which next-hop interface should receive the frame.",
          "lab": {
            "goal": "Watch a switch learn",
            "environment": "Cisco Packet Tracer or a supervised switch",
            "steps": [
              "Display the MAC address table.",
              "Generate traffic between two endpoints.",
              "Display the table again and match addresses to ports."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "VLANs, access ports, and trunks",
          "lead": "VLANs create separate Layer 2 broadcast domains on the same switching hardware.",
          "keyIdeas": [
            "Access and trunk ports",
            "802.1Q tags and native VLAN",
            "Inter-VLAN routing"
          ],
          "content": "A VLAN is a logical LAN. Devices in different VLANs cannot exchange ordinary Ethernet broadcasts and need a router or multilayer switch to communicate. VLANs help organize users, reduce broadcast scope, and create boundaries where policy can be applied. They are useful segmentation, but not a complete security system by themselves. An **access port** normally carries one untagged VLAN to an endpoint.\n\nA **trunk** carries multiple VLANs between switches, routers, hypervisors, or access points, usually using IEEE 802.1Q tags.\n\nBoth sides must agree about allowed VLANs and the native VLAN. A mismatch can create lost traffic or unintended connectivity. Inter-VLAN traffic passes through a Layer 3 interface that serves as a default gateway. This may be a router subinterface or a switched virtual interface on a multilayer switch. When troubleshooting, verify the endpoint's assigned VLAN, the VLAN's existence, trunk allowance, gateway interface, and routing or access policy.\n\nVLAN numbers identify broadcast domains but do not carry IP meaning by themselves. A common design assigns one IP subnet per VLAN so routing boundaries remain clear. An endpoint normally sends untagged frames on an access port; the switch associates them with the configured VLAN. Voice VLAN features can let a phone and attached computer use different VLANs on one physical port.\n\nOn a trunk, tags identify VLAN membership except for native-VLAN traffic where configured.\n\nAllow only required VLANs and keep native settings consistent. When two same-VLAN hosts on different switches cannot communicate, verify access VLANs, trunk operational state, allowed VLAN list, spanning-tree forwarding, and MAC learning at both ends.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A host in VLAN 20 cannot reach a server in VLAN 30 after a trunk change. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Access and trunk ports; 802.1Q tags and native VLAN; Inter-VLAN routing.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes access VLAN, trunk allowance, tags, native VLAN, SVI state and routing. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is adding an ACL exception before proving the frame reaches the router. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure.\n\nRecord cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up. This makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "A correct IP address on the wrong VLAN can look almost right while failing to reach its gateway. Check the switchport before repeatedly changing the host.",
          "lab": {
            "goal": "Build two VLANs",
            "environment": "Cisco Packet Tracer",
            "steps": [
              "Create two VLANs and place one access port in each.",
              "Verify same-VLAN communication.",
              "Add inter-VLAN routing and document the new traffic path."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Switch interfaces and basic Cisco IOS",
          "lead": "IOS commands let technicians inspect status and make controlled changes.",
          "keyIdeas": [
            "User EXEC, privileged EXEC, and configuration modes",
            "show interfaces status and show running-config",
            "Descriptions, shutdown/no shutdown, speed, and duplex"
          ],
          "content": "Cisco IOS uses modes to separate observation from configuration. The '>' prompt is user EXEC; 'enable' enters privileged EXEC with '#'. 'configure terminal' enters global configuration. Interface configuration changes one port. 'end' returns to privileged EXEC. Use context-sensitive '?' and command completion instead of guessing. Start with read-only commands: 'show interfaces status', 'show ip interface brief', 'show interfaces counters errors', 'show mac address-table', and 'show running-config'.\n\nInterface descriptions are simple operational documentation. 'shutdown' administratively disables an interface; 'no shutdown' enables it. Save an approved change with 'copy running-config startup-config' when appropriate. Modern Ethernet usually negotiates speed and duplex automatically. One side forced and the other automatic can create a duplex mismatch on older equipment, causing late collisions, errors, and terrible performance. Record the old state, make one change, verify the result, and have a rollback plan.\n\nIOS configuration changes take effect in the running configuration. On traditional IOS devices, the command copy running-config startup-config saves them for the next boot. Saving is not automatically correct: first validate connectivity and compare the intended change. Use show running-config interface and show interfaces to connect configuration with operational state. Interface status separates physical and data-link clues. Administratively down means configured shutdown.\n\nDown/down points toward absent signal, cabling, optic, or remote equipment.\n\nUp/down suggests a line-protocol or encapsulation issue, depending on interface type. Error counters need a time interval: clear counters only with authorization, record the original values, and see whether errors continue to increase.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A new technician must make a safe switch change and leave enough evidence for rollback. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: User EXEC, privileged EXEC, and configuration modes; show interfaces status and show running-config; Descriptions, shutdown/no shutdown, speed, and duplex.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes running configuration, interface state, change record, saved configuration and validation. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is saving a broken change before testing. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "A configuration command that is accepted is not necessarily correct. Verify link state, counters, learned addresses, reachability, and saved configuration.",
          "commands": [
            {
              "title": "Read-only IOS orientation",
              "description": "Use on Packet Tracer or an authorized device before making changes.",
              "code": "show ip interface brief\nshow interfaces status\nshow interfaces counters errors\nshow mac address-table\nshow running-config"
            }
          ],
          "lab": {
            "goal": "Practice safe CLI navigation",
            "environment": "Cisco Packet Tracer",
            "steps": [
              "Enter each IOS mode and note the prompt.",
              "Add an interface description.",
              "Display the running configuration and interface status.",
              "Remove the test description and verify the rollback."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Loops and resilient switching",
          "lead": "Redundant switch links require a control mechanism so frames do not circulate forever.",
          "keyIdeas": [
            "Broadcast storms and MAC table instability",
            "Spanning Tree Protocol purpose",
            "Blocked and forwarding paths"
          ],
          "content": "Ethernet frames do not have an IP-style hop limit. In a physical loop, broadcasts and unknown unicasts can circulate, multiply, and consume all available bandwidth. Switches may learn the same source MAC on alternating ports, making unicast forwarding unstable. Users experience severe loss or a complete outage.\n\nSpanning Tree Protocol exchanges control messages and places selected redundant links into a non-forwarding role, leaving one loop-free logical tree. If the active path fails, a standby path can transition to forwarding. Rapid variants converge faster, but the purpose remains loop prevention. Technicians should recognize symptoms without changing STP casually. An unexpected blocked link may be protecting the network. Edge features such as PortFast are intended for endpoint ports, while protections such as BPDU Guard can disable an edge port when another switch is connected.\n\nFollow the site's design and escalation process. An Ethernet frame has no general hop limit, so a forwarding loop can circulate broadcasts and unknown unicasts indefinitely. Each copy can be replicated again, consuming links and switch CPU while MAC entries flap between ports. Spanning Tree elects a root bridge and places redundant paths into forwarding or blocking roles so the logical topology is loop free.\n\nWhen an active path fails, the protocol may move a standby path to forwarding. Convergence is not instantaneous, and edge ports should use appropriate fast-transition features only when they truly connect to endpoints. Link aggregation combines compatible parallel links into one logical channel; mismatched settings can leave members suspended or create loops.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A redundant cable causes a broadcast storm rather than resilience. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Broadcast storms and MAC table instability; Spanning Tree Protocol purpose; Blocked and forwarding paths.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes STP root, port roles, BPDUs, topology changes, MAC flaps and interface counters. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is disabling spanning tree instead of correcting topology. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "If connecting one cable causes a whole LAN to collapse, disconnect the most recent change and look for a loop before rebooting every switch.",
          "lab": {
            "goal": "Model a loop safely",
            "environment": "Cisco Packet Tracer only",
            "steps": [
              "Connect redundant switch links and observe STP state.",
              "Identify the blocked port.",
              "Remove the forwarding link and observe convergence to the alternate path."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "IP addressing and core services",
      "weight": "Addressing and protocols",
      "intro": "IP supplies logical addresses and enables communication beyond one LAN. Supporting services make those addresses useful to people and applications.",
      "topics": [
        {
          "title": "IPv4 addresses and subnet boundaries",
          "lead": "An IPv4 address identifies an interface, while the prefix determines which destinations are local.",
          "keyIdeas": [
            "Dotted-decimal and CIDR notation",
            "Network, host, and broadcast addresses",
            "Private, public, loopback, and link-local ranges"
          ],
          "content": "IPv4 addresses contain 32 bits, written as four decimal octets. The prefix length tells how many leading bits identify the network. A '/24' leaves eight host bits; a '/26' leaves six. Hosts compare their address and a destination with the mask. If the network portions match, the destination is local. Otherwise the host sends the packet to its default gateway.\n\nThe network address has all host bits zero, and the traditional broadcast address has all host bits one.\n\nOrdinary host assignments lie between them. Private address ranges - '10.0.0.0/8', '172.16.0.0/12', and '192.168.0.0/16' - are used internally and are not routed across the public Internet. '127.0.0.0/8' is loopback. '169.254.0.0/16' is link-local. Subnetting lets an organization divide address space into sensible broadcast domains. The important skill is not only calculating ranges, but deciding whether two hosts consider each other local.\n\nA wrong mask can create one-way or confusing reachability even when the written addresses look similar.\n\nA subnet mask contains contiguous network bits followed by host bits. A /24 leaves eight host bits; a /26 leaves six and creates blocks of 64 addresses. To find a subnet boundary, determine the block size in the interesting octet and locate the range containing the address. The first address is the network identifier and the last is the directed broadcast in ordinary IPv4 subnetting.\n\nPrivate ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. They are not routed across the public Internet. 127.0.0.0/8 is loopback; 169.254.0.0/16 is link-local. Public versus private says nothing by itself about safety or ownership.\n\n## Worked reasoning and field notebook\n\nConsider this support case: An address 192.0.2.130/26 must be placed in the correct subnet without a calculator. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Dotted-decimal and CIDR notation; Network, host, and broadcast addresses; Private, public, loopback, and link-local ranges.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes mask, block size, network, broadcast, usable range and gateway plan. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is guessing from the final octet without applying the prefix. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure.\n\nRecord cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up. This makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "For every IPv4 problem, write the address and prefix, calculate the network boundary, then decide whether a gateway is needed.",
          "tables": [
            {
              "title": "Common IPv4 prefix sizes",
              "headers": [
                "Prefix",
                "Addresses per subnet",
                "Ordinary usable host addresses"
              ],
              "rows": [
                [
                  "/24",
                  "256",
                  "254"
                ],
                [
                  "/25",
                  "128",
                  "126"
                ],
                [
                  "/26",
                  "64",
                  "62"
                ],
                [
                  "/27",
                  "32",
                  "30"
                ],
                [
                  "/28",
                  "16",
                  "14"
                ],
                [
                  "/29",
                  "8",
                  "6"
                ],
                [
                  "/30",
                  "4",
                  "2"
                ]
              ]
            }
          ],
          "lab": {
            "goal": "Practice four subnets",
            "environment": "Paper or a subnet calculator used only to check work",
            "steps": [
              "Divide a /24 into four equal subnets.",
              "List network, usable range, and broadcast for each.",
              "Assign gateways and two hosts without duplication."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "IPv6 essentials",
          "lead": "IPv6 expands address space and changes several local-network mechanisms while preserving routed packet delivery.",
          "keyIdeas": [
            "Hexadecimal notation and prefix length",
            "Global unicast, link-local, loopback, and multicast",
            "SLAAC, DHCPv6, and neighbor discovery"
          ],
          "content": "IPv6 addresses contain 128 bits and are written as eight hexadecimal groups. Leading zeroes in a group may be omitted, and one continuous run of zero groups may be compressed with '::'. A prefix such as '/64' identifies the network portion. Do not confuse textual compression with a different address; expand both addresses before comparing them. Every normal IPv6 interface has a link-local address in 'fe80::/10', used for communication on the local link.\n\nGlobal unicast addresses are Internet-routable where allowed. '::1' is loopback. IPv6 uses multicast rather than IPv4 broadcast for many discovery functions. Neighbor Discovery uses ICMPv6 to find routers, resolve nearby link-layer addresses, and verify reachability. Router advertisements can allow Stateless Address Autoconfiguration. DHCPv6 may provide addresses or additional settings. ICMPv6 is therefore fundamental and should not be blocked indiscriminately. Many networks operate dual stack, so a technician must inspect both IPv4 and IPv6 rather than assume only one is active.\n\nIPv6 addresses are 128 bits written in hexadecimal groups. Leading zeros inside a group may be omitted, and one run of all-zero groups may be replaced with a double colon (::). Expand an address before comparing prefixes. A /64 is the normal size of many LAN subnets, leaving the lower 64 bits for an interface identifier. Every IPv6 interface uses link-local addressing, commonly within fe80::/10, for local functions such as neighbor and router discovery.\n\nGlobal unicast addresses are broadly routable; unique local addresses are intended for private use; multicast replaces IPv4 broadcast. Hosts may learn a prefix and gateway through router advertisements and obtain other information through SLAAC or DHCPv6.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A dual-stack client reaches a service over IPv4 but stalls when IPv6 is preferred. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Hexadecimal notation and prefix length; Global unicast, link-local, loopback, and multicast; SLAAC, DHCPv6, and neighbor discovery.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes IPv6 address, neighbor table, route, router advertisement, DNS answer and packet-too-big messages. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is disabling IPv6 before finding the broken path. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "A website may fail over IPv6 while IPv4 tests succeed. Check which address family the application selected and test each deliberately.",
          "lab": {
            "goal": "Read IPv6 addresses",
            "environment": "An IPv6-capable host",
            "steps": [
              "Display link-local and global addresses.",
              "Expand one compressed address by hand.",
              "Identify the prefix and default router.",
              "Ping the local IPv6 loopback and, if available, the gateway."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "ARP, neighbor discovery, and default gateways",
          "lead": "Hosts need a link-layer destination before they can place an IP packet into a local frame.",
          "keyIdeas": [
            "ARP for IPv4",
            "Neighbor Discovery for IPv6",
            "Local destination versus next-hop gateway"
          ],
          "content": "For an IPv4 destination on the local subnet, a host uses ARP to ask which MAC address owns the target IP. For a remote destination, it resolves the MAC address of the default gateway instead. The IP destination remains the remote host; the Ethernet destination is the gateway for the first hop. The ARP cache remembers mappings temporarily. IPv6 uses Neighbor Discovery rather than ARP.\n\nThe reasoning is similar, though the messages use ICMPv6 multicast. Stale or conflicting neighbor entries can interrupt communication. Duplicate addresses may create intermittent service as different devices answer for the same address. A missing default gateway affects remote networks but not normal same-subnet traffic. A gateway outside the host's local prefix cannot be reached directly. When diagnosing, inspect the route table and neighbor cache, then generate traffic and see whether the expected entry appears.\n\nClearing caches should be a deliberate test, not a ritual. A host compares the destination with its own prefix. For an on-link IPv4 destination, it ARPs for that host. For an off-link destination, it ARPs for the default gateway and places the remote IP packet inside a frame addressed to the gateway’s MAC. The router removes that frame and builds a new one for the next link.\n\nNeighbor caches age and can contain incomplete, reachable, stale, or failed entries depending on the operating system. Clearing a cache can be a test but also changes state.\n\nIPv6 Neighbor Discovery uses ICMPv6 messages and also supports duplicate-address detection and router discovery. Because these local protocols affect all routed traffic, a misleading neighbor entry can resemble a remote outage.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A client sends a remote packet to the gateway MAC rather than the server MAC. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: ARP for IPv4; Neighbor Discovery for IPv6; Local destination versus next-hop gateway.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes prefix comparison, ARP or neighbor entry, frame addresses and packet addresses. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is expecting end-to-end MAC addresses. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "If a host can reach classmates on its VLAN but nothing beyond it, investigate the gateway, its neighbor entry, routing, and upstream policy.",
          "lab": {
            "goal": "Observe ARP",
            "environment": "Two lab hosts or Packet Tracer",
            "steps": [
              "Clear or note the ARP cache.",
              "Ping a local peer and display the new mapping.",
              "Ping a remote address and identify the gateway mapping.",
              "Explain why the remote host MAC does not appear."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "DHCP, DNS, and NAT",
          "lead": "Three common services automate configuration, translate names, and conserve or hide address space.",
          "keyIdeas": [
            "DHCP lease process and scope options",
            "DNS records, resolvers, and caching",
            "Static and dynamic NAT; PAT"
          ],
          "content": "DHCP commonly follows Discover, Offer, Request, and Acknowledgment. The server leases an address and supplies options such as prefix, gateway, DNS server, and lease duration. A relay forwards requests between subnets because the initial client broadcast does not cross a router. Scope exhaustion, a wrong VLAN, a missing relay, or a rogue server can all produce bad client settings. DNS maps names to information.\n\nA client asks a recursive resolver, which may answer from cache or query authoritative servers.\n\nAn A record holds IPv4, AAAA holds IPv6, CNAME aliases one name to another, MX identifies mail handling, and PTR supports reverse lookup. DNS failure can make the Internet look down even while IP reachability works.\n\nNetwork Address Translation rewrites addresses across a boundary.\n\nPort Address Translation lets many private hosts share one public IPv4 address by tracking transport ports. NAT is not the same as a firewall, though many home routers perform both. Troubleshoot each service independently: verify the lease, test reachability by address, test name resolution, and inspect translation or firewall state at the gateway. The common IPv4 DHCP exchange is remembered as DORA: Discover, Offer, Request, Acknowledge.\n\nThe first client messages may be broadcasts because the host has no usable address.\n\nA DHCP relay forwards requests between subnets so each VLAN does not need a local server. Leases also carry options such as gateway, DNS, and duration. DNS resolvers ask authoritative hierarchy servers or use cached results. An A record maps a name to IPv4, AAAA to IPv6, CNAME aliases a name, MX identifies mail service, and PTR supports reverse lookup.\n\nNAT commonly translates private source addresses to a public address; PAT distinguishes many conversations with ports. Translation requires state and logs when attribution matters.\n\n## Worked reasoning and field notebook\n\nConsider this support case: Clients receive addresses but use an incorrect resolver after a DHCP change. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: DHCP lease process and scope options; DNS records, resolvers, and caching; Static and dynamic NAT; PAT.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes lease options, scope, relay, DNS query, cache and server authority. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is manually fixing each client instead of the shared option. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure.\n\nRecord cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up. This makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "The sequence “gateway ping works, public IP works, hostname fails” strongly points toward DNS rather than a dead Internet connection.",
          "lab": {
            "goal": "Trace supporting services",
            "environment": "A lab host",
            "steps": [
              "Display the DHCP lease details.",
              "Resolve one name and identify the DNS server used.",
              "Compare a lookup with a ping to a known address.",
              "On a simulated router, inspect NAT translations after outbound traffic."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Routing and application protocols",
      "weight": "Communication between networks",
      "intro": "Routers choose next hops for packets, while transport and application protocols determine how software conversations behave.",
      "topics": [
        {
          "title": "Routing tables and path selection",
          "lead": "A router matches the destination address against known prefixes and forwards toward the best match.",
          "keyIdeas": [
            "Connected, static, default, and dynamic routes",
            "Longest-prefix match",
            "Next hop and exit interface"
          ],
          "content": "A routing table contains destination prefixes and instructions for reaching them. Directly connected routes appear when an interface is operational and addressed. Static routes are entered by an administrator. Dynamic routing protocols exchange reachability with other routers. A default route matches destinations for which no more specific route exists. Routers use - **longest-prefix match**: among matching entries, the route with the most specific prefix wins.\n\nA '/24' route is preferred over a '/16' route for an address matching both.\n\nOther metrics decide between routes to the same prefix, depending on how they were learned. Forwarding requires more than a table entry. The next hop must be reachable, the outgoing interface must work, return routing must exist, and policy must allow the traffic. Traceroute can reveal successive Layer 3 hops, although filtering and load balancing can make its output incomplete.\n\nA route contains a destination prefix, next hop or outgoing interface, and a preference or metric.\n\nRouters first choose the longest matching prefix - the most specific route. If several routes have the same prefix length, administrative preference and metric help select among them. A default route, 0.0.0.0/0 or::/0, matches only when no more specific entry does. Directly connected routes appear when an interface and its network are operational. Static routes are configured by an administrator.\n\nDynamic routing protocols exchange reachability and adapt to change.\n\nA router forwards based on the destination address, decreases TTL or hop limit, and rewrites the local frame; it normally does not change the original source and destination IP unless translation occurs.\n\n## Worked reasoning and field notebook\n\nConsider this support case: Two routes cover the same destination and the unexpected one forwards traffic. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Connected, static, default, and dynamic routes; Longest-prefix match; Next hop and exit interface.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes prefix length, route source, metric, next hop, interface and return path. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is comparing metrics before longest prefix. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "A ping failure does not prove the route is missing. Work outward: source route, first hop, intermediate routes, destination policy, and return path.",
          "tables": [
            {
              "title": "A route entry answers",
              "headers": [
                "Field",
                "Question"
              ],
              "rows": [
                [
                  "Destination prefix",
                  "Which addresses does this route match?"
                ],
                [
                  "Next hop",
                  "Which router receives the packet next?"
                ],
                [
                  "Outgoing interface",
                  "Which local link carries it?"
                ],
                [
                  "Metric or preference",
                  "Which equal-prefix route is preferred?"
                ],
                [
                  "Source",
                  "Was it connected, static, or learned?"
                ]
              ]
            }
          ],
          "lab": {
            "goal": "Read a routing table",
            "environment": "Packet Tracer with three routers",
            "steps": [
              "Identify connected and static routes.",
              "Predict the route selected for three destination addresses.",
              "Use traceroute and compare observed hops with the diagram."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "TCP, UDP, ports, and sockets",
          "lead": "Transport protocols let multiple applications share a host and choose between reliability and low overhead.",
          "keyIdeas": [
            "TCP connection setup, sequencing, acknowledgment, and retransmission",
            "UDP datagrams",
            "Well-known ports and client ephemeral ports"
          ],
          "content": "TCP creates a connection with a three-way handshake, numbers bytes, acknowledges received data, retransmits missing data, and controls flow. This reliability helps web, file, and many administrative protocols. It adds state and delay, and it cannot make a broken network reliable without limit. UDP sends independent datagrams without a connection handshake or built-in retransmission. Applications choose it when low overhead, multicast support, or timing matters, or when the application implements its own recovery.\n\nDNS commonly uses UDP for ordinary queries but can use TCP. Real-time media often tolerates an occasional lost packet better than a late retransmission. A port number identifies a service endpoint within a host. Servers usually listen on a known port, while clients select temporary ephemeral ports. A socket is commonly described by protocol, local address and port, and remote address and port.\n\nKnow the purpose - not only the number - of common services such as SSH 22, DNS 53, HTTP 80, HTTPS 443, DHCP 67/68, and NTP 123.\n\nThe TCP three-way handshake synchronizes sequence state: SYN, SYN-ACK, ACK. A server that is not listening may answer with RST; a firewall may silently discard the attempt; packet loss may produce retransmissions. These outcomes suggest different next steps. TCP closes gracefully with FIN exchanges or abruptly with RST. UDP has no transport handshake, so a sent datagram does not prove a listener received it.\n\nAn application may reply, remain silent, or trigger an ICMP port-unreachable response.\n\nPort numbers range from 0 through 65535. Familiar server ports are conventions, and encrypted or tunneled applications can use unexpected ports. Confirm a service with application behavior and process ownership.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A server listens locally but remote TCP connections time out. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: TCP connection setup, sequencing, acknowledgment, and retransmission; UDP datagrams; Well-known ports and client ephemeral ports.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes listening socket, local firewall, handshake packets, path policy and return route. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is assuming a listening process proves network reachability. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "When a host answers ping but an application fails, test whether the intended transport port is listening and allowed rather than declaring the whole host offline.",
          "lab": {
            "goal": "Inspect connections",
            "environment": "A lab computer",
            "steps": [
              "Open an HTTPS site.",
              "Use the operating system connection tool to find the local ephemeral port and remote port 443.",
              "Close the page and observe how the connection state changes."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Web, file, email, and remote-access protocols",
          "lead": "Application protocols define the messages clients and servers exchange.",
          "keyIdeas": [
            "HTTP and HTTPS",
            "SSH, RDP, FTP, SFTP, and SMB",
            "SMTP, IMAP, and POP3"
          ],
          "content": "HTTP uses requests and responses to transfer web resources. HTTPS is HTTP protected by TLS, providing encryption, server authentication, and integrity when certificates are validated. A padlock does not prove a site is trustworthy; it proves the connection is protected to the named endpoint represented by the certificate. SSH provides encrypted remote login and can carry secure file transfer through SFTP.\n\nRDP provides graphical remote access.\n\nTraditional FTP uses separate control and data connections and does not protect credentials unless a secure variant is used. SMB supports shared files and printers, especially in Windows environments. SMTP transfers outgoing mail between systems. IMAP and POP3 allow clients to retrieve or synchronize messages. Many modern services run on encrypted ports or upgrade a connection with TLS. On the exam and in practice, connect a protocol's job, transport, port, security properties, and likely logs.\n\nDisable unnecessary services and avoid exposing administrative ports directly to untrusted networks. TLS protects a connection only when the client validates the certificate name, issuer chain, validity, and cryptographic negotiation. HTTPS on port 443 is common, but the application can redirect, use a proxy, or run elsewhere. DNS must usually work before a name-based web connection succeeds. Separate the service from the access method.\n\nA file share may use SMB, a web portal, SFTP, or cloud synchronization, each with different ports and logs.\n\nEmail delivery may involve several SMTP hops before a user reads mail with IMAP, POP3, or a web application. When troubleshooting, identify which leg fails and whether authentication, transport, name resolution, or application policy is responsible.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A file transfer works with SFTP but fails when a user selects FTPS. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: HTTP and HTTPS; SSH, RDP, FTP, SFTP, and SMB; SMTP, IMAP, and POP3.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes client mode, protocol, port, TLS or SSH negotiation and server capability. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is treating similarly named secure protocols as interchangeable. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Choosing the correct protocol is partly a security decision. Prefer SSH/SFTP over Telnet/FTP, and protect remote administration with VPNs or strong access policy.",
          "lab": {
            "goal": "Build a protocol chart",
            "environment": "Your notes",
            "steps": [
              "For ten common protocols, record purpose, transport, default port, and whether traffic is encrypted by default.",
              "Add one safer alternative for each insecure legacy protocol."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "ICMP and basic diagnostic traffic",
          "lead": "ICMP reports network conditions and supports tools such as ping and traceroute.",
          "keyIdeas": [
            "Echo request and reply",
            "Destination unreachable and time exceeded",
            "Why filtering can make results ambiguous"
          ],
          "content": "ICMP is a control and diagnostic protocol carried by IP. Ping usually sends an echo request and waits for an echo reply. A successful reply demonstrates a particular round trip at that moment; it does not prove that DNS, TCP port 443, or an application is healthy. Routers may send time-exceeded messages when a packet's TTL or hop limit reaches zero.\n\nTraceroute uses this behavior to reveal hops.\n\nDestination-unreachable messages can report that a network, host, port, or fragmentation requirement cannot be satisfied. IPv6 relies heavily on ICMPv6 for neighbor discovery and path behavior. Devices can rate-limit or block ICMP, so silence is ambiguous. Compare with application tests, route tables, ARP or neighbor state, and observations from another location. Do not “fix” an outage by allowing all ICMP everywhere; permit the necessary messages according to policy.\n\nPing output commonly reports sequence, round-trip time, and loss. A local gateway reply verifies the endpoint, local link, gateway interface, and return path for ICMP at that moment. It does not test the provider or DNS. A remote IP reply adds evidence for routing beyond the LAN. A hostname reply also exercises name resolution. Traceroute deliberately sends packets whose TTL or hop limit expires at successive routers.\n\nAsterisks can mean filtering, rate limiting, loss, an asymmetric return path, or no response - not necessarily a broken hop. The path shown toward a destination may differ from the return path, and load balancing may show different routers across probes.\n\n## Worked reasoning and field notebook\n\nConsider this support case: Ping fails while HTTPS succeeds normally. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Echo request and reply; Destination unreachable and time exceeded; Why filtering can make results ambiguous.\n\nTranslate each concept into something observable rather than repeating its definition.\n\nBuild an evidence plan before touching the network. Useful evidence here includes ICMP policy, application connection, DNS, path and destination behavior. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible. A failed test proves only what that test actually exercises.\n\nFor example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization.\n\nChange one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit. A common trap is declaring a host down from one unanswered probe. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior.\n\nFinish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up. This makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Treat ping as one observation in a chain of evidence. State exactly what a successful or failed test establishes and what it does not.",
          "lab": {
            "goal": "Use ping carefully",
            "environment": "A lab host",
            "steps": [
              "Ping loopback, the host address, default gateway, public address, and hostname in that order.",
              "For each result, name the component it tests.",
              "Change no production firewall settings."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Security and support operations",
      "weight": "Safe network support",
      "intro": "Entry-level network work includes protecting access, handling documentation, and knowing when a problem should be escalated.",
      "topics": [
        {
          "title": "Basic network security",
          "lead": "Networks are safer when access is limited, management is protected, and unnecessary exposure is removed.",
          "keyIdeas": [
            "Least privilege and segmentation",
            "Firewalls, ACLs, and secure management",
            "Patching, backups, and physical protection"
          ],
          "content": "Least privilege gives users, devices, and services only the access required for their work. Segmentation limits which systems share a broadcast domain or can communicate through a policy boundary. Firewalls and router access control lists permit or deny traffic based on defined criteria. These controls must be documented and tested; an undocumented “temporary” permit often becomes permanent. Management interfaces deserve special protection.\n\nUse SSH rather than Telnet, HTTPS rather than HTTP, strong individual accounts, multifactor authentication where supported, and a restricted management network.\n\nChange default credentials. Keep firmware supported and patched, back up configurations, synchronize time, and send important logs to a protected system. Physical access can bypass many logical controls. Secure wiring closets, console ports, reset buttons, and spare equipment. Do not connect unknown devices or cables to investigate them on a production LAN. Follow policy for suspicious hardware and preserve evidence if an incident may have occurred.\n\nAn ACL is processed according to platform rules and direction. A stateless entry evaluates packet headers; a stateful firewall also tracks conversations. Default deny is safer when legitimate requirements are known, but an accidental broad deny can interrupt essential services. Every rule should have a purpose, owner, and review date. Secure management also includes limiting source networks, timing out idle sessions, protecting console access, logging changes, and maintaining an emergency path.\n\nConfiguration backups can contain password representations, community strings, addresses, and keys and should be protected. Segment users, guests, servers, management, voice, and untrusted devices according to actual communication needs.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A small-office router still uses defaults and exposes administration to the internet. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Least privilege and segmentation; Firewalls, ACLs, and secure management; Patching, backups, and physical protection.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes firmware, credentials, WAN policy, wireless mode, UPnP, DNS and backup. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is adding products before fixing basic configuration. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Security and availability are related: a change that blocks an attack but also blocks every user is not a successful control.",
          "lab": {
            "goal": "Review a lab router",
            "environment": "A non-production configuration",
            "steps": [
              "List management protocols and who can reach them.",
              "Identify defaults, unused services, and missing backups.",
              "Write a prioritized hardening list without applying it."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "SOHO and small-office networks",
          "lead": "A small router often combines routing, switching, wireless, DHCP, NAT, DNS forwarding, and firewall functions.",
          "keyIdeas": [
            "Internet/WAN and LAN boundaries",
            "Guest networks and IoT isolation",
            "Secure wireless and administration"
          ],
          "content": "Home and small-office devices combine many roles, which makes setup convenient but troubleshooting less obvious. Begin by separating the provider handoff, router WAN interface, internal switch ports, access point radios, DHCP service, and firewall/NAT functions conceptually even when they live in one box. Replace default administrative credentials, update firmware, disable remote administration unless it is deliberately protected, and use WPA2-AES or WPA3 with a strong passphrase.\n\nWPS creates unnecessary risk in many environments. A guest network should be isolated from trusted devices. Internet-of-Things devices deserve their own network when possible because they may have weak update support. Document provider settings before factory resets. A reset is destructive: it can erase authentication, VLAN, phone, or static-address details needed to reconnect. Back up configuration and confirm that a rollback or provider contact is available.\n\nMany provider devices operate as both modem or optical terminal and router; others hand a public address to a separate customer router. Double NAT occurs when two routers translate in series and can complicate inbound services, gaming, VPNs, and troubleshooting. “Bridge mode” changes responsibilities and should not be enabled without a recovery plan. Place the router where ventilation and cabling are safe, but place wireless radios for coverage rather than hiding them behind metal or at one edge of the space.\n\nUse separate administrator and Wi-Fi credentials. Record the provider account, WAN method, internal subnet, DHCP pool, reservations, DNS choice, SSIDs, security mode, guest isolation, and backup date.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A home office needs trusted, guest, and IoT devices separated on modest equipment. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Internet/WAN and LAN boundaries; Guest networks and IoT isolation; Secure wireless and administration.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes SSID and VLAN mapping, routes, firewall flows, DNS, updates and management access. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is creating different names without enforcing isolation. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "For a small network outage, determine whether the failure is Wi-Fi only, LAN-wide, router-to-provider, DNS-only, or one device. The combined box should not collapse your reasoning into “the router is broken.”",
          "lab": {
            "goal": "Map a home-router interface",
            "environment": "Screenshots or a spare router; do not expose secrets",
            "steps": [
              "Locate WAN, LAN, DHCP, Wi-Fi security, guest network, firmware, and backup pages.",
              "Record what each setting controls.",
              "Do not change a live network."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Documentation, tickets, and escalation",
          "lead": "Professional support records what happened, protects users, and brings in help at the right time.",
          "keyIdeas": [
            "Clear problem statements and timelines",
            "Change approval and rollback",
            "Escalation with useful evidence"
          ],
          "content": "A good ticket distinguishes the user's report from verified facts. Record who is affected, when the issue began, its scope, recent changes, exact error messages, device and location, tests performed, results, and current impact. Use neutral language. “User cannot reach the attendance site; gateway and DNS tests pass; HTTPS connection to one destination times out” is far more useful than “Internet broken.”\n\nChanges should have an owner, reason, risk assessment, maintenance window, validation step, and rollback plan.\n\nPreserve the old configuration. Avoid several simultaneous changes because success will not reveal which one helped and failure will be harder to reverse. Escalation is not failure. Escalate when the issue exceeds access or skill level, risks safety or evidence, affects many users, violates a service target, or requires another organization. Include a concise summary and supporting logs with sensitive values removed.\n\nContinue safe observation while waiting, but do not improvise beyond authorization.\n\nA useful timeline uses exact times and time zone: report received, symptom reproduced, tests, changes, recovery, and validation. Attach only relevant command output and explain what it proves. Redact public sharing of usernames, addresses, serial numbers, keys, and personal data according to policy. Priority combines impact and urgency. One user with a workaround differs from a building-wide outage during an exam, even if the technical cause is identical.\n\nEscalation should state the service impact, scope, start time, topology, recent changes, evidence, actions already taken, current risk, and exact help requested. Do not make the next team repeat safe tests merely because the record is vague.\n\n## Worked reasoning and field notebook\n\nConsider this support case: An outage ticket says only that the network is slow. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Clear problem statements and timelines; Change approval and rollback; Escalation with useful evidence.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes user task, time, scope, location, error, comparison, changes and attached evidence. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is closing with works now and no reproducible validation. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Your future teammate should be able to continue from the ticket without calling you to reconstruct every step.",
          "lab": {
            "goal": "Write a model ticket",
            "environment": "A fictional outage scenario",
            "steps": [
              "Write the initial report and scope.",
              "Add five tests with results.",
              "State the most likely layer and next action.",
              "Write an escalation summary in five sentences."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Backups, baselines, and monitoring",
          "lead": "Support becomes faster when normal behavior is known and configurations can be restored.",
          "keyIdeas": [
            "Configuration backups",
            "Performance and availability baselines",
            "Logs, alerts, and time synchronization"
          ],
          "content": "A configuration backup should be readable, protected, versioned, and tested. A backup that cannot be found or restored is not a recovery plan. Keep credentials and secrets out of casually shared files. Before a substantial change, capture the current running configuration and relevant status. A baseline records normal measurements such as link utilization, latency, error counters, wireless client counts, CPU, memory, and typical traffic patterns.\n\nIt gives meaning to an alert. Eighty percent utilization might be normal during a scheduled backup or alarming at 3 a.m. Baselines must be refreshed as the network changes. Logs tell a timeline only when clocks agree, so network time synchronization matters. Alerts should be actionable and routed to someone who can respond. Too many low-value alerts teach people to ignore them.\n\nA junior technician should know where logs live, how long they are retained, which events require escalation, and how to avoid altering evidence.\n\nBack up both configuration and the knowledge needed to restore it: software compatibility, licenses, startup method, dependencies, and console access. Test on nonproduction equipment or through a documented restoration exercise. A diff between versions makes unplanned changes visible. Monitoring can use device logs, interface counters, SNMP polling or traps, flow records, wireless controllers, synthetic service checks, and endpoint observations. Polling asks periodically; a trap or event is sent when a condition occurs.\n\nBoth can fail. Monitor the monitoring path and use several signals for important services. Thresholds should allow normal bursts and alert on sustained or consequential conditions.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A replacement switch cannot be restored because the only backup requires the failed identity service. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Configuration backups; Performance and availability baselines; Logs, alerts, and time synchronization.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes backup location, encryption, versions, credentials, bootstrap, spare and restore test. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is counting an unreachable backup as recoverable. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Take “before” and “after” snapshots for changes. They make validation concrete and help distinguish a new problem from a preexisting one.",
          "lab": {
            "goal": "Create a small baseline",
            "environment": "A lab switch or Packet Tracer",
            "steps": [
              "Record interface status, error counters, and a latency sample.",
              "Generate ordinary traffic and record again.",
              "Describe which change is expected and which would indicate a fault."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Help-desk communication and safety",
          "lead": "Technical skill includes protecting people, equipment, data, and trust during support work.",
          "keyIdeas": [
            "Identity verification and privacy",
            "Electrical, laser, ladder, and ESD safety",
            "Clear, respectful user communication"
          ],
          "content": "Verify identity before resetting credentials, revealing account details, or making access changes. Collect only information needed for the task and avoid placing passwords, tokens, personal data, or private packet contents into tickets. Screen sharing and remote control should be explained and consented to under the organization's process. Physical work has hazards. Follow electrical and ladder rules, use electrostatic-discharge precautions where appropriate, respect equipment airflow, and never look into optical fiber.\n\nDo not work alone in restricted spaces if procedure requires supervision. A network outage does not justify bypassing safety. Explain what you know, what you are testing, and when the user should expect another update. Avoid blaming a person for a mistake. Repeat critical instructions in writing. If you do not know, say so and find the right source. Trust is easier to keep than to rebuild after an overconfident guess.\n\nUse a consistent remote-support consent process: identify yourself, explain the task, ask before viewing or controlling the screen, narrate meaningful actions, and disconnect when finished. Never ask a user to read a password or one-time code to you. Identity recovery follows policy even when a caller sounds urgent. For hardware work, identify both ends of a circuit, protect redundant paths, and check whether PoE is present.\n\nUse approved tools and PPE. Cable pathways have fire, building-code, and trip considerations. Photograph or label before moving connections if policy permits. If the work touches mains electricity, ceiling spaces, hazardous areas, or active laser equipment beyond your training, stop and escalate.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A technician must work above a ceiling near power and unfamiliar cabling. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Identity verification and privacy; Electrical, laser, ladder, and ESD safety; Clear, respectful user communication.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes authorization, PPE, ladder and electrical safety, cable type, partner and escalation. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is letting urgency override physical safety. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "A calm explanation often improves an incident even before the technical repair: users can choose workarounds and stop repeating risky actions.",
          "lab": {
            "goal": "Practice an update",
            "environment": "A fictional school Wi-Fi outage",
            "steps": [
              "Write a two-sentence initial acknowledgment.",
              "Write a status update after finding that one access point failed.",
              "Write a resolution message with workaround and next step."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Structured troubleshooting",
      "weight": "Tools and problem solving",
      "intro": "Troubleshooting is a controlled investigation. The aim is not to try many commands; it is to reduce uncertainty without causing another problem.",
      "topics": [
        {
          "title": "A repeatable troubleshooting method",
          "lead": "A method keeps an urgent problem from turning into random configuration changes.",
          "keyIdeas": [
            "Define, hypothesize, test, plan, implement, verify, document",
            "Scope and recent changes",
            "One controlled variable at a time"
          ],
          "content": "Begin by identifying the problem and its scope. Ask what works, what fails, who is affected, when it started, whether it is constant, and what changed. Reproduce the symptom safely. Establish a theory from the evidence, starting with likely and easy-to-test causes rather than the most dramatic possibility. Test the theory with the smallest useful observation. If it is false, update the theory; do not force the evidence to fit.\n\nOnce the cause is supported, make a plan that considers impact, authorization, backups, and rollback. Implement the approved fix, then verify the original service and check for side effects. Finally document cause, action, validation, and prevention. A workaround restores service without removing the cause; make that distinction explicit. In a major incident, containment may take priority over perfect diagnosis, but changes should still be recorded.\n\nA useful problem statement includes expected behavior and actual behavior: “One managed laptop in Room 302 receives a link but no DHCP lease since 10:15; other devices on the same wall switch work.” Scope narrows the search immediately. Ask whether the symptom follows the user, device, cable, port, location, or service. Prefer discriminating tests. Moving a known-good cable to the suspect port separates cable from endpoint only if the move is authorized and documented.\n\nComparing with a healthy peer reveals relevant differences. After a fix, test the original user task, monitor for recurrence, restore temporary changes, update diagrams or baselines, and explain the cause rather than reporting only “resolved.” **Worked reasoning and field notebook** Consider this support case: Several reports arrive at once after a maintenance window. Begin by writing the user-visible symptom and the smallest known scope.\n\nDo not change configuration yet.\n\nIdentify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Define, hypothesize, test, plan, implement, verify, document; Scope and recent changes; One controlled variable at a time. Translate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes scope, timeline, change record, baseline, common dependency and rollback trigger.\n\nFor every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible. A failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization.\n\nChange one meaningful variable at a time.\n\nPrefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit. A common trap is handling every report as an unrelated endpoint fault. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior.\n\nFinish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up. This makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "A reboot can be a valid recovery step, but if used too early it destroys volatile evidence and leaves the original cause unknown.",
          "lab": {
            "goal": "Troubleshoot on paper",
            "environment": "A scenario: one classroom cannot reach any network service",
            "steps": [
              "Write five scope questions.",
              "Rank three hypotheses.",
              "Design one low-risk test for each.",
              "State validation and rollback for the likely fix."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Command-line tools for endpoints",
          "lead": "Small utilities reveal configuration, reachability, name resolution, paths, and connections.",
          "keyIdeas": [
            "ipconfig/ifconfig/ip, ping, and traceroute",
            "nslookup/dig",
            "arp/ip neigh, route/ip route, netstat/ss"
          ],
          "content": "Use 'ipconfig /all' on Windows or 'ip address', 'ip route', and resolver tools on Linux to inspect configuration. 'ping' tests an ICMP round trip. 'tracert' or 'traceroute' shows attempted Layer 3 hops. 'nslookup' or 'dig' queries DNS and can target a particular resolver. 'arp -a' or 'ip neigh' displays local neighbor mappings. 'route print' or 'ip route' shows path selection. 'netstat' and 'ss' show listening and established transport sockets. These tools answer different questions; none is an all-purpose “network test.” Read output carefully.\n\nA timeout, name error, refused connection, and unreachable message are different. Record the exact command, target, timestamp, and result. Commands vary across operating systems and versions, so consult built-in help. Use only authorized targets and avoid scanners on networks where you lack permission. On Windows, ipconfig /all, route print, arp -a, nslookup, tracert, ping, netstat -ano, and PowerShell network cmdlets offer complementary views.\n\nOn Linux, ip address, ip route, ip neigh, resolvectl or resolver configuration, dig, tracepath, ping, and ss -plant are common. macOS provides similar tools with different details.\n\nRead the selected source interface and route, not merely whether a target answered. A DNS query to the configured resolver and the same query to another authorized resolver can isolate resolver behavior. A TCP connection refusal shows the destination answered but no service accepted that port; a timeout does not reveal where silence occurred.\n\n## Worked reasoning and field notebook\n\nConsider this support case: An endpoint reaches its gateway but not a remote application. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: ipconfig/ifconfig/ip, ping, and traceroute; nslookup/dig; arp/ip neigh, route/ip route, netstat/ss.\n\nTranslate each concept into something observable rather than repeating its definition.\n\nBuild an evidence plan before touching the network. Useful evidence here includes ipconfig or ip addr, ARP, ping, traceroute, DNS, socket and application test. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible. A failed test proves only what that test actually exercises.\n\nFor example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit. A common trap is running commands without stating which hypothesis each tests.\n\nThe safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Build a chain of tests from local to remote: loopback, interface, gateway, remote IP, DNS name, transport port, and application.",
          "commands": [
            {
              "title": "Endpoint diagnostic sequence",
              "description": "Choose the commands for the operating system; use only authorized destinations.",
              "code": "# Windows\nipconfig /all\nroute print\narp -a\nnslookup example.com\ntracert example.com\nnetstat -ano\n\n# Linux\nip address\nip route\nip neigh\ndig example.com\ntracepath example.com\nss -plant"
            }
          ],
          "lab": {
            "goal": "Create a diagnostic transcript",
            "environment": "A lab host",
            "steps": [
              "Record configuration and route.",
              "Test gateway and one remote address.",
              "Query DNS.",
              "Inspect a connection to a service.",
              "Summarize findings without pasting unrelated output."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Packet capture with Wireshark",
          "lead": "A capture shows what entered or left an interface and helps confirm the sequence of a conversation.",
          "keyIdeas": [
            "Capture versus display filters",
            "Frame, packet, transport, and application fields",
            "Privacy, authorization, and interpretation limits"
          ],
          "content": "Wireshark decodes captured frames into protocol fields. A **capture filter** limits what is collected; a **display filter** selects from data already captured. Begin with a narrow question and reproduce one event so the capture remains understandable. Record which interface and observation point you used. Follow the sequence: ARP or Neighbor Discovery, DNS, TCP handshake if applicable, TLS setup, and application traffic.\n\nMissing packets can reflect the capture location rather than the network.\n\nChecksum warnings may result from NIC offload on the capturing host. Encrypted payloads remain unreadable without authorized keys, but addresses, timing, sizes, and handshakes still provide evidence. Packet captures can contain credentials, personal data, session tokens, and private communications. Obtain authorization, minimize collection, store files securely, and delete them according to policy. Share a filtered excerpt or written finding instead of an entire capture when possible.\n\nBefore capture, choose the interface and decide whether you need host-only traffic, a switch mirror, or a network tap. Use a bounded duration or file rotation. Record the capture point because an endpoint capture may show offload artifacts and cannot see another host’s switched unicast traffic. Begin analysis with capture time range, protocol hierarchy, endpoints, and conversations. Apply narrow display filters and retain the original file.\n\n“Follow stream” reassembles what was captured, not necessarily everything transmitted. If a SYN leaves three times with no response at the client, possible causes remain along the path or at the server; a simultaneous server-side capture can distinguish them.\n\n## Worked reasoning and field notebook\n\nConsider this support case: A packet capture shows repeated SYN messages but no reply. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: Capture versus display filters; Frame, packet, transport, and application fields; Privacy, authorization, and interpretation limits.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes capture point, direction, drops, route, listener, firewall and return path. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is claiming a firewall block from a one-sided capture. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "The strongest packet analysis statement names what was observed: “client sent three SYNs and received no reply at this interface,” not “the server is definitely down.”",
          "lab": {
            "goal": "Capture a DNS and web session",
            "environment": "Wireshark on your own lab traffic",
            "steps": [
              "Start a capture on the active interface.",
              "Resolve a test domain and open its HTTPS page.",
              "Filter DNS, then TCP port 443.",
              "Identify query, response, handshake, and TLS packets."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Common failure patterns",
          "lead": "Recognizing patterns speeds diagnosis, but each pattern still needs evidence.",
          "keyIdeas": [
            "No link, wrong VLAN, bad DHCP, and duplicate IP",
            "DNS-only and gateway failures",
            "Duplex, MTU, congestion, and wireless interference"
          ],
          "content": "No link points toward power, cable, optic, interface state, or hardware. A host with self-assigned IPv4 configuration suggests DHCP did not complete. Same-subnet success with remote failure suggests a gateway, route, or policy issue. Address-based success with name failure suggests DNS. One service failing while the host answers others suggests a port, service, certificate, proxy, or application problem. Intermittent faults need time-based evidence.\n\nInterface errors can reveal bad media or duplex problems.\n\nLarge packets failing while small ones work may suggest an MTU or path-MTU issue. Slow wireless at busy times may reflect airtime contention. Duplicate IPs can alternate between working and broken as neighbor caches change. Patterns are hypotheses, not verdicts. Compare affected and healthy devices, isolate layers, inspect logs and counters, and change one thing at a time. Verify the user's original task after the repair rather than stopping when one ping succeeds.\n\nUse a matrix rather than a memorized answer. If every device fails, investigate shared power, switch, uplink, gateway, DHCP, DNS, provider, or service. If one device fails, compare its cable or radio, VLAN, address, route, DNS, proxy, firewall, and credentials. If one application fails for everyone, focus on its name, port, server, certificate, dependency, and policy. Physical errors often increase continuously under load.\n\nWrong subnet masks can allow some local addresses while misclassifying others.\n\nDNS caching can make one device fail after a record change. An MTU problem may allow ping and small pages but stall large transfers. Always preserve the observation that distinguishes the pattern from its look-alikes.\n\n## Worked reasoning and field notebook\n\nConsider this support case: Intermittent errors appear only under load on one uplink. Begin by writing the user-visible symptom and the smallest known scope. Do not change configuration yet. Identify the last confirmed working boundary and form one theory that could explain every observation. The chapter's core concepts provide the model: No link, wrong VLAN, bad DHCP, and duplicate IP; DNS-only and gateway failures; Duplex, MTU, congestion, and wireless interference.\n\nTranslate each concept into something observable rather than repeating its definition. Build an evidence plan before touching the network. Useful evidence here includes link counters, utilization, queue drops, duplex, optics, temperature and correlated time. For every item, record device, interface or service, timestamp and time zone, collection point, and what result would support or weaken the theory. Compare with a working peer or baseline when possible.\n\nA failed test proves only what that test actually exercises. For example, link state does not prove addressing, and a successful ping does not prove name resolution or application authorization. Change one meaningful variable at a time. Prefer a reversible test, preserve the original state, and define the rollback trigger. If the result disproves the theory, update the theory instead of forcing the evidence to fit.\n\nA common trap is replacing devices without preserving the failing condition. The safer approach is to follow the packet path and separate physical signal, local framing, addressing, routing, transport, name service, policy, and application behavior. Finish by reproducing the original user task, checking adjacent services that the change could affect, and monitoring long enough for an intermittent failure. Record cause, action, configuration difference, exact validation, remaining uncertainty, and who owns follow-up.\n\nThis makes the exercise useful beyond the one device and turns troubleshooting into reusable operational knowledge.",
          "practical": "Create a personal symptom-to-test notebook, but leave room to record exceptions. Networks punish rigid checklists that ignore evidence.",
          "lab": {
            "goal": "Diagnose four cases",
            "environment": "Packet Tracer or written scenarios",
            "steps": [
              "For no link, no DHCP, DNS failure, and wrong VLAN, state the first three checks.",
              "For each, name one misleading observation.",
              "Write the final user-facing verification."
            ],
            "expected": "Record the result and explain what it tells you.",
            "verification": "Repeat the check after changing one relevant setting or condition."
          },
          "tables": [],
          "commands": [],
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    }
  ]
};
