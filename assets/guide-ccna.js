// Stuy Cybersecurity certification textbook data.
window.CERT_GUIDE = {
  "name": "Cisco CCNA Complete Study Guide & Textbook",
  "short": "Cisco CCNA",
  "version": "200-301 v1.1",
  "official": "https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccna.html",
  "subtitle": "A complete, lab-oriented textbook for the six CCNA 200-301 v1.1 domains, from Ethernet and IP fundamentals through campus operation, security, services, and automation.",
  "notice": "This book follows Cisco CCNA 200-301 v1.1 and uses the official domain order and weights: Network Fundamentals 20%, Network Access 20%, IP Connectivity 25%, IP Services 10%, Security Fundamentals 15%, and Automation and Programmability 10%. Commands are teaching examples: verify syntax for the IOS or controller release in your own authorized lab before use.",
  "parts": [
    {
      "title": "Domain 1: Network Fundamentals",
      "weight": "20% of exam",
      "intro": "Build the packet-forwarding model first: devices, media, addressing, transport, switching, wireless, virtualization, and the IOS environment in which those ideas are operated.",
      "topics": [
        {
          "title": "Network devices and the jobs they perform",
          "lead": "A network becomes easier to reason about when each device is understood by the decision it makes and the failure domain it creates.",
          "keyIdeas": [
            "Layer 2 switches forward frames within LANs; routers and Layer 3 switches forward packets between networks",
            "Firewalls and intrusion-prevention systems enforce and inspect policy",
            "Access points, wireless controllers, endpoints, servers, and PoE each contribute distinct functions"
          ],
          "content": "A Layer 2 switch learns source MAC addresses and forwards Ethernet frames inside a VLAN. A Layer 3 switch combines switching with hardware-based routing, commonly providing inter-VLAN gateways in a campus. A router connects IP networks, selects routes, rewrites the Layer 2 frame at every hop, and often provides WAN, NAT, or VPN functions.\n\nA next-generation firewall makes stateful policy decisions and may identify applications, users, or threats. An intrusion-prevention system examines traffic for malicious patterns and can block inline; an intrusion-detection system alerts without being the enforcement point. These controls do not replace secure endpoints or segmentation. Their visibility depends on placement and encryption.\n\nWireless access points provide radio connectivity and bridge client traffic into a wired design. A wireless LAN controller can centralize AP configuration, client policy, roaming, and tunnel termination. Endpoints originate or consume communication, while servers provide shared services such as DNS, DHCP, identity, web, and file access. Cisco appliances may combine several roles, so identify the function in the diagram rather than trusting the icon alone.\n\nPower over Ethernet delivers power and data over supported copper cabling to phones, cameras, and APs. The power-sourcing equipment must have enough budget for all powered devices. A device can negotiate power class, and insufficient budget may prevent startup or reduce radio capability. Design questions therefore connect topology, bandwidth, redundancy, security, and power, not just port count.",
          "practical": "On a network diagram, label every box with its forwarding or policy decision, its management method, and what users lose if it fails.",
          "tables": [
            {
              "title": "Common device roles",
              "headers": [
                "Device",
                "Primary decision"
              ],
              "rows": [
                [
                  "Layer 2 switch",
                  "Forward frame by VLAN and MAC address"
                ],
                [
                  "Router or Layer 3 switch",
                  "Forward packet by IP route"
                ],
                [
                  "Firewall",
                  "Permit or deny traffic by policy and state"
                ],
                [
                  "IPS",
                  "Inspect and potentially block malicious traffic"
                ],
                [
                  "Access point",
                  "Connect wireless clients to the distribution system"
                ],
                [
                  "Controller",
                  "Centralize policy and control for managed devices"
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
          "title": "Interfaces, cabling, duplex, and physical troubleshooting",
          "lead": "Many “network” failures begin as signal, media, connector, speed, duplex, or interface-state problems.",
          "keyIdeas": [
            "Copper and fiber choices depend on distance, bandwidth, interference, and transceiver",
            "Single-mode and multimode fiber are not interchangeable design assumptions",
            "Interface counters distinguish loss, corruption, congestion, and configuration problems"
          ],
          "content": "Copper Ethernet commonly uses twisted-pair cabling with RJ-45 connectors. Category and installation determine supported speed and distance. Straight-through and crossover wiring historically matched different device pairs, while auto-MDI/MDIX lets modern interfaces adapt. Copper can carry PoE but is susceptible to electromagnetic interference and has shorter practical distance than fiber.\n\nMultimode fiber carries several light paths over shorter campus or data-center links; single-mode fiber supports longer distances with a smaller core and appropriate optics. Transceivers must match wavelength, fiber type, connector, speed, and both ends of the link. A lit interface does not prove the optics are correct enough for reliable operation.\n\nFull duplex allows simultaneous transmit and receive and avoids Ethernet collisions. A duplex mismatch can produce poor throughput and late collisions even when the link appears up. Speed and duplex autonegotiation should normally be consistent on both ends. Administratively down means the interface is shut in configuration; down/down often indicates physical loss; up/down indicates the physical layer is present but the line protocol is not operational.\n\nTroubleshoot from evidence. Check interface status, description, speed, duplex, input errors, cyclic redundancy check errors, output drops, resets, and traffic rate. Confirm cabling and transceiver before rewriting higher-layer configuration. Document interface descriptions so physical paths remain understandable during an outage.",
          "practical": "Given an interface with increasing CRC errors, verify media, connectors, optics, and duplex before changing routing. Given output drops with no errors, examine congestion and queueing.",
          "tables": [],
          "commands": [
            {
              "title": "Interface inspection",
              "description": "Read status and counters before clearing them.",
              "code": "show interfaces status\nshow interfaces gigabitEthernet 0/1\nshow interfaces counters errors\nshow controllers ethernet-controller"
            }
          ],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Ethernet frames and switch forwarding behavior",
          "lead": "Switching is a learn-and-forward process scoped to a VLAN, with deliberate behavior for unknown and broadcast traffic.",
          "keyIdeas": [
            "Switches learn source MAC addresses on ingress",
            "Known unicast is forwarded to one port; unknown unicast and broadcast are flooded within the VLAN",
            "MAC entries age so the table can adapt"
          ],
          "content": "An Ethernet frame carries destination and source MAC addresses, an EtherType or length field, payload, and a frame check sequence. A switch receives the frame, checks it, and records the source MAC address against the ingress port and VLAN. Learning from the source is essential: the destination tells the switch where the sender hopes to go, not where the sender lives.\n\nIf the destination MAC is known in that VLAN, the switch forwards toward the associated port unless it is the ingress port. If unknown, the switch floods the frame out other active ports in the VLAN. Broadcast frames are also flooded within the broadcast domain. A switch does not route between VLANs without a Layer 3 function. Multicast handling can be optimized with features beyond this foundational behavior.\n\nDynamic MAC entries age after inactivity, which allows devices to move. Static entries remain until changed. A flapping MAC appearing rapidly on different ports can indicate a loop, misconnection, or virtualized movement. The MAC table is separate per VLAN, so the same address context includes a VLAN identifier.\n\nThe switch may store and verify an entire frame before forwarding, or begin forwarding earlier depending on platform and mode. CCNA reasoning should focus on the forwarding decision, VLAN scope, and table state. When a ping fails, remember that ARP or IPv6 neighbor discovery must first learn the destination or gateway MAC.",
          "practical": "Use a two-switch, three-host lab. Clear dynamic MAC entries, generate one ping at a time, and predict the table and flooding behavior before each show command.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Observe MAC learning and flooding.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Build two switches joined by one link and place three hosts in one VLAN.",
              "Clear dynamic MAC entries and inspect the empty tables.",
              "Send traffic between two hosts and inspect learned source addresses.",
              "Move one host to another port and observe aging or relearning.",
              "Repeat with hosts placed in different VLANs and explain the failure."
            ],
            "expected": "MAC entries match the source port and VLAN, while inter-VLAN traffic requires routing.",
            "verification": "Use show mac address-table dynamic and host tests to match each prediction."
          },
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "TCP, UDP, ports, and application conversations",
          "lead": "Transport protocols identify application endpoints and make different tradeoffs between reliability, state, and delay.",
          "keyIdeas": [
            "TCP establishes a connection and provides ordered reliable byte delivery",
            "UDP sends connectionless datagrams with low overhead",
            "Port numbers identify application processes, not physical interfaces"
          ],
          "content": "TCP uses sequence numbers, acknowledgments, windows, and retransmission. A normal opening uses SYN, SYN-ACK, and ACK. The receiving window supports flow control; congestion mechanisms respond to network conditions. Closing uses FIN and ACK exchanges, while RST ends a connection abruptly. TCP reliability does not mean the application is secure or that every delay is hidden.\n\nUDP has no built-in handshake, ordered delivery, or retransmission. It suits applications that tolerate loss, handle recovery themselves, or value timing, including many DNS exchanges, real-time voice, and streaming. Modern application protocols can build secure reliable behavior on top of UDP.\n\nServers usually listen on well-known or registered destination ports; clients select ephemeral source ports. The combination of source and destination addresses, ports, and protocol distinguishes a conversation. A port is a convention: HTTPS normally uses 443, but any application can be configured differently.\n\nWhen troubleshooting, distinguish name resolution, reachability, transport, and application. A successful ping does not prove TCP 443 is permitted or the web service is healthy. A refused connection suggests the destination responded but no service accepted the port; a timeout may indicate filtering, path loss, or an unavailable host.",
          "practical": "For DNS, DHCP, HTTPS, SSH, voice, and file transfer, state the likely transport, port, and why the application values reliability or low delay.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Virtualization, containers, and VRFs",
          "lead": "Logical isolation lets one physical platform host multiple systems or routing domains, but shared dependencies remain.",
          "keyIdeas": [
            "Virtual machines include guest operating systems; containers share a host kernel",
            "Virtual switches connect virtual workloads",
            "VRFs maintain separate routing tables on one network device"
          ],
          "content": "A hypervisor allocates CPU, memory, storage, and virtual network interfaces to virtual machines. Type 1 hypervisors run directly on hardware; Type 2 run on a host operating system. Virtual switches connect workloads to one another and to physical interfaces. A packet path may therefore include policies invisible on the physical switch.\n\nContainers package applications and dependencies while sharing a host kernel. They start quickly and are less isolated than separate virtual machines by default. For CCNA, understand that both create dynamic endpoints and east-west traffic that network design must address.\n\nA virtual routing and forwarding instance gives a router or Layer 3 switch multiple independent routing tables. Interfaces assigned to different VRFs can use overlapping addresses without exchanging routes. VRF-lite provides separation without MPLS. Management VRFs can isolate device management traffic from user forwarding.\n\nVirtualization improves utilization and flexibility but can concentrate failure. Redundant virtual machines on one host or storage array do not survive that shared failure. Inventory, diagrams, capacity, security policy, and monitoring must include both virtual and physical layers.",
          "practical": "Draw one physical server hosting two VMs and two containers, connected through a virtual switch. Then add two VRFs on the upstream router and show which routes are intentionally separate.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Campus Network Topologies, Architecture & Cisco IOS CLI",
          "lead": "Enterprise campus networks use structured hierarchical designs to ensure scalability, fault isolation, and high bandwidth availability across access, distribution, and core layers.",
          "keyIdeas": [
            "Differentiate 3-Tier Architecture (Access, Distribution, Core) vs 2-Tier Collapsed Core (Distribution + Core combined).",
            "Master Cisco IOS Mode Navigation: User EXEC (>), Privileged EXEC (#), Global Configuration ((config)#), Interface Configuration ((config-if)#).",
            "Explain Data Plane (packet forwarding), Control Plane (routing tables/OSPF), and Management Plane (SSH/SNMP).",
            "Understand the Spine-Leaf architecture used in modern data centers and the Cisco DNA Center architecture."
          ],
          "content": "Enterprise network design uses hierarchical layer models to simplify management, isolate failure domains, and optimize traffic flows:\n\n1. **Access Layer**: The edge of the network where end-user endpoints (PCs, IP phones, wireless APs, printers, cameras) connect. The access layer enforces switch port security, VLAN access membership, QoS trust boundaries, and provides Power over Ethernet (PoE).\n\n2. **Distribution Layer**: Aggregates connections from multiple access layer switches. It performs Layer 3 routing (Inter-VLAN routing), ACL filtering, QoS marking, and serves as a boundary for broadcast domains. It typically features redundant links to the Core layer.\n\n3. **Core Layer (Backbone)**: Provides high-speed, non-blocking Layer 3 transport between distribution switches, WAN edges, and datacenter edges. The core layer is optimized for maximum speed and availability, avoiding packet manipulation (no complex ACLs).\n\n## Collapsed Core (2-Tier Architecture)\n\nIn small-to-medium enterprises, maintaining a separate physical Core layer is often cost-prohibitive.\n\nA Collapsed Core architecture merges the Core and Distribution layers into a single tier of high-performance switches, reducing hardware costs while maintaining the Access layer for endpoint connectivity.\n\n## Spine-Leaf Architecture\n\nTraditional 3-tier models were designed for \"North-South\" traffic (clients accessing servers/internet). Modern data centers experience mostly \"East-West\" traffic (server-to-server communication). Spine-Leaf architecture solves this by connecting every Leaf switch (access) to every Spine switch (core). This ensures that any two servers are exactly the same number of hops away (predictable latency) and uses Equal-Cost Multi-Path (ECMP) routing instead of Spanning Tree Protocol (STP), using all available bandwidth.\n\n## Cisco IOS CLI Navigation & Modes\n\nCisco routers and switches run the Internetwork Operating System (IOS). Command modes feature distinct prompts to indicate the current privilege level and configuration context:\n\n- `Switch>`: **User EXEC Mode**. Very limited capabilities. Allows basic monitoring like `ping` and `traceroute`, but no configuration changes.\n\n- `Switch#`: **Privileged EXEC Mode**. Entered by typing `enable`. Allows viewing configurations (`show running-config`), saving configurations (`copy running-config startup-config`), and running diagnostic `debug` commands.\n\n- `Switch(config)#`: **Global Configuration Mode**. Entered by typing `configure terminal`. Applies changes that affect the entire device (e.g., `hostname`, `ip domain-name`).\n\n- `Switch(config-if)#`: **Interface Configuration Mode**. Entered by typing `interface GigabitEthernet0/1`. Configures specific port settings (IP address, speed, duplex, switchport mode).\n\n## **Data, Control, and management Planes**\n\n- **Data Plane**: The forwarding plane. It handles the actual movement of data packets through the router/switch based on the forwarding tables (FIB, MAC table). Operations here happen at hardware wire-speed using ASICs.\n\n- **Control Plane**: The \"brain\" of the device. It builds the routing tables, ARP tables, and STP topologies. Protocols like OSPF, BGP, and STP operate here.\n\n- **Management Plane**: The interface used to manage the device. Includes SSH, Telnet, SNMP, Syslog, and NETCONF/RESTCONF.",
          "tables": [
            {
              "title": "Cisco IOS Command Modes Reference",
              "headers": [
                "Mode",
                "Prompt",
                "Command to Enter",
                "Command to Exit",
                "Purpose"
              ],
              "rows": [
                [
                  "User EXEC",
                  "Router>",
                  "Automatic on login",
                  "exit / logout",
                  "Basic status, ping, traceroute"
                ],
                [
                  "Privileged EXEC",
                  "Router#",
                  "enable",
                  "disable",
                  "Full status, show commands, save config"
                ],
                [
                  "Global Config",
                  "Router(config)#",
                  "configure terminal",
                  "exit / end",
                  "System-wide settings (hostname, banners)"
                ],
                [
                  "Interface Config",
                  "Router(config-if)#",
                  "interface g0/0",
                  "exit",
                  "Port specific settings (IP, speed, duplex)"
                ],
                [
                  "Line Config",
                  "Router(config-line)#",
                  "line vty 0 4",
                  "exit",
                  "Console and SSH/Telnet authentication"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "Cisco IOS: Initial Device Hardening",
              "description": "Baseline configuration to secure a new Cisco switch or router.",
              "code": "enable\nconfigure terminal\n\n! Set device hostname\nhostname Core-Switch-1\n\n! Secure Privileged EXEC mode with an encrypted password\nenable secret MyStr0ngP@ssw0rd\n\n! Secure the Console port\nline console 0\n password ConsoleP@ss!\n login\n logging synchronous\n exit\n\n! Secure VTY (SSH/Telnet) lines\nline vty 0 15\n password VtyP@ss!\n login\n transport input ssh\n exit\n\n! Encrypt all plaintext passwords in the configuration file\nservice password-encryption\n\n! Save configuration\nend\nwrite memory"
            }
          ],
          "lab": {
            "goal": "Perform initial baseline configuration and secure access on a Cisco switch.",
            "environment": "Cisco Packet Tracer, GNS3, or physical Cisco Catalyst switch.",
            "steps": [
              "Access the switch via Console cable (User EXEC mode).",
              "Enter Privileged EXEC mode using the 'enable' command.",
              "Enter Global Configuration mode using 'configure terminal'.",
              "Set the hostname to SW1.",
              "Configure the enable secret password to prevent unauthorized privileged access.",
              "Secure the console line and VTY lines with passwords and require login.",
              "Enable 'service password-encryption' to hide passwords in the running configuration.",
              "Exit to Privileged EXEC mode and run 'show running-config' to verify the encrypted passwords.",
              "Save the configuration using 'copy running-config startup-config'."
            ],
            "expected": "The switch has a hostname, secured console/VTY lines, encrypted passwords, and saved configuration.",
            "verification": "Exit the console completely. Press Enter and verify you are prompted for the console password. Type 'enable' and verify you are prompted for the enable secret password."
          },
          "practical": "When configuring a device remotely via SSH, always use the 'reload in 10' command before making risky routing or ACL changes. If you accidentally lock yourself out, the router will automatically reboot in 10 minutes and revert to the saved startup-config, restoring your access. If your changes work perfectly, cancel the reboot with 'reload cancel'.",
          "examTips": [
            "The 'enable password' command stores passwords in plaintext. The 'enable secret' command stores passwords using strong encryption (MD5/SHA). Always use 'enable secret'.",
            "'service password-encryption' uses weak Type 7 encryption to hide passwords in the config file. It is easily reversible and not a substitute for 'enable secret'.",
            "To move from any configuration sub-mode directly back to Privileged EXEC mode, use the 'end' command or press Ctrl+Z.",
            "The Management plane is for SSH/SNMP; Control plane is for OSPF/BGP/STP; Data plane is for actual packet forwarding."
          ],
          "practiceQuestions": []
        },
        {
          "title": "IPv4 Subnetting, VLSM & IPv6 Addressing",
          "lead": "CCNA requires absolute fluency in IPv4 CIDR subnetting, VLSM, and IPv6 address abbreviation, prefix manipulation, and autoconfiguration (SLAAC).",
          "keyIdeas": [
            "Calculate Network ID, Broadcast ID, and valid host ranges rapidly.",
            "Design Variable Length Subnet Masking (VLSM) schemes to optimize address allocation.",
            "Understand IPv6 address structure (128-bit hex), abbreviation rules, and prefix lengths.",
            "Differentiate IPv6 address types: Global Unicast (2000::/3), Unique Local (fc00::/7), Link-Local (fe80::/10), and Multicast (ff00::/8).",
            "Explain EUI-64 format and SLAAC (Stateless Address Autoconfiguration)."
          ],
          "content": "## IPv4 subnetting and VLSM\n\nIPv4 uses 32-bit addresses. Subnetting borrows bits from the host portion of an address to create smaller network segments.\n\nThe Subnet Mask or CIDR (Classless Inter-Domain Routing) prefix dictates how many bits are used for the Network ID.\n\n**Variable Length Subnet Masking (VLSM)** allows a network space to be divided into subnets of different sizes, preventing address waste. When designing a VLSM scheme, you must allocate the largest subnets first, working down to the smallest.\n\n*Example VLSM Scenario:* You have the 192.168.1.0/24 network and need to accommodate:\n\n- HQ LAN: 100 hosts\n\n- Branch LAN: 50 hosts\n\n- WAN Link 1: 2 hosts\n\n- WAN Link 2: 2 hosts\n\n1. **HQ LAN (100 hosts)**: Needs 2^7 = 128 block size. Host bits = 7. Prefix = /25 (32-7). - Subnet: 192.168.1.0/25 (Hosts:.1 to.126)\n\n2. **Branch LAN (50 hosts)**: Needs 2^6 = 64 block size. Host bits = 6. Prefix = /26 (32-6). - Subnet: 192.168.1.128/26 (Hosts:.129 to.190)\n\n3. **WAN Link 1 (2 hosts)**: Needs 2^2 = 4 block size. Host bits = 2. Prefix = /30 (32-2). - Subnet: 192.168.1.192/30 (Hosts:.193 to.194)\n\n4. **WAN Link 2 (2 hosts)**: Needs 4 block size. Prefix = /30. - Subnet: 192.168.1.196/30 (Hosts:.197 to.198)\n\n## **IPv6 Addressing**\n\nIPv6 uses 128-bit addresses represented as eight 16-bit hexadecimal blocks (hextets) separated by colons. Example: `2001:0db8:0000:0042:0000:8a2e:0370:7334`\n- **Abbreviation Rules**:\n\n1. Omit leading zeros in any block (e.g., `0db8` becomes `db8`, `0042` becomes `42`).\n\n2. Replace one contiguous sequence of all-zero blocks with a double colon (`::`). This can only be done ONCE per address.\n\nAbbreviated Example: `2001:db8:0:42::8a2e:370:7334`\n- **IPv6 Address Types**:\n\n- **Global Unicast (GUA)**: Publicly routable internet addresses. Currently allocated from the `2000::/3` range (starts with 2 or 3).\n\n- **Unique Local (ULA)**: Private routing within a site/organization (equivalent to IPv4 RFC 1918). Range is `fc00::/7` (starts with fc or fd).\n\n- **Link-Local**: Automatically assigned to every IPv6 interface. Used only for communication on the local subnet. Routers never forward link-local packets. Range is `fe80::/10` (starts with fe8, fe9, fea, or feb).\n\n- **Multicast**: Traffic sent to a group of interfaces. Range is `ff00::/8` (starts with ff). - `ff02::1` = All IPv6 nodes on the link. - `ff02::2` = All IPv6 routers on the link.\n\n- **Anycast**: An address assigned to multiple interfaces (usually on different routers). Traffic is routed to the \"nearest\" interface having that address.\n\n## SLAAC (Stateless Address Autoconfiguration) & EUI-64\n\nIPv6 devices can automatically configure their own IP addresses without a DHCP server.\n\n1. The router sends Router Advertisement (RA) messages containing the network prefix (e.g., a /64 prefix).\n\n2. The host appends a 64-bit Interface ID to create a full 128-bit address.\n\nThe Interface ID can be randomly generated (privacy extensions) or created using the\n- **EUI-64 process**:\n\n1. Take the 48-bit MAC address (e.g., `00:11:22:33:44:55`).\n\n2. Split it in half and insert `ff:fe` in the middle (`00:11:22:ff:fe:33:44:55`).\n\n3. Invert the 7th bit of the first byte (the U/L bit). `00` (binary 00000000) becomes `02` (binary 00000010).\n\n4. Final EUI-64 Interface ID: `0211:22ff:fe33:4455`.",
          "tables": [
            {
              "title": "IPv6 Address Types Reference",
              "headers": [
                "Address Type",
                "Prefix",
                "IPv4 Equivalent",
                "Description"
              ],
              "rows": [
                [
                  "Global Unicast",
                  "2000::/3",
                  "Public IPv4",
                  "Globally routable over the Internet"
                ],
                [
                  "Unique Local",
                  "fc00::/7 (fc, fd)",
                  "Private (10.x, 172.16.x, 192.168.x)",
                  "Routable within a private organization"
                ],
                [
                  "Link-Local",
                  "fe80::/10",
                  "APIPA (169.254.x.x)",
                  "Non-routable; used for local subnet neighbor discovery"
                ],
                [
                  "Multicast",
                  "ff00::/8",
                  "Class D (224.x.x.x)",
                  "Sent to a specific group of devices"
                ],
                [
                  "Loopback",
                  "::1/128",
                  "127.0.0.1",
                  "Testing local TCP/IP stack"
                ],
                [
                  "Unspecified",
                  "::/128",
                  "0.0.0.0",
                  "Source address during initial boot/DHCP discovery"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IPv6 Configuration on Cisco IOS",
              "description": "Enable IPv6 routing and configure GUA and Link-Local addresses.",
              "code": "enable\nconfigure terminal\n\n! Enable IPv6 routing globally (Required for routing)\nipv6 unicast-routing\n\ninterface GigabitEthernet0/1\n ! Manually configure a Global Unicast Address\n ipv6 address 2001:db8:acad:1::1/64\n \n ! Manually configure a Link-Local address (overriding the random default)\n ipv6 address fe80::1 link-local\n \n ! Configure an address using EUI-64\n ipv6 address 2001:db8:acad:2::/64 eui-64\n \n no shutdown\nexit\n\n! Verify\nshow ipv6 interface brief\nshow ipv6 route"
            }
          ],
          "lab": {
            "goal": "Configure IPv4 and IPv6 addressing on a router interface and verify connectivity.",
            "environment": "Cisco Packet Tracer.",
            "steps": [
              "Access the router CLI and enter interface configuration mode for G0/0.",
              "Assign the IPv4 address: 'ip address 192.168.10.1 255.255.255.0'.",
              "Enable IPv6 routing globally: 'ipv6 unicast-routing' from global config mode.",
              "Assign the IPv6 GUA: 'ipv6 address 2001:db8:1::1/64'.",
              "Assign a specific Link-Local address to make troubleshooting easier: 'ipv6 address fe80::1 link-local'.",
              "Enable the interface: 'no shutdown'.",
              "Configure a PC with IPv4 192.168.10.10 and IPv6 2001:db8:1::10.",
              "Ping the router's IPv4 and IPv6 addresses from the PC."
            ],
            "expected": "The router interface operates in dual-stack mode (IPv4 and IPv6 simultaneously) and replies to pings on both protocols.",
            "verification": "Run 'show ip interface brief' and 'show ipv6 interface brief' on the router."
          },
          "practical": "When configuring IPv6 on Cisco routers, always remember to type 'ipv6 unicast-routing' in global config mode. Without it, the router acts as an IPv6 host, not an IPv6 router, and will not send Router Advertisement (RA) messages or route IPv6 packets.",
          "examTips": [
            "VLSM always requires allocating the largest subnets first, descending to the smallest subnets (usually /30 point-to-point links).",
            "Double colons (::) can only be used ONCE in an IPv6 address abbreviation.",
            "Link-Local addresses (fe80::/10) are mandatory in IPv6. They are used as the default gateway address by clients, rather than the Global Unicast Address.",
            "In EUI-64, you invert the 7th bit of the MAC address. A MAC starting with 00 becomes 02."
          ],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Domain 2: Network Access",
      "weight": "20% of exam",
      "intro": "Configure and verify the campus access layer: VLANs, trunks, discovery, spanning tree, EtherChannel, wireless architecture, and protected device management.",
      "topics": [
        {
          "title": "Neighbor discovery with CDP and LLDP",
          "lead": "Discovery protocols reveal directly connected devices and help verify the physical-to-logical map.",
          "keyIdeas": [
            "CDP is Cisco proprietary; LLDP is vendor neutral",
            "Neighbor output identifies local port, remote device, remote port, and capabilities",
            "Discovery information is useful and sensitive"
          ],
          "content": "## Cisco Discovery Protocol and Link Layer Discovery\n\nProtocol advertise identity and interface information to directly connected neighbors. They operate at the local link and do not require IP routing. CDP is Cisco proprietary; LLDP is standardized and supports mixed-vendor environments.\n\nUse neighbor data to confirm cabling, locate an unexpected switch or phone, verify the remote port, and reconcile a diagram. Detailed output may include management addresses, platform, software, capabilities, and native VLAN information. A missing neighbor can mean the protocol is disabled, the link is down, the peer does not support it, or frames are filtered.\n\nBecause advertisements reveal useful architecture, enable only where operationally appropriate and avoid exposing them on untrusted edge ports. Phones and access points may rely on discovery extensions for voice VLAN or power information, so security changes require impact review.\n\nDiscovery is evidence, not configuration authority. A misleading neighbor name or management address should not override interface tracing and inventory. Pair CDP or LLDP with interface status, MAC tables, and physical labels.",
          "practical": "Starting from one switch, use neighbor output to draw the next hop, then confirm each link with local interface status and descriptions.",
          "tables": [],
          "commands": [
            {
              "title": "Discovery verification",
              "description": "Compare Cisco and standards-based neighbors.",
              "code": "show cdp neighbors\nshow cdp neighbors detail\nshow lldp neighbors\nshow lldp neighbors detail"
            }
          ],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "VLANs, 802.1Q Trunking & DTP",
          "lead": "Virtual LANs logically segment a physical switch into multiple broadcast domains. Trunking allows these VLANs to span across multiple switches.",
          "keyIdeas": [
            "Configure access ports (single VLAN) and voice VLANs.",
            "Configure 802.1Q trunk ports to carry multiple VLANs.",
            "Explain Native VLAN concepts and security risks (VLAN Hopping).",
            "Understand Dynamic Trunking Protocol (DTP) modes: dynamic auto vs dynamic desirable.",
            "Configure Router-on-a-Stick for Inter-VLAN routing."
          ],
          "content": "## Virtual LANs (VLANs)\n\nVLANs logically divide a switch into separate broadcast domains. Devices in VLAN 10 cannot communicate with devices in VLAN 20 without a Layer 3 router or Layer 3 switch, providing security, reducing broadcast traffic overhead, and allowing logical grouping regardless of physical location.\n\n## **Switch port Modes**\n\n- **Access Mode**: Configured to carry traffic for exactly one data VLAN. When a PC sends a standard Ethernet frame to an access port, the switch tags it internally. When the switch sends a frame out to a PC, it strips the tag, sending standard untagged Ethernet frames.\n\n- **Voice VLAN**: IP phones act as mini-switches. A single switch port can be configured with an access VLAN (for the daisy-chained PC) and a voice VLAN (for the phone). The phone tags its own voice frames with the Voice VLAN ID.\n\n- **Trunk Mode**: A point-to-point link between two switches (or a switch and router) that carries traffic for multiple VLANs.\n\n## **IEEE 802.1Q Trunking**\n\n802.1Q is the standard trunking protocol. It inserts a 4-byte VLAN tag into the Ethernet frame header containing a 12-bit VLAN ID.\n\n- **Native VLAN**: By default, VLAN 1 is the Native VLAN. Frames belonging to the Native VLAN are sent across the trunk **untagged**. Both ends of a trunk must agree on the Native VLAN. A Native VLAN mismatch causes traffic to leak between VLANs and triggers CDP/STP errors.\n\n- **Security**: The default Native VLAN (1) should be changed to an unused, dedicated VLAN (e.g., VLAN 999) to prevent VLAN hopping attacks where an attacker crafts double-tagged frames.\n\n## Dynamic Trunking Protocol (DTP)\n\nCisco proprietary protocol that negotiates trunk links automatically.\n\n- **switchport mode access**: Forces port to never become a trunk. Sends DTP messages to help the other side know it's an access port.\n\n- **switchport mode trunk**: Forces port to become a trunk. Sends DTP messages to negotiate trunking.\n\n- **switchport mode dynamic desirable**: Actively attempts to convert the link to a trunk. Becomes a trunk if the other side is trunk, desirable, or auto.\n\n- **switchport mode dynamic auto**: (Default on newer Catalyst switches). Waits passively. Becomes a trunk only if the other side is trunk or desirable. (Auto + Auto = Access).\n\n- **switchport nonegotiate**: Disables DTP entirely. Prevents dynamic trunking attacks. must be used in conjunction with 'mode access' or 'mode trunk'.",
          "tables": [
            {
              "title": "DTP Negotiation Matrix",
              "headers": [
                "Local Port Mode",
                "Remote: Dynamic Auto",
                "Remote: Dynamic Desirable",
                "Remote: Trunk",
                "Remote: Access"
              ],
              "rows": [
                [
                  "Dynamic Auto",
                  "Access",
                  "Trunk",
                  "Trunk",
                  "Access"
                ],
                [
                  "Dynamic Desirable",
                  "Trunk",
                  "Trunk",
                  "Trunk",
                  "Access"
                ],
                [
                  "Trunk",
                  "Trunk",
                  "Trunk",
                  "Trunk",
                  "Limited connectivity (Error)"
                ],
                [
                  "Access",
                  "Access",
                  "Access",
                  "Limited connectivity (Error)",
                  "Access"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "VLAN and Trunk Configuration",
              "description": "Create VLANs, assign access ports with Voice VLANs, and configure a hardcoded 802.1Q trunk.",
              "code": "! Create VLANs\nvlan 10\n name Data_Users\nvlan 20\n name Voice_Phones\nvlan 999\n name Native_Drop\nexit\n\n! Configure Access Port with Voice VLAN\ninterface GigabitEthernet1/0/1\n switchport mode access\n switchport access vlan 10\n switchport voice vlan 20\n spanning-tree portfast\nexit\n\n! Configure Hardcoded Trunk Port (Security Best Practice)\ninterface GigabitEthernet1/0/24\n switchport trunk encapsulation dot1q\n switchport mode trunk\n switchport trunk native vlan 999\n switchport nonegotiate\nexit\n\n! Verification\nshow vlan brief\nshow interfaces trunk\nshow interfaces GigabitEthernet1/0/24 switchport"
            }
          ],
          "lab": {
            "goal": "Configure a secure 802.1Q trunk between two switches.",
            "environment": "Cisco Packet Tracer.",
            "steps": [
              "Connect SW1 G0/1 to SW2 G0/1.",
              "On SW1, create VLANs 10, 20, and 999.",
              "Configure SW1 G0/1 with 'switchport mode trunk' and 'switchport trunk native vlan 999'. Disable DTP with 'switchport nonegotiate'.",
              "Observe CDP mismatch errors in the console since SW2 is still using Native VLAN 1.",
              "On SW2, create VLANs 10, 20, and 999. Apply the exact same trunk and native VLAN configurations to G0/1.",
              "Verify the trunk is operational using 'show interfaces trunk'."
            ],
            "expected": "The trunk operates securely without DTP and with a non-default Native VLAN, resolving CDP mismatch errors.",
            "verification": "Run 'show interfaces trunk' to verify the port status is 'trunking' and the Native VLAN is 999."
          },
          "practical": "Always explicitly define switchport modes. Never rely on DTP in a production environment. An attacker can connect a laptop with software that sends DTP \"dynamic desirable\" frames, trick the switch port into forming a trunk, and gain access to all VLANs on the network (VLAN Hopping). Always use 'switchport mode access' and 'switchport nonegotiate' on user ports.",
          "examTips": [
            "DTP Dynamic Auto + Dynamic Auto = Access Mode. Trunking requires at least one side to be Desirable or Trunk.",
            "Voice VLANs use 802.1Q tags to separate voice traffic from untagged data traffic on the same physical port.",
            "Router-on-a-Stick uses a single physical router interface divided into virtual subinterfaces (e.g., G0/0.10) using 802.1Q encapsulation to route between VLANs."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Spanning Tree Protocol (STP & RSTP) and EtherChannel",
          "lead": "Layer 2 Ethernet has no TTL field; therefore, physical loops cause catastrophic broadcast storms. STP prevents loops by strategically blocking redundant links.",
          "keyIdeas": [
            "Explain the STP Root Bridge election process (Lowest Bridge ID).",
            "Identify Root Ports (RP), Designated Ports (DP), and Blocked/Alternate Ports.",
            "Compare Classic STP (802.1D) port states with Rapid STP (802.1w) port states.",
            "Configure STP features: PortFast and BPDU Guard.",
            "Configure Layer 2 EtherChannel using LACP (802.3ad)."
          ],
          "content": "## Spanning tree protocol (STP - 802.1D)\n\nBecause Ethernet frames lack a Time-To-Live (TTL) field, a physical loop between switches will cause broadcast frames to circulate endlessly. This creates a broadcast storm, rapidly consuming all bandwidth and crashing the network.\n\nSTP solves this by creating a loop-free logical topology:\n\n1. **Root Bridge Election**: Switches exchange Bridge Protocol Data Units (BPDUs). The switch with the lowest Bridge ID (BID = Priority + MAC Address) becomes the Root Bridge. Default priority is 32768.\n\nThe Root Bridge is the center of the network.\n\n2. **Root Port (RP) Selection**: Every non-root switch selects ONE Root Port: the port with the lowest cumulative path cost to the Root Bridge.\n\n3. **Designated Port (DP) Selection**: Every network segment selects ONE Designated Port: the port that forwards traffic toward the Root Bridge. (All ports on the Root Bridge are DPs).\n\n4. **Blocking**: All remaining redundant ports are placed in a Blocking state, breaking the loop. - **STP Port States**: Blocking -> Listening (15s) -> Learning (15s) -> Forwarding. Total convergence time is 30-50 seconds, which is too slow for modern networks.\n\n## Rapid Spanning Tree Protocol (RSTP - 802.1w)\n\nRSTP significantly improves convergence time to under 6 seconds by actively negotiating topologies rather than relying on passive timers.\n\n- **Port Roles**: Root Port, Designated Port, Alternate Port (backup for Root Port), Backup Port (backup for DP).\n\n- **Port States**: Discarding (combines Blocking/Listening) -> Learning -> Forwarding.\n\n## **STP toolkit (Security & Optimization)**\n\n- **PortFast**: Bypasses the listening and learning states, transitioning an access port immediately to forwarding. - **Important**: Only use on ports connected to end devices (PCs). If used on a switch-to-switch link, it can cause a temporary broadcast storm.\n\n- **BPDU Guard**: A security feature used in conjunction with PortFast. If a PortFast-enabled port receives a BPDU (indicating a switch was plugged into it), BPDU Guard immediately error-disables the port to prevent a loop.\n\n## EtherChannel (Link Aggregation)\n\nEtherChannel bundles multiple physical links (up to 8) between two switches into a single logical link (Port-Channel).\n\n- **Benefits**: Increases bandwidth, provides load balancing, and offers redundancy. STP treats the bundle as a single logical link, so it does not block the redundant physical cables. If one physical link fails, traffic redistributes to the remaining links instantly without STP reconvergence.\n\n- **Protocols**:\n\n- **LACP (Link Aggregation Control Protocol - 802.3ad)**: The open standard. Modes: Active (actively attempts to negotiate) and Passive (waits for negotiation).\n\nActive+Active or Active+Passive forms a channel.\n\n- **PAgP (Port Aggregation Protocol)**: Cisco proprietary. Modes: Desirable and Auto.\n\n- **Static / On**: Forces the channel without negotiation protocols. Not recommended as it cannot detect misconfigurations or unidirectional link failures.",
          "tables": [
            {
              "title": "LACP Negotiation Matrix (802.3ad)",
              "headers": [
                "Local Mode",
                "Remote: Active",
                "Remote: Passive",
                "Remote: On (Static)"
              ],
              "rows": [
                [
                  "Active",
                  "EtherChannel Forms",
                  "EtherChannel Forms",
                  "No Channel (Error)"
                ],
                [
                  "Passive",
                  "EtherChannel Forms",
                  "No Channel (Both wait)",
                  "No Channel (Error)"
                ],
                [
                  "On (Static)",
                  "No Channel (Error)",
                  "No Channel (Error)",
                  "EtherChannel Forms"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "RSTP, PortFast, BPDU Guard, and LACP Configuration",
              "description": "Optimize STP, secure edge ports, and build an EtherChannel.",
              "code": "! Force switch to become Root Bridge for VLANs 10,20\nspanning-tree vlan 10,20 root primary\n\n! Or manually set priority (must be increments of 4096)\nspanning-tree vlan 10,20 priority 4096\n\n! Enable RSTP globally\nspanning-tree mode rapid-pvst\n\n! Configure Edge Port with PortFast and BPDU Guard\ninterface GigabitEthernet1/0/1\n switchport mode access\n spanning-tree portfast\n spanning-tree bpduguard enable\nexit\n\n! Configure LACP EtherChannel on physical interfaces\ninterface range GigabitEthernet1/0/23 - 24\n channel-group 1 mode active\nexit\n\n! Configure the resulting logical Port-Channel interface\ninterface Port-channel 1\n switchport mode trunk\nexit\n\n! Verification\nshow spanning-tree\nshow etherchannel summary"
            }
          ],
          "lab": {
            "goal": "Configure LACP EtherChannel between two switches.",
            "environment": "Cisco Packet Tracer.",
            "steps": [
              "Connect SW1 and SW2 using two cables (G0/1 and G0/2).",
              "Observe that STP blocks one of the links to prevent a loop.",
              "On SW1: Select both interfaces using 'interface range g0/1 - 2'.",
              "Apply 'channel-group 1 mode active' to negotiate LACP.",
              "On SW2: Select interfaces G0/1-2 and apply 'channel-group 1 mode active'.",
              "Configure the logical interface: 'interface port-channel 1' and set it to 'switchport mode trunk'.",
              "Verify the EtherChannel is operational."
            ],
            "expected": "The two physical links bundle into a single logical Port-Channel. STP now sees one logical link and transitions it to Forwarding state, using both cables for bandwidth.",
            "verification": "Run 'show etherchannel summary' and ensure the Port-Channel status is SU (Layer 2, In Use)."
          },
          "practical": "When configuring EtherChannel, physical interface settings must match exactly on both sides (speed, duplex, allowed VLANs, native VLAN). If you change an allowed VLAN on one physical interface but not the other, the EtherChannel will suspend the mismatched port. Always apply trunk configurations to the logical 'interface Port-channel' rather than the physical interfaces to ensure consistency.",
          "examTips": [
            "Lowest Bridge ID wins Root Bridge election. Bridge ID = Priority + MAC Address.",
            "LACP uses Active/Passive modes. PAgP uses Desirable/Auto modes.",
            "PortFast transitions a port immediately to forwarding state. BPDU Guard shuts down a PortFast port if a BPDU is received.",
            "Rapid PVST+ (Per-VLAN Spanning Tree) is Cisco's default RSTP implementation, running a separate STP instance for every VLAN."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Wireless architectures, AP modes, channels, and controllers",
          "lead": "Wireless design combines radio behavior with centralized control, switching paths, roaming, and security policy.",
          "keyIdeas": [
            "Autonomous APs operate independently; controller-based APs split control and data functions",
            "2.4, 5, and 6 GHz bands differ in channels, range, and interference",
            "SSIDs map user-facing WLANs to security and network policy"
          ],
          "content": "An autonomous access point holds its own configuration and forwards client traffic locally. Controller-based designs use lightweight APs managed by a wireless LAN controller. CAPWAP forms control and, in many designs, data tunnels between AP and controller. Central control supports consistent WLANs, radio management, roaming, and policy.\n\nLocal mode is common for client service with controller connectivity. FlexConnect can support remote sites and may switch selected traffic locally. Monitor, sniffer, bridge, and mesh modes serve specialized observation or connectivity roles; exact support depends on platform. Understand the operational purpose rather than memorizing a product menu.\n\nThe 2.4 GHz band travels relatively far but has limited nonoverlapping channel space and more interference. 5 GHz offers more channels and capacity with generally shorter reach. 6 GHz adds clean spectrum for compatible devices. Channel width increases potential throughput but consumes spectrum and can increase contention. AP placement considers coverage, capacity, interference, client types, power, and cabling.\n\nAn SSID is the advertised WLAN name, not a security boundary by itself. The WLAN configuration maps authentication, encryption, VLAN or policy, QoS, and client behavior. Survey and verify the deployed radio environment rather than assuming floor-plan circles represent actual coverage.",
          "practical": "In Packet Tracer or on paper, design employee and guest WLANs. Choose controller placement, AP connectivity, SSID-to-VLAN mapping, authentication, and where traffic reaches the wired network.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Safe device management and configuration verification",
          "lead": "Operators need a protected, recoverable management path and a habit of proving state before and after change.",
          "keyIdeas": [
            "Console access is local; SSH protects remote CLI; Telnet does not",
            "The management plane should be restricted and monitored",
            "Running and startup configurations have different roles"
          ],
          "content": "The console provides local out-of-band-style access but still needs physical protection and authentication. SSH encrypts remote management and should replace Telnet. Establish a hostname, domain name, local or centralized identity, RSA keys as required by the platform, VTY restrictions, and an allowed management source. Prefer AAA with named user identities over shared line passwords.\n\nSeparate management traffic through a management VLAN, interface, or VRF and restrict it with policy. Synchronize time, send logs to protected collectors, and monitor configuration or authentication changes. SNMPv3 protects management queries better than community-string versions. Disable unused web, discovery, or management services where appropriate.\n\nThe running configuration is active in memory; startup configuration is loaded at boot. Save only after verification, and preserve a known-good backup. Before a risky remote change, arrange console access, scheduled rollback, or a controlled reload appropriate to the environment. Never rely on an unsaved production change as a rollback strategy.\n\nVerification includes intended show commands, neighbor or routing state, end-to-end tests, and negative tests proving forbidden access remains blocked. Record the before state and exact commands. Good network work is reversible and reviewable.",
          "practical": "Build a management checklist covering identity, SSH, source restriction, time, logs, configuration backup, rollback, verification, and physical console access.",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Configure protected SSH management in a lab.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Assign a hostname, domain name, local administrator, and management IP.",
              "Generate keys and enable SSH-only VTY access.",
              "Restrict management to an authorized subnet with an ACL.",
              "Test allowed and denied sources.",
              "Save only after verification and export a configuration backup."
            ],
            "expected": "Authorized management succeeds over SSH and an unauthorized source fails.",
            "verification": "Use show ssh, show users, show access-lists, and the saved configuration."
          },
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Domain 3: IP Connectivity",
      "weight": "25% of exam",
      "intro": "Read routing decisions from the table, build IPv4 and IPv6 static paths, operate single-area OSPFv2, and provide a resilient default gateway.",
      "topics": [
        {
          "title": "Routing Table Components and Mechanics",
          "lead": "A routing table records reachable prefixes and the information a router uses to choose a forwarding path.",
          "keyIdeas": [
            "Prefix/Mask",
            "Administrative Distance",
            "Routing Metrics",
            "Next Hop and Egress Interface",
            "Longest Match Rule",
            "Gateway of Last Resort",
            "FIB and Adjacency Table"
          ],
          "content": "A router forwards a packet by comparing its destination IP address with entries in the routing table. Each entry describes a destination prefix and how to reach it. The entry may name a next-hop address, an exit interface, or both. It also records how the route was learned and the information used to choose among competing paths.\n\n## Reading a route\n\nCisco route codes identify the source. Common examples include C for connected, L for a local interface address, S for static, O for OSPF, and B for BGP. A connected route appears when an addressed interface is operational. A local route represents the router's own interface address, normally as a /32 in IPv4 or /128 in IPv6.\n\nThe prefix length states how many leading bits belong to the network. When several routes match a destination, the router uses longest-prefix match. A route to 192.0.2.128/25 is more specific than 192.0.2.0/24, so traffic for 192.0.2.200 follows the /25 route. Administrative distance and metric do not override a more specific prefix.\n\nAdministrative distance compares routes to the same prefix when they come from different sources. A connected route normally has an AD of 0, a static route 1, and an OSPF route 110. Lower is preferred. A metric compares paths learned by the same routing protocol. OSPF uses cost, while other protocols use their own measurements. Equal metrics may allow equal-cost multipath forwarding.\n\n## Recursive resolution and forwarding\n\nA next hop must itself be reachable. If a route points to 10.0.0.2, the router performs another lookup to learn which interface reaches 10.0.0.2. This is recursive resolution. On Ethernet, the router then resolves the next-hop IP address to a MAC address through ARP for IPv4 or Neighbor Discovery for IPv6.\n\nThe control plane builds routing information. Cisco Express Forwarding turns the selected routes into a Forwarding Information Base and builds adjacency information for the data plane. This lets hardware forward packets without repeating every control-plane calculation.\n\nFor each forwarded IPv4 packet, the router removes the incoming Layer 2 frame, checks the destination IP address, decreases TTL, selects the route, resolves the adjacency, and creates a new Layer 2 frame for the outgoing link. The source and destination IP addresses normally remain unchanged. The source and destination MAC addresses change at every Ethernet hop.\n\n## A worked lookup\n\nSuppose the table contains 10.0.0.0/8 through one next hop, 10.20.0.0/16 through another, and 10.20.30.0/24 through a third. A packet for 10.20.30.40 matches all three entries, but the /24 wins because it is most specific. If two OSPF routes exist for that /24, the lower OSPF cost wins. If their costs are equal, both may be installed.\n\nTroubleshooting follows the same sequence. Confirm that the destination matches the expected prefix, check the route source and preference, verify recursive next-hop reachability, inspect the exit interface, and confirm that a return route exists. A correct forward route cannot compensate for a missing return path, a failed interface, an unresolved neighbor, or a policy that blocks the traffic.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Displays the IPv4 routing table (RIB).",
              "code": "show ip route"
            }
          ],
          "lab": {
            "goal": "Practice routing table components and mechanics in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure basic connectivity and examine 'show ip route' to identify C, L, and S routes. Note the [AD/Metric] brackets."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Longest prefix match always wins, regardless of AD."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "IPv4 Static Routing In-Depth",
          "lead": "Understanding standard, default, host, and floating static routes.",
          "keyIdeas": [
            "Default Routes",
            "Host Routes",
            "Floating Static Routes",
            "Next-hop vs Exit Interface",
            "Recursive Lookups"
          ],
          "content": "A static route is entered by an administrator rather than learned from a routing protocol. Static routes are predictable and add little control-plane overhead, which makes them useful for stub networks, default routes, carefully controlled paths, and backup routes. They also require maintenance when the topology changes.\n\n## Command structure\n\nThe basic Cisco IOS form is ip route followed by the destination network, subnet mask, and forwarding instruction. The forwarding instruction can be a next-hop IP address, an exit interface, or both. An optional administrative distance changes the route's preference.\n\nFor example, ip route 10.1.1.0 255.255.255.0 192.168.1.2 sends traffic for 10.1.1.0/24 to 192.168.1.2. A default route uses 0.0.0.0 with mask 0.0.0.0 and matches only when no more specific entry is available. A host route uses mask 255.255.255.255 to identify one IPv4 address.\n\n## Next hop and exit interface\n\nOn a point-to-point link, an exit-interface route is usually unambiguous because only one neighboring device can receive the frame. On a multiaccess Ethernet network, specifying only the exit interface can cause the router to treat every destination as directly attached and issue unnecessary ARP requests. A next-hop address, or a fully specified route containing both the interface and next hop, gives the router a clearer forwarding instruction.\n\nThe next hop must be recursively reachable. If the route to the next hop disappears or the outgoing interface goes down, the static route may be removed from the routing table even though it remains in the configuration.\n\n## Floating static routes\n\nA floating static route has a higher administrative distance than the preferred route. Suppose OSPF supplies 10.1.1.0/24 with AD 110. A static route to the same prefix with AD 115 stays out of the table while OSPF is healthy. If the OSPF route disappears and the next hop remains reachable, the static route is installed. The backup path must be tested because a configured route is not proof that the entire alternate service path works.\n\n## Verification\n\nUse show ip route to confirm that the route is installed, show running-config to confirm the configured command, and show ip route followed by a destination to inspect the selected match. Ping can test reachability, while traceroute can reveal the first unexpected hop. Also inspect ARP, interface status, access lists, and the return route. Change one item at a time and record the original configuration before testing a repair.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Creates a default static route pointing to next-hop 10.1.1.1.",
              "code": "ip route 0.0.0.0 0.0.0.0 10.1.1.1"
            }
          ],
          "lab": {
            "goal": "Practice ipv4 static routing in-depth in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure a primary static route to a loopback, and a backup floating static route."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "A floating static route must have an AD higher than the primary route's AD."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "IPv6 Static Routing and Link-Local Next Hops",
          "lead": "Implementing IPv6 static routes and understanding Fully Specified routes.",
          "keyIdeas": [
            "ipv6 unicast-routing",
            "IPv6 route syntax",
            "Default Route (::/0)",
            "Host Route (/128)",
            "Fully Specified Routes",
            "Link-Local Next-Hops"
          ],
          "content": "IPv6 Static Routing functions conceptually identical to IPv4 static routing, but employs IPv6 addressing and Next-Hop link-local nuances. The syntax shifts from 'ip route' to 'ipv6 route'. IPv6 static routing provides the same four types: Standard, Default, Host, and Floating routes. However, there is a fundamental requirement: before any IPv6 routing (static or dynamic) can occur on a Cisco router, IPv6 unicast routing must be enabled globally using the command 'ipv6 unicast-routing'.\n\nWithout this, the router acts only as an IPv6 host. The standard IPv6 route syntax is: 'ipv6 route [ipv6-prefix/prefix-length] [next-hop-ipv6-address | exit-interface] [administrative-distance]'. 1.\n\nStandard IPv6 Route: To route to '2001:db8:acad:2::/64' via a global unicast next-hop '2001:db8:acad:1::2': 'ipv6 route 2001:db8:acad:2::/64 2001:db8:acad:1::2'. 2.\n\nIPv6 Default Route: The IPv6 equivalent of 0.0.0.0/0 is '::/0'. 'ipv6 route::/0 2001:db8:acad:1::2'. 3.\n\nIPv6 Host Route: Instead of a 255.255.255.255 mask, IPv6 uses a /128 prefix length. 'ipv6 route 2001:db8:acad:2::99/128 2001:db8:acad:1::2'. 4.\n\nIPv6 Floating Static Route: Just append a higher AD. 'ipv6 route 2001:db8:acad:2::/64 2001:db8:acad:1::2 200'. The most critical and complex topic in IPv6 static routing involves the use of Link-Local Addresses (LLAs) as the next hop. In IPv6, routing protocols (OSPFv3, EIGRP for IPv6) use LLAs (FE80::/10) to establish adjacencies and exchange routes. It is a highly recommended best practice to use LLAs as the next-hop for static routes as well.\n\nThis is because a Global Unicast Address (GUA) might change or be re-IP'd, but an LLA tied to an interface remains constant on a link. However, using an LLA as a next-hop introduces a unique routing constraint.\n\nA Link-Local Address is only unique to the local link. If Router R1 has multiple interfaces (Gi0/0, Gi0/1, Gi0/2), and you configure a static route specifying the next-hop as 'FE80::2', R1 has absolutely no idea WHICH interface to send the packet out of, because 'FE80::2' is a valid link-local address on any of those links. Therefore, when configuring an IPv6 static route using a Link-Local Address as the next hop, you must configure a Fully Specified Static Route.\n\nThis means you must specify BOTH the exit interface and the link-local next-hop address. Correct: 'ipv6 route 2001:db8:acad:2::/64 GigabitEthernet0/0 fe80::2'. Incorrect: 'ipv6 route 2001:db8:acad:2::/64 fe80::2' (The router will reject this or it will fail to route). Let's examine the CEF and neighbor discovery mechanics of this. When a packet arrives destined for '2001:db8:acad:2::50', the router checks the IPv6 routing table and matches the fully specified route 'GigabitEthernet0/0 fe80::2'.\n\nThe router knows exactly which interface to use. It then checks its IPv6 Neighbor Discovery (ND) cache (the IPv6 equivalent of ARP) for the MAC address associated with 'fe80::2' out of Gi0/0. If it has it, it encapsulates the packet in an Ethernet frame with the destination MAC of the next-hop. If it doesn't, it sends an ICMPv6 Neighbor Solicitation (NS) message to the Solicited-Node Multicast Address of the next-hop on Gi0/0.\n\nThe next-hop replies with a Neighbor Advertisement (NA), the ND cache is updated, and the packet is forwarded.\n\nThe syntax shifts from 'ip route' to 'ipv6 route'. 1.2.\n\nIPv6 Default Route: The IPv6 equivalent of 0.0.0.0/0 is '::/0'. 'ipv6 route::/0 2001:db8:acad:1::2'. 3.\n\n## IPv6 Host\n\nIPv6 Floating Static Route: Just append a higher AD. 'ipv6 route 2001:db8:acad:2::/64 2001:db8:acad:1::2 200'. Correct: 'ipv6 route 2001:db8:acad:2::/64 GigabitEthernet0/0 fe80::2'. The router knows exactly which interface to use.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Globally enables IPv6 routing on the device.",
              "code": "ipv6 unicast-routing"
            }
          ],
          "lab": {
            "goal": "Practice ipv6 static routing and link-local next hops in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure a fully specified IPv6 route using the next-hop's fe80 LLA."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "You must include the exit interface when using an IPv6 Link-Local address as the next-hop."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "OSPFv2 Concepts, LSDB, and the SPF Algorithm",
          "lead": "An complete breakdown of Link-State routing, cost calculations, and adjacency requirements.",
          "keyIdeas": [
            "Link-State Database (LSDB)",
            "Dijkstra's SPF Algorithm",
            "OSPF Cost",
            "OSPF Packet Types",
            "Router ID Selection",
            "Neighbor Adjacency Requirements"
          ],
          "content": "Open Shortest Path First is a link-state interior gateway protocol. Routers describe their links in link-state advertisements, flood those advertisements through an area, and build a shared link-state database. Each router then runs the Shortest Path First algorithm against that database to calculate routes.\n\n## Neighbors and adjacencies\n\nOSPF runs directly over IP protocol 89. Hello packets discover neighbors and maintain relationships. Neighbors must agree on important settings such as area ID, network mask on applicable network types, hello and dead timers, authentication, and area options. A mismatch can leave routers visible to each other without allowing a full adjacency.\n\nThe neighbor process moves through states that describe progress. Down means no valid hellos have been received. Init means a hello arrived but did not list the local router. Two-Way confirms bidirectional communication. ExStart and Exchange negotiate and summarize databases. Loading requests missing information. Full means the required databases are synchronized.\n\n## OSPF packet types\n\nHello packets discover and maintain neighbors. Database Description packets summarize database contents. Link-State Request packets ask for missing records. Link-State Update packets carry advertisements. Link-State Acknowledgment packets confirm receipt. Knowing the purpose of each type makes packet captures and neighbor-state problems easier to interpret.\n\n## Cost and path selection\n\nOSPF cost is derived from reference bandwidth divided by interface bandwidth. Lower total cost is preferred. The default reference can assign the same cost to several modern high-speed links, so an organization may change it consistently across all OSPF routers. Inconsistent reference settings produce confusing path calculations even when adjacencies form normally.\n\nEach router needs a unique router ID. A manually configured router ID is easiest to operate. Without one, IOS selects an address according to its platform rules, commonly preferring a loopback over a physical interface. Changing the router ID may require restarting the OSPF process before the change takes effect.\n\n## Areas and designated routers\n\nAreas limit the scope of link-state flooding and SPF calculations. Area 0 is the backbone. On a broadcast Ethernet segment with several routers, OSPF elects a designated router and backup designated router to reduce the number of full adjacencies. Point-to-point links do not need that election.\n\nWhen troubleshooting, start with interface state and addressing, then compare area, timers, authentication, network type, and router IDs. Next inspect neighbor state, the LSDB, and the routing table. A full adjacency does not guarantee that the expected prefix was advertised, and an advertised prefix does not guarantee a complete return path.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Adjusts the OSPF reference bandwidth to 10 Gbps.",
              "code": "auto-cost reference-bandwidth 10000"
            }
          ],
          "lab": {
            "goal": "Practice ospfv2 concepts, lsdb, and the spf algorithm in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure two OSPF routers. Change the Hello timer on R1. Observe the adjacency drop due to timer mismatch."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Hello/Dead timers, Area ID, Subnet/Mask, and Authentication must match for OSPF neighbors to form."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Single Area OSPFv2 Configuration",
          "lead": "Understanding the 'network' command, Wildcard Masks, and the Passive Interface.",
          "keyIdeas": [
            "Process ID",
            "Router ID Configuration",
            "Network Command",
            "Wildcard Masks",
            "Interface-Level OSPF",
            "Passive-Interface"
          ],
          "content": "A single-area OSPF deployment places participating interfaces in one area, commonly area 0. Configuration has four parts: start the process, choose a stable router ID, enable OSPF on the intended interfaces, and prevent neighbor formation where no router should exist.\n\n## Process and router ID\n\nThe router ospf process-id command creates a local OSPF process. The process ID has local significance and does not need to match a neighbor's value. Under the process, router-id assigns a stable 32-bit identifier such as 1.1.1.1. Router IDs must be unique. If the ID changes after OSPF starts, clear ip ospf process may be required during an approved maintenance window.\n\n## Enabling interfaces\n\nOne method uses a network statement under the OSPF process. A wildcard mask selects local interface addresses, and the area keyword assigns matching interfaces to an area. For example, network 192.168.1.0 0.0.0.255 area 0 selects interfaces in 192.168.1.0/24.\n\nThe interface method is more explicit. Under an interface, ip ospf 1 area 0 enables process 1 in area 0. This avoids a broad wildcard mask accidentally selecting another interface. Whichever method is used, confirm the resulting interface state rather than assuming that a correct-looking command matched the intended port.\n\n## Passive interfaces\n\nAn OSPF-enabled user LAN should normally advertise its connected prefix without sending hellos or accepting neighbors. The passive-interface command provides that behavior. A common pattern is passive-interface default followed by no passive-interface on the known router-to-router links. This reduces unnecessary protocol traffic and makes unauthorized adjacency attempts harder.\n\n## Verification sequence\n\nUse show ip ospf interface brief to confirm participating interfaces and areas. Use show ip ospf neighbor to inspect adjacency state. Use show ip protocols to review network statements, passive interfaces, and process information. Use show ip route ospf to confirm installed routes, and inspect the LSDB when the expected advertisement is missing.\n\nIf a neighbor fails to reach Full, compare area, timers, network type, authentication, addressing, and MTU. If the neighbor is Full but a route is absent, verify that the source interface is operational, included in OSPF, and advertising the correct prefix. Finally, test the return route and any access policy along the service path.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Secures the router by stopping OSPF Hello packets on all interfaces by default.",
              "code": "passive-interface default"
            }
          ],
          "lab": {
            "goal": "Practice single area ospfv2 configuration in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure OSPF using the passive-interface default command."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "A wildcard mask of 0.0.0.0 matches an exact interface IP address."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "OSPFv2 Network Types: Point-to-Point vs. Broadcast",
          "lead": "Analyzing how OSPF scales across Ethernet networks using DR and BDR.",
          "keyIdeas": [
            "Point-to-Point",
            "Broadcast Multi-Access",
            "DR and BDR Roles",
            "DROTHER and 2-WAY State",
            "DR Election Criteria",
            "Non-preemptive Elections"
          ],
          "content": "an understanding of OSPF requires understanding how it adapts to different Layer 2 topologies, known as Network Types. The two most prominent network types in CCNA are Point-to-Point and Broadcast Multi-Access. A Point-to-Point network connects exactly two routers. Think of a direct serial link (HDLC or PPP) or a dedicated point-to-point subinterface. Because there are only two routers on the wire, the OSPF logic is especially simple.\n\nR1 knows that any LSU it sends out that interface will only ever be received by R2, and vice versa. There is no need for complex election processes. On a point-to-point network, OSPF neighbors immediately transition to the FULL state. The default Hello timer is 10 seconds, and the Dead timer is 40 seconds. Multicast 224.0.0.5 is used for all OSPF traffic.\n\nA Broadcast Multi-Access network is entirely different. The quintessential example is Ethernet.\n\nOn an Ethernet VLAN, you could have 3, 5, or 50 routers all connected to the same switch. If OSPF treated this like point-to-point, every router would form a full adjacency with every other router. The formula for the number of adjacencies is n(n-1)/2. For 10 routers, that is 45 adjacencies. To solve this scaling nightmare, OSPF on a Broadcast network elects a Designated Router (DR) and a Backup Designated Router (BDR).\n\nThe DR acts as the central point of contact for the segment. All other routers (called DROTHERs) form a FULL adjacency only with the DR and the BDR. DROTHER routers only form a 2-WAY state with each other. This drastically reduces the number of adjacencies and flooded packets. When a DROTHER detects a topology change, it sends an LSU to the multicast address 224.0.0.6 (All DR/BDR Routers). The DR receives it, processes it, and then floods the LSU back out to the segment on 224.0.0.5 (All OSPF Routers) so the other DROTHERs receive the update. The DR/BDR election process happens during the 2-WAY state. The election is based on the following criteria: 1.\n\nHighest OSPF Interface Priority: Configured on the interface using 'ip ospf priority [0-255]'. The default is 1. If you configure a priority of 0, the router is ineligible to become a DR or BDR. 2. Highest Router ID (RID): If priorities are tied (which they are by default), the router with the highest Router ID wins the DR role, and the second-highest becomes the BDR.\n\nA critical nuance of the DR/BDR election is that it is NON-PREEMPTIVE.\n\nOnce a router becomes the DR, it remains the DR until it is rebooted, the OSPF process is cleared, or its interface goes down. If a new router comes online with a higher Priority or higher RID, it will not overthrow the existing DR. This ensures stability on the segment. To force an election, the administrator must run 'clear ip ospf process' on the current DR.\n\nIt is often beneficial to manually change the OSPF network type. For example, if you connect two routers directly with an Ethernet crossover cable, or via a dedicated /30 point-to-point VLAN, OSPF will still see it as an Ethernet interface and default to a Broadcast network type. It will waste time (40 seconds of Wait timer) electing a DR/BDR when there are only two devices.\n\nYou can optimize this by changing the interface network type using 'ip ospf network point-to-point'. This eliminates the DR/BDR election, speeds up convergence, and simplifies the LSDB topology.\n\nA Point-to-Point network connects exactly two routers. There is no need for complex election processes. Multicast 224.0.0.5 is used for all OSPF traffic.\n\nA Broadcast Multi-Access network is entirely different. The quintessential example is Ethernet. The formula for the number of adjacencies is n(n-1)/2. For 10 routers, that is 45 adjacencies. 0.0.6 (All DR/BDR Routers). 0.0. The DR/BDR election process happens during the 2-WAY state. The election is based on the following criteria: 1. The default is 1.2. This ensures stability on the segment.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Makes the router ineligible to become DR or BDR.",
              "code": "ip ospf priority 0"
            }
          ],
          "lab": {
            "goal": "Practice ospfv2 network types: point-to-point vs. broadcast in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Connect three routers to an Ethernet switch. Observe the DR/BDR election."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "The OSPF DR election is strictly non-preemptive."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "OSPFv2 Troubleshooting and Verification",
          "lead": "Decoding 'show ip ospf neighbor' and resolving MTU and timer mismatches.",
          "keyIdeas": [
            "show ip ospf neighbor",
            "Adjacency States",
            "MTU Mismatches (EXSTART)",
            "Timer Mismatches",
            "show ip route ospf"
          ],
          "content": "Verifying and troubleshooting OSPFv2 relies heavily on understanding the output of specific show commands, primarily 'show ip ospf neighbor', 'show ip route ospf', and 'show ip ospf interface'. The most critical command is 'show ip ospf neighbor'. This command provides a snapshot of the router's adjacencies. A typical output looks like this: 'Neighbor ID Pri State Dead Time Address Interface'.\n\nLet's dissect this. Neighbor ID is the Router ID (RID) of the neighboring router, not necessarily its physical IP address.\n\nPri is the OSPF interface priority of the neighbor (used for DR/BDR election). State indicates the adjacency state. 'FULL' means databases are fully synchronized. The suffix (DR, BDR, DROTHER, or '-' for point-to-point) indicates the neighbor's role on the segment. '2WAY' is a healthy state for two DROTHERs. Dead Time is a countdown timer. If this reaches 0 before a Hello is received, the neighbor is declared dead and the adjacency is torn down.\n\nIt resets to 40 (or the configured dead interval) every time a Hello is received. When troubleshooting stuck neighbor states, the state column is your biggest clue: 1. Stuck in INIT: The router is receiving Hellos from the neighbor, but the neighbor is not receiving ours. Our Router ID is missing from the neighbor's Hello packet. This usually indicates a one-way communication issue (e.g., an ACL blocking multicast in one direction, or a Layer 2 unidirectional link).\n\n2. Stuck in EXSTART / EXCHANGE: The routers are trying to exchange Database Description (DBD) packets, but are failing. This is almost always caused by an MTU (Maximum Transmission Unit) mismatch on the interface. OSPF requires the MTU to match perfectly; if it doesn't, it will not exchange DBDs. You can bypass this with 'ip ospf mtu-ignore', but fixing the actual MTU is the correct solution.\n\n3. Not showing up at all: If a neighbor is completely missing from the output, the Hellos are failing. Check Layer 1/2 connectivity. Then check for mismatched OSPF parameters: Subnet mask, Hello/Dead timers, Area ID, or Authentication. Also ensure the interface isn't configured as 'passive-interface'. To verify the routing table, use 'show ip route ospf'. You should see routes with the code 'O'. An 'O' route indicates an intra-area route (learned from within the same Area 0).\n\nIf you see 'O IA', it means Inter-Area route (learned from another Area, like Area 1, injected by an ABR via a Type 3 LSA). If you see 'O E1' or 'O E2', it means External route (redistributed from another routing protocol). Finally, 'show ip ospf interface GigabitEthernet0/0' is a useful verification tool for interface-specific OSPF settings. It reveals the OSPF process ID, Area ID, Network Type (Broadcast/Point-to-Point), Cost, State (DR/BDR/DROTHER), Priority, and crucially, the Timer intervals (Hello 10, Dead 40).\n\nWhen neighbors won't form, running this command on both sides and comparing the Timer intervals and Area ID is the fastest way to spot the mismatch.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Displays the status, state, and role of all OSPF neighbors.",
              "code": "show ip ospf neighbor"
            }
          ],
          "lab": {
            "goal": "Practice ospfv2 troubleshooting and verification in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Intentionally misconfigure the Hello timer on R1. Watch the adjacency drop."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "If OSPF is stuck in EXSTART or EXCHANGE, immediately suspect an MTU mismatch."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "FHRP Architecture and Protocols",
          "lead": "Understanding the concepts of Virtual IPs, Virtual MACs, HSRP, VRRP, and GLBP.",
          "keyIdeas": [
            "First Hop Redundancy Protocol",
            "Virtual IP and Virtual MAC",
            "Active and Standby roles",
            "HSRP (Cisco Proprietary)",
            "VRRP (Open Standard)",
            "GLBP (Active/Active Load Balancing)"
          ],
          "content": "First Hop Redundancy Protocols (FHRP) provide a mechanism to prevent a single point of failure at the default gateway. In a typical LAN environment, end-user PCs are configured with a single IP address for their default gateway (e.g., 192.168.1.1). If the router acting as 192.168.1.1 crashes, experiences a power failure, or its LAN interface goes down, every PC on that subnet loses off-subnet connectivity.\n\nThey have no built-in mechanism to dynamically discover a backup router. FHRP solves this by grouping multiple physical routers together into a single 'virtual' router. This virtual router has its own Virtual IP Address (VIP) and Virtual MAC Address. The PCs are configured to use the VIP as their default gateway. The physical routers participating in the FHRP group communicate with each other to elect a primary (Active) router.\n\nThe Active router assumes responsibility for the VIP and Virtual MAC, actively listening for and forwarding traffic sent to that address. The other routers remain in a Standby or Backup state.\n\nIf the Active router fails, a Standby router instantly detects the failure (via the loss of periodic hello/keepalive messages) and takes over the VIP and Virtual MAC, continuing to route traffic without interruption. The end-user PCs are completely unaware that the physical router handling their traffic just changed; their ARP cache still points the VIP to the Virtual MAC. There are three primary FHRPs you must understand for CCNA.\n\n1. Hot Standby Router Protocol (HSRP): This is a Cisco-proprietary protocol. It creates one Active router and one Standby router. Other routers in the group remain in the Listen state. HSRP uses a virtual MAC address format of 0000.0c07. acXX (where XX is the group number in hexadecimal) for version 1. It operates over UDP port 1985 using multicast address 224.0.0.2.2.\n\nVirtual Router Redundancy Protocol (VRRP): This is an IEEE standard protocol (RFC 3768), meaning it is vendor-neutral and can be run between Cisco and non-Cisco equipment. VRRP elects one 'Master' router and one or more 'Backup' routers. Its virtual MAC is 0000.5e00.01XX. It operates directly over IP protocol 112 using multicast 224.0.0.18. Functionally, it is especially similar to HSRP but uses different terminology.\n\n3. Gateway Load Balancing Protocol (GLBP): This is another Cisco-proprietary protocol, but unlike HSRP and VRRP which are strictly Active/Standby (only one router forwards traffic for a group), GLBP provides true Active/Active load balancing. It elects an Active Virtual Gateway (AVG) which hands out different Virtual MAC addresses to different PCs via ARP replies. Other routers act as Active Virtual Forwarders (AVFs). This allows all physical routers to simultaneously forward traffic for the same VIP, much improving bandwidth utilization.\n\nWhile VRRP and GLBP are important to know conceptually, CCNA focuses deeply on configuring and troubleshooting HSRP.\n\ng., 192.168.1.1). If the router acting as 192.168.1.1. It creates one Active router and one Standby router. HSRP uses a virtual MAC address format of 0000.0c07.0.0.2.2. Its virtual MAC is 0000.5e00.01XX. 0.0.18.3. Other routers act as Active Virtual Forwarders (AVFs).",
          "tables": [],
          "commands": [],
          "lab": {
            "goal": "Practice fhrp architecture and protocols in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Compare PC ARP tables before and after an FHRP failover to observe the Virtual MAC persistence."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "HSRP and GLBP are Cisco proprietary; VRRP is an open standard.",
            "GLBP is the only FHRP that provides true load-balancing by default using multiple Virtual MACs."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "HSRP Configuration, Priority, and Preemption",
          "lead": "Configuring HSRP, manipulating elections with priority, and understanding Preempt and Gratuitous ARPs.",
          "keyIdeas": [
            "standby ip command",
            "HSRP Priority (default 100)",
            "HSRP Preemption",
            "Gratuitous ARP (GARP)",
            "HSRPv1 Virtual MAC format"
          ],
          "content": "Hot Standby Router Protocol (HSRP) configuration and mechanics require a detailed study. HSRP is enabled at the interface level. The core command is 'standby [group-number] ip [virtual-ip-address]'. For example, on an interface with a physical IP of 192.168.1.2, you would configure 'standby 1 ip 192.168.1.1'. The group number can be from 0 to 255 for HSRPv1. The routers in the same group exchange UDP hello messages every 3 seconds, with a hold timer of 10 seconds.\n\nThe election of the Active router is based on the HSRP Priority. The priority is a value from 0 to 255, with a default of 100. The router with the highest priority becomes the Active router. You can configure this using 'standby 1 priority 150'. If priorities are tied (which they are by default), the tie-breaker is the numerically highest IP address on the participating interface.\n\nA critical, frequently examined feature of HSRP is Preemption. By default, HSRP is NON-PREEMPTIVE. This means if Router A boots up and becomes the Active router, and then Router B boots up later with a higher priority (e.g., 200), Router B will not take over. It will remain in the Standby state, respecting the currently Active router to avoid unnecessary flapping.\n\nHowever, you often want the more powerful router (Router B) to take over once it recovers from a failure.\n\nTo force Router B to overthrow an active router with a lower priority, you must configure 'standby 1 preempt' on Router B. It is a best practice to configure 'standby 1 preempt' on all routers in the HSRP group to ensure predictable failovers. When an HSRP failover occurs, the Standby router stops receiving hellos for 10 seconds (the hold timer), declares the Active router dead, and transitions to the Active state.\n\nIt immediately begins transmitting gratuitous ARPs (GARPs). A Gratuitous ARP is an unsolicited ARP reply broadcast to the LAN segment. It announces 'The Virtual IP 192.168.1.1 is now located at this Virtual MAC address'.\n\nWhile the Virtual MAC hasn't actually changed, this GARP is critical for Layer 2 switches. When the switch receives the GARP from the new Active router's physical port, it instantly updates its MAC address table, moving the Virtual MAC entry from the old broken router's port to the newly Active router's port. This ensures seamless Layer 2 switching for the returning traffic without waiting for the MAC table to age out (which takes 300 seconds by default).\n\nLet's review the Virtual MAC structure. For HSRPv1, the MAC is always 0000.0c07. acXX. '0000.0c' is the Cisco Vendor OUI. '07. ac' indicates HSRP. The 'XX' is the two-digit hexadecimal representation of the HSRP group number. If you configure 'standby 10 ip...', the group is 10. The hex equivalent of 10 is 0A. Therefore, the Virtual MAC will be 0000.0c07. ac0a.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Sets the HSRP priority to 150 (higher than default 100).",
              "code": "standby 1 priority 150"
            },
            {
              "title": "IOS example",
              "description": "Allows this router to overthrow an active router with a lower priority.",
              "code": "standby 1 preempt"
            }
          ],
          "lab": {
            "goal": "Practice hsrp configuration, priority, and preemption in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure HSRP on two routers. Set one to priority 150. Do not enable preempt. Reboot the priority 150 router and observe that it comes up as Standby. Enable preempt and watch it take over."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "HSRP is non-preemptive by default.",
            "The tiebreaker for HSRP election if priorities are equal is the highest physical interface IP address."
          ],
          "practiceQuestions": [],
          "practical": ""
        }
      ]
    },
    {
      "title": "Domain 4: IP Services",
      "weight": "10% of exam",
      "intro": "Operate the services that make an IP network usable and observable: NAT, time, address assignment, name resolution, monitoring, logging, QoS, and file transfer.",
      "topics": [
        {
          "title": "NAT, static translation, dynamic pools, and PAT",
          "lead": "Address translation connects private addressing to external networks while creating state that operators must understand and verify.",
          "keyIdeas": [
            "Inside local and inside global describe the same inside host before and after translation",
            "Static NAT is one-to-one; dynamic NAT uses a pool; PAT distinguishes sessions with transport ports",
            "NAT order, ACL selection, routes, and return traffic all affect success"
          ],
          "content": "Network Address Translation changes address information as a packet crosses a translating boundary. In Cisco terminology, inside local is the address used by an inside host in its own network, while inside global is the address representing that host to the outside. Outside local and outside global describe the outside host as seen internally and externally; in common designs those two are the same.\n\nStatic NAT creates a stable one-to-one mapping and is useful when an inside service must be represented by a predictable address. Dynamic NAT selects an address from a configured pool, so simultaneous translations are limited by pool size.\n\nPort Address Translation: NAT overload: lets many inside sessions share one or a few global addresses by tracking protocol and port values. PAT is the common form used for internet access. The router first needs a valid route and correctly marked inside and outside interfaces. A standard ACL or route map selects eligible inside source addresses; that ACL identifies traffic and is not a normal interface filter.\n\nTranslation state must exist in the expected direction, and return traffic must reach the translating device. NAT can complicate applications that embed addresses, encryption that protects headers, and troubleshooting that compares captures from different sides. Start diagnosis with the source and destination before translation, interface roles, routing, selection rule, and current translation table. Clear state only in an authorized maintenance context because active sessions can be interrupted.",
          "practical": "Given an inside packet, write its address tuple before and after translation, then use translation and statistics output to confirm the device made that exact decision.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Displays active NAT translations.",
              "code": "show ip nat translations"
            },
            {
              "title": "IOS example",
              "description": "Configures static NAT mapping.",
              "code": "ip nat inside source static 192.168.1.10 203.0.113.10"
            },
            {
              "title": "IOS example",
              "description": "Defines a pool of public IPs.",
              "code": "ip nat pool MYPOOL 203.0.113.10 203.0.113.20 netmask 255.255.255.0"
            },
            {
              "title": "IOS example",
              "description": "Configures PAT using the interface IP address.",
              "code": "ip nat inside source list 1 interface GigabitEthernet0/0 overload"
            }
          ],
          "lab": {
            "goal": "Configure and compare static NAT, dynamic NAT, and PAT.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or an authorized IOS lab.",
            "steps": [
              "Build an inside LAN, translating router, outside router, and test server.",
              "Mark inside and outside interfaces and verify routing before NAT.",
              "Configure one static mapping and test it from outside.",
              "Configure a small dynamic pool and observe pool exhaustion.",
              "Replace it with PAT on the outside interface and open several sessions.",
              "Verify translations, statistics, and packet paths from both sides."
            ],
            "expected": "Each method creates the predicted mapping and PAT supports simultaneous inside sessions.",
            "verification": "Use show ip nat translations, show ip nat statistics, interface configuration, and end-to-end tests."
          },
          "examTips": [
            "Memorize the four NAT terms.",
            "Static NAT is inherently bidirectional.",
            "Dynamic NAT can result in address exhaustion if the inside hosts outnumber the pool addresses.",
            "PAT uses TCP and UDP port numbers to track distinct sessions."
          ],
          "practiceQuestions": []
        },
        {
          "title": "NTP design, stratum, authentication, and troubleshooting",
          "lead": "Accurate shared time makes authentication, certificates, logs, automation, and incident timelines dependable.",
          "keyIdeas": [
            "NTP stratum describes distance from a reference clock, not clock quality by itself",
            "A device can be an NTP client, server, or peer",
            "Authentication verifies the time source; reachability and synchronization still require separate checks"
          ],
          "content": "Network Time Protocol distributes time from reference sources through a hierarchy. A stratum 1 server is directly attached to a stratum 0 reference such as a GPS or atomic clock; each synchronization step increases the stratum. Stratum 16 indicates unsynchronized. Lower stratum can be preferred, but selection also considers reachability, delay, dispersion, and stability. Cisco IOS can use configured servers, serve time to clients, or form symmetric peer relationships.\n\nProduction designs use multiple trustworthy sources and consistent timezone and daylight settings for display, while the underlying synchronized time remains coherent. Devices should not depend on an unprotected public source when an authenticated organizational hierarchy is available. NTP authentication helps verify that updates came from a configured key relationship. It does not encrypt all timing information or make an unreachable server useful.\n\nConfigure keys, mark trusted keys, associate a key with the server, and enable authentication according to platform syntax.\n\nRestrict who can query or influence time. Troubleshooting distinguishes connectivity, DNS, ACL, authentication, source interface, stratum, selection, and gradual clock adjustment. Compare show clock, associations, detail, and status. A small offset may be slewed rather than stepped, so synchronization is not always instant.",
          "practical": "When logs disagree, check time source and synchronization state before rewriting a security timeline. Record the timezone and device clock as part of every capture.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Configures the router to synchronize time with an NTP server.",
              "code": "ntp server 192.168.1.100"
            },
            {
              "title": "IOS example",
              "description": "Displays the status of configured NTP associations.",
              "code": "show ntp associations"
            }
          ],
          "lab": {
            "goal": "Create and verify an internal NTP hierarchy.",
            "environment": "A three-router IOS lab.",
            "steps": [
              "Set one router as the intended internal source or point it to a trusted simulated reference.",
              "Configure two clients and verify reachability.",
              "Add authentication and confirm a correct key synchronizes.",
              "Introduce one wrong key and compare status and associations.",
              "Restore the key and record convergence."
            ],
            "expected": "Clients select the intended source and reject the incorrect authenticated association.",
            "verification": "Use show ntp associations, show ntp status, and show clock detail."
          },
          "examTips": [
            "Stratum 1 is connected to an atomic clock. Stratum 16 means unsynchronized.",
            "Look for the '*' symbol in 'show ntp associations' to identify the synced peer."
          ],
          "practiceQuestions": []
        },
        {
          "title": "DHCP address assignment and relay",
          "lead": "DHCP automates host configuration, while relay allows broadcasts to reach a server on another subnet.",
          "keyIdeas": [
            "DORA is Discover, Offer, Request, Acknowledge",
            "A relay converts the local client broadcast into a routed request and supplies gateway context",
            "Pools, exclusions, leases, options, snooping, and routing all influence client results"
          ],
          "content": "A new IPv4 client initially lacks an address and uses DHCP messages to obtain one. It broadcasts Discover, receives one or more Offers, broadcasts a Request identifying the chosen offer, and receives an Acknowledge. The lease supplies an address, mask, default gateway, DNS servers, duration, and possibly other options. Clients later renew before the lease expires. A router can serve an IOS DHCP pool, but enterprises commonly use centralized servers.\n\nBecause routers do not forward ordinary broadcasts, an interface facing clients uses ip helper-address to relay selected UDP services to the server. The relay places its gateway interface address into the request so the server selects the correct subnet scope. The reply returns through the relay. Exclude infrastructure addresses from dynamic allocation. Ensure the pool's network, mask, gateway, DNS, and lease agree with the VLAN.\n\nDuplicate or rogue servers can provide unsafe configuration; DHCP snooping at the access layer helps restrict server responses and build bindings. Option 82 can add relay or port context in supported designs. Troubleshoot in order: client link and VLAN, DHCP message exchange, relay address, routing to server, server scope and free leases, return route, ACLs, and snooping trust. An address from 169.254.0.0/16 commonly signals that an IPv4 client did not obtain a lease, but verify the host behavior rather than treating the range as the cause.",
          "practical": "Capture or simulate DORA and annotate source address, destination address, UDP ports, and the point where relay turns a broadcast into a routed request.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Creates a DHCP pool.",
              "code": "ip dhcp pool LANSUB"
            },
            {
              "title": "IOS example",
              "description": "Configures a DHCP relay agent.",
              "code": "ip helper-address 192.168.100.10"
            }
          ],
          "lab": {
            "goal": "Provide DHCP across a routed VLAN boundary.",
            "environment": "Packet Tracer with one client VLAN, router or Layer 3 switch, and DHCP server.",
            "steps": [
              "Create the client VLAN and gateway and verify local connectivity.",
              "Configure a nonoverlapping server scope and exclusions.",
              "Add ip helper-address on the client gateway interface.",
              "Renew a client lease and inspect its address, gateway, DNS, and duration.",
              "Break the return route or relay once, diagnose it, and restore service."
            ],
            "expected": "The remote client receives the correct scope through the relay.",
            "verification": "Use client configuration, show ip interface, routing output, and observed DHCP messages."
          },
          "examTips": [
            "The client sends DHCP Discover as a broadcast. The server typically replies with a unicast Offer.",
            "The relay agent sets the GIADDR (Gateway IP Address) field so the server knows which subnet pool to use."
          ],
          "practiceQuestions": []
        },
        {
          "title": "DNS resolution and network troubleshooting",
          "lead": "DNS maps names to records through a distributed hierarchy and is often the difference between working reachability and a usable application.",
          "keyIdeas": [
            "Recursive resolvers act for clients; authoritative servers answer for zones",
            "A, AAAA, CNAME, MX, NS, PTR, and TXT records serve different purposes",
            "Caching, TTL, split views, search domains, and security controls affect answers"
          ],
          "content": "A stub resolver on a host sends a query to a recursive resolver. If the answer is not cached, that resolver follows referrals from the DNS hierarchy toward an authoritative server. The final result is cached according to time to live. Recursive and authoritative roles are distinct even if one product can perform both. A records map names to IPv4 addresses; AAAA records map to IPv6; CNAME creates an alias; MX identifies mail exchange; NS delegates a zone; PTR supports reverse lookup; TXT stores text used by many verification and mail-security mechanisms.\n\nA CNAME points to another name, not directly to an address. DNS commonly uses UDP 53 for ordinary queries and TCP 53 for large responses, zone transfers, and fallback; modern encrypted transports may also appear. Split DNS can provide different internal and external answers. DNSSEC validates signed DNS data but does not hide the queried name. When a name fails, test the precise query against the configured resolver, then distinguish NXDOMAIN, timeout, refusal, wrong record, stale cache, search-suffix behavior, and application caching.\n\nA successful ping to an address with a failed name points toward resolution, but an address answer does not prove the destination application is healthy.",
          "practical": "Troubleshoot name resolution as its own service. Record query name and type, server used, response code, answer, TTL, and whether the application used the same resolver.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Configures the DNS server for the router to use.",
              "code": "ip name-server 8.8.8.8"
            }
          ],
          "lab": {
            "goal": "Practice dns in the network: role, resolution, and ios configuration in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure a Cisco router to perform DNS lookups."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "DNS uses UDP 53 for client queries and TCP 53 for zone transfers."
          ],
          "practiceQuestions": []
        },
        {
          "title": "SNMP monitoring: managers, agents, MIBs, and SNMPv3",
          "lead": "SNMP exposes structured operational data and notifications, but versions differ substantially in security.",
          "keyIdeas": [
            "Managers query agents for objects identified by OIDs in MIB modules",
            "Polling retrieves state; traps and informs notify the manager",
            "SNMPv3 can provide named users, authentication, integrity, and privacy"
          ],
          "content": "Simple Network Management Protocol organizes managed information as objects with numeric object identifiers. A management station polls device agents with read operations and may perform controlled write operations. MIB modules describe object names and structure; they are not a database magically populated without device support. Counters, interface state, CPU, memory, and environmental data are common uses. Traps are unsolicited notifications and do not require acknowledgment.\n\nInforms add acknowledgment and therefore more reliability at greater overhead.\n\nPolling provides regular measurements but can miss a brief event between intervals. A sound monitoring design combines both and accounts for counter rollover, interface indexes, and collection delay. SNMPv1 and v2c rely on community strings, which provide weak protection and are often sent without encryption. SNMPv3 introduces the User-based Security Model. noAuthNoPriv offers a username without message authentication or encryption; authNoPriv adds authentication and integrity; authPriv adds privacy encryption.\n\n### View-Based Access Control Model\n\nThis model can restrict which objects a user may access. Restrict SNMP to management sources, use least privilege and SNMPv3 authPriv where supported, protect credentials, and log administrative changes. Troubleshoot IP reachability, UDP 161 polling, UDP 162 notifications, ACLs, user and security level, engine identity, views, and time-related authentication state.",
          "practical": "For an interface-down alert, identify whether it came from a poll, trap, or inform and what independent query would confirm the current state.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Configures a read-only SNMP community string.",
              "code": "snmp-server community PUBLIC ro"
            },
            {
              "title": "IOS example",
              "description": "Configures an SNMPv3 user with authentication and encryption.",
              "code": "snmp-server user ADMIN MYGROUP v3 auth sha SECRETPASS priv aes 128 ENCRYPTKEY"
            }
          ],
          "lab": {
            "goal": "Practice snmpv2c: mibs, oids, and polling in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure an SNMPv2c read-only community and verify SNMP polling."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "SNMP Traps are sent on UDP 162 from the Agent to the Manager.",
            "SNMPv3 security models: noAuthNoPriv, authNoPriv, authPriv."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Syslog severity, transport, and centralized records",
          "lead": "Syslog provides event messages whose value depends on severity choice, timestamps, source identity, transport, and retention.",
          "keyIdeas": [
            "Severity 0 is most urgent and severity 7 most detailed",
            "The configured logging level includes that severity and all more severe messages",
            "Central collection protects evidence and correlates devices"
          ],
          "content": "Cisco syslog severities run from 0 emergencies, 1 alerts, 2 critical, 3 errors, 4 warnings, 5 notifications, 6 informational, to 7 debugging. A trap level of warnings sends levels 0 through 4. Lower number means higher severity. Facility and mnemonic fields help identify the subsystem and message type. Devices can write to console, buffered memory, terminal monitor sessions, and remote collectors.\n\nConsole logging can disrupt a busy device; debug output can be voluminous and should be used carefully.\n\nUDP transport is common and lightweight but does not guarantee delivery. Some platforms support more reliable or protected transport options. Configure meaningful hostnames, source interfaces, synchronized time, timestamps with useful precision, remote collectors, and an appropriate severity threshold. Central logs need access control, retention, storage monitoring, and health checks. If a device stops sending, that is itself an operational signal.\n\nDuring troubleshooting, use message time and sequence to connect interface, routing, authentication, spanning-tree, and security events.\n\nA severity label is assigned by software and does not by itself define business impact. Read the actual event and context.",
          "practical": "Trigger a harmless interface state change in a lab and follow the message from device to collector. Confirm timestamp, hostname, facility, severity, mnemonic, and text.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Configures a remote syslog server.",
              "code": "logging host 192.168.1.50"
            }
          ],
          "lab": {
            "goal": "Practice syslog: facilities, severities, and archiving in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure a router to send informational (level 6) syslog messages to a central server."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Remember the severities: Every Action Critical, Errors Warning, Notifications Informational, Debugging (0-7)."
          ],
          "practiceQuestions": []
        },
        {
          "title": "QoS classification, marking, queuing, policing, and shaping",
          "lead": "Quality of Service manages congestion according to traffic requirements; it cannot create bandwidth or repair a broken path.",
          "keyIdeas": [
            "Classify and mark traffic near a trustworthy boundary",
            "Queuing decides which packets leave first during congestion",
            "Policing drops or remarks excess traffic; shaping buffers it to smooth the rate"
          ],
          "content": "QoS matters when demand exceeds available capacity. Voice needs low delay, jitter, and loss; interactive applications value responsiveness; bulk transfer may tolerate delay but uses substantial bandwidth. A policy identifies traffic, marks it consistently, and applies behavior at congestion points. Classification can use addresses, ports, applications, or NBAR capabilities. Layer 2 CoS and Layer 3 DSCP carry markings; trust boundaries determine which markings the network accepts.\n\nDSCP uses six bits in the IP header. Common classes include default best effort, Expedited Forwarding for carefully controlled voice, and Assured Forwarding groups. Markings are signals, not guaranteed service. Queuing schedules packets when an interface is congested. Low-latency queuing gives strict priority to a limited class, while class-based weighted mechanisms allocate bandwidth among classes. Priority traffic must be policed or bounded so it cannot starve everything else.\n\nWRED can drop selected TCP traffic before a queue is completely full to signal congestion, but it is generally unsuitable for delay-sensitive voice. Policing enforces a rate by transmitting conforming traffic and dropping or remarking excess, without buffering the excess. Shaping buffers excess and releases it at a configured average, adding delay but smoothing bursts. Apply policy in the correct direction and verify counters, offered rate, drops, and queue depth under actual congestion.",
          "practical": "Given voice, video, transactions, backups, and ordinary web traffic on a slow WAN, define the trust boundary and explain classification, marking, queue, and rate action for each.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Creates a QoS class map for classification.",
              "code": "class-map match-any VOICE"
            },
            {
              "title": "IOS example",
              "description": "Assigns strict priority bandwidth in a policy-map (LLQ).",
              "code": "priority 512"
            },
            {
              "title": "IOS example",
              "description": "Backs up the active configuration to a TFTP server.",
              "code": "copy running-config tftp:"
            }
          ],
          "lab": {
            "goal": "Observe QoS behavior under congestion.",
            "environment": "An IOS lab image that supports class maps, policy maps, and traffic generation.",
            "steps": [
              "Create two traffic classes and a constrained egress link.",
              "Classify and mark one delay-sensitive flow.",
              "Apply a policy with bounded priority and class bandwidth.",
              "Generate traffic until the link congests.",
              "Compare offered rate, queue counters, delay, and drops.",
              "Remove the policy and explain the difference."
            ],
            "expected": "The configured class receives its intended treatment only when congestion exists.",
            "verification": "Use show policy-map interface plus end-to-end loss and latency tests."
          },
          "examTips": [
            "DSCP is a 6-bit field in the IPv4 header. Expedited Forwarding (EF) is DSCP 46, typically used for Voice.",
            "WRED prevents TCP global synchronization by randomly dropping packets before the queue fills entirely.",
            "Shaping buffers (introduces delay), Policing drops (causes retransmissions)."
          ],
          "practiceQuestions": []
        },
        {
          "title": "SSH, FTP, and TFTP for network operations",
          "lead": "Management and file-transfer protocols differ in authentication, encryption, reliability, and appropriate use.",
          "keyIdeas": [
            "SSH protects interactive remote management and can support secure copy",
            "FTP uses TCP and authentication but is not encrypted by default",
            "TFTP uses UDP and minimal functions with no built-in authentication"
          ],
          "content": "SSH should replace Telnet for remote CLI because it protects credentials and session content. Configure device identity, keys, named users or AAA, SSH version, VTY transport, idle timeouts, and source restrictions. Verify from an authorized management network and keep console or rollback access for risky changes. FTP uses a TCP control connection and a separate data connection. Active and passive modes establish data differently, which matters through firewalls and NAT.\n\nOrdinary FTP does not encrypt credentials or content. Protected alternatives such as SFTP or SCP use SSH, while FTPS adds TLS to FTP; they are distinct protocols. TFTP is a simple UDP-based transfer protocol commonly used in controlled labs for images or configurations. It has no built-in authentication or encryption and limited operations. Restrict it to trusted management paths and do not expose it as a general internet service.\n\nBefore copying an image, confirm platform, release, file size, storage, checksum, boot variable, power stability, and rollback path. After copying a configuration, protect embedded secrets and verify the destination file. A successful transfer does not prove the file is correct or trusted. A transfer workflow should separate reachability from trust. Confirm the management path and permitted protocol first, then verify the received image with its published checksum before changing a boot variable.\n\nPreserve the current image and configuration until the device has rebooted successfully and post-change checks pass. TFTP may be suitable inside an isolated lab, while production environments generally use an authenticated protected transfer method supported by the platform.\n\n### Operational verification",
          "practical": "Choose a protocol for interactive administration, sensitive configuration backup, and a simple isolated lab transfer. Defend each choice by security and operational behavior.",
          "tables": [],
          "commands": [
            {
              "title": "IOS example",
              "description": "Backs up the active configuration to a TFTP server.",
              "code": "copy running-config tftp:"
            }
          ],
          "lab": {
            "goal": "Practice qos shaping/policing and tftp/ftp network operations in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure a policy-map to police traffic to 10Mbps, and backup the config via TFTP."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Shaping buffers (introduces delay), Policing drops (causes retransmissions)."
          ],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Domain 5: Security Fundamentals",
      "weight": "15% of exam",
      "intro": "Apply layered security to people, devices, management access, AAA, ACLs, Layer 2 access, wireless networks, and protected remote connectivity.",
      "topics": [
        {
          "title": "Key Security Concepts: Threats, Vulnerabilities, and Exploits",
          "lead": "Threats cause harm by exploiting weaknesses in people, processes, software, devices, or network design.",
          "keyIdeas": [
            "Threat vs. Vulnerability",
            "Exploits and Payloads",
            "Malware Categories"
          ],
          "content": "A threat is a potential cause of harm. A vulnerability is a weakness or unsafe condition. An exploit is a method that takes advantage of a vulnerability, while risk reflects likelihood and impact in context. A missing patch is not itself an attacker, and a scanning result does not prove exploitation.\n\nCommon threats include malware, credential theft, social engineering, denial of service, insider misuse, physical loss, and configuration error. An attack vector is the path used, such as email, a public service, a wireless network, a supplier, or a removable device. The same threat produces different risk depending on exposure, asset value, controls, and business consequence.\n\nSecurity controls may be administrative, technical, or physical and may prevent, detect, correct, deter, compensate, or recover. Defense in depth uses meaningfully independent layers. Network operators support security by reducing unnecessary paths, protecting management, segmenting trust, logging activity, and preserving recovery.\n\nA sound response starts with evidence. Identify the affected asset, observed behavior, credible impact, current control, and authorized next action. Avoid equating a familiar port, tool, or address with malicious intent without context. Network security begins with assets and trust boundaries. Identify what communication and administration the business actually needs, then reduce unnecessary exposure. A vulnerability scanner, alert, or unfamiliar connection is evidence to interpret, not a complete risk conclusion.\n\nAttack surface includes physical ports, wireless coverage, device management, routing adjacencies, services, credentials, APIs, and suppliers. Threat modeling asks who might act, through which path, against which asset, and with what impact. It gives purpose to controls rather than treating every feature as equally urgent.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "Identify high CPU utilization caused by DoS attacks.",
              "code": "show processes cpu sorted"
            }
          ],
          "lab": {
            "goal": "Practice key security concepts: threats, vulnerabilities, and exploits in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Identify baseline CPU usage.",
              "Monitor interface traffic rates.",
              "Implement CoPP."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Know the difference between a threat, vulnerability, and exploit."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Security Mitigation Techniques and Defense-in-Depth Architectures",
          "lead": "Layering security controls to eliminate single points of failure.",
          "keyIdeas": [
            "Defense-in-Depth",
            "Firewalls",
            "IPS/IDS"
          ],
          "content": "Defense in depth combines governance, physical protection, identity, secure configuration, network segmentation, filtering, endpoint security, monitoring, and recovery. Each layer addresses a failure the others may miss. More products do not automatically create more depth.\n\nFirewalls enforce traffic policy and often maintain connection state. IDS detects and alerts; IPS can block inline. Endpoint protection observes the host, while network sensors observe traffic at their placement. Vulnerability management finds and prioritizes weaknesses. Security awareness helps people recognize and report manipulation. Backups reduce impact when prevention fails.\n\nLeast privilege and zero-trust principles limit access according to identity, device, resource, and context rather than treating an internal address as trustworthy. Segmentation limits movement and makes policy visible. Management services should use SSH, AAA, protected time, centralized logs, and restricted source networks.\n\nEvery mitigation has a failure mode. Encryption hides content from some network inspection. IPS can block legitimate traffic. A poorly maintained allowlist becomes permanent bypass. Operators document purpose, owner, scope, validation, exception, and rollback so the control remains effective. A layered campus design protects the management plane, authenticates administrators, limits user and device access, segments traffic, filters at clear boundaries, hardens endpoints, and preserves logs and recovery.\n\nPreventive and detective controls should fail differently. Zero trust does not mean zero communication. It means a network location alone does not establish trust: identity, device, application, resource, and context drive least-privilege decisions. Verify controls through allowed and denied tests, monitor for drift, and maintain a rollback for changes.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "View recent syslog messages for IPS alerts.",
              "code": "show logging"
            }
          ],
          "lab": {
            "goal": "Practice security mitigation techniques and defense-in-depth architectures in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure a basic stateful firewall using CBAC or ZPF.",
              "Define zones and class-maps.",
              "Apply policy-map to zone-pair."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Defense-in-depth relies on the principle that no single security product is impenetrable."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Security Program Elements: User Awareness and Operational Training",
          "lead": "The human element is often the weakest link in any security posture.",
          "keyIdeas": [
            "Social Engineering",
            "Phishing Mitigation",
            "AUP"
          ],
          "content": "A complete security program is incomplete without addressing the human element. User awareness training educates employees about the risks of social engineering, phishing, tailgating, and improper data handling. Security policies, such as the Acceptable Use Policy (AUP), dictate how corporate assets should be used.\n\nOperational training ensures that IT staff are equipped to respond to incidents, configure devices securely, and maintain compliance with industry regulations. A security program connects policy, awareness, technical standards, vulnerability management, incident response, continuity, vendor oversight, and measurement. Network engineers translate those expectations into device baselines, access paths, segmentation, logging, and documented change. Awareness should teach staff how to verify unusual requests and report mistakes quickly.\n\nRole-based training gives administrators stronger instruction on secrets, change, remote access, and evidence. A culture that punishes early reporting usually receives later reports.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "List currently logged-in users on the device.",
              "code": "show users"
            }
          ],
          "lab": {
            "goal": "Practice security program elements: user awareness and operational training in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Draft an AUP document.",
              "Implement mandatory quarterly security training.",
              "Conduct simulated phishing campaigns."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Phishing is a form of social engineering.",
            "AUP defines acceptable behavior on corporate networks."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Physical Access Control and Environmental Security Measures",
          "lead": "Securing the physical perimeter and environmental conditions.",
          "keyIdeas": [
            "Mantraps",
            "Biometrics",
            "HVAC"
          ],
          "content": "Physical access control ensures that only authorized personnel can physically access networking equipment, servers, and sensitive areas. Controls include mantraps, badge readers, biometric scanners, and video surveillance.\n\nEnvironmental security protects equipment from damage due to extreme temperatures, humidity, power outages, and fire.\n\nUninterruptible Power Supplies (UPS), HVAC systems, and fire suppression systems (like FM-200) are critical components. Network availability depends on facility power, UPS and generator capacity, cooling, humidity, water detection, fire suppression, cabling, and physical access. Redundant devices connected to one power source or conduit still share a failure. Use layered zones, badges, visitors, locks, guards, cameras, and access logs according to risk.\n\nEmergency egress and life safety take priority. Protect console ports, spare equipment, and removable configuration media because physical access can bypass remote controls.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "Check device temperature, power, and fan status.",
              "code": "show environment"
            }
          ],
          "lab": {
            "goal": "Practice physical access control and environmental security measures in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Verify rack locks are engaged.",
              "Check environmental sensors in the datacenter.",
              "Review badge access logs."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Physical security is layer 1 of defense-in-depth.",
            "Mantraps prevent tailgating."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Cisco device access, secrets, privilege, and management hardening",
          "lead": "A secure IOS baseline uses named identities, protected remote access, least privilege, time, logs, and restricted management paths.",
          "keyIdeas": [
            "Enable secret protects privileged EXEC better than legacy enable password",
            "SSH and AAA support accountable remote administration",
            "Privilege levels and parser views can limit command access but require careful design"
          ],
          "content": "Start by removing or disabling unused services, assigning device identity, protecting console access, creating named administration, configuring enable secret, and allowing SSH rather than Telnet. Legacy service password-encryption obscures some plaintext values with reversible Type 7 encoding; it is not strong cryptographic protection. Use supported secret forms and central AAA where appropriate. User EXEC offers limited monitoring, privileged EXEC provides broad operational access, and global or subconfiguration modes change state.\n\nPrivilege levels range from 0 through 15, but arbitrary command reassignment can become difficult to audit. Role-based CLI views may provide clearer command sets on supported platforms. Authorization should match job function and emergency needs. Restrict VTY lines with an access class or management-plane policy, choose a source interface, isolate management with a VLAN or VRF, synchronize time, centralize logs, and back up configuration securely.\n\nSet session timeouts and banners approved by policy. Protect SNMP, APIs, and web management as carefully as SSH. Verify with an allowed administrator and a denied source. Check running and startup state, active users, SSH settings, AAA, ACL counters, time, and logging. Keep a console or rollback path before modifying the only management route. Local device security begins with strong password policies.\n\nCisco IOS supports setting a minimum password length and encrypting all plain-text passwords in the configuration file using `service password-encryption` (Type 7 encryption, easily reversible).\n\nFor stronger security, passwords should be hashed using MD5 (Type 5), SHA-256 (Type 8), or scrypt (Type 9) by using the `secret` keyword instead of `password`. Cisco IOS uses a privilege level system ranging from 0 to 15. Level 1 is the default User EXEC mode, allowing basic monitoring commands. Level 15 is the default Privileged EXEC mode, granting full access to all commands and configuration modes.\n\nThe `enable secret` command secures access to Level 15. Administrators can also define custom privilege levels (e.g., Level 7) and assign specific commands to that level, implementing a basic form of Role-Based Access Control (RBAC).",
          "practical": "Build one baseline template and annotate every command with the risk it addresses and the show command that verifies it.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            },
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "Set minimum password length to 10.",
              "code": "security passwords min-length 10"
            },
            {
              "title": "IOS example",
              "description": "Encrypt plain-text passwords (Type 7).",
              "code": "service password-encryption"
            },
            {
              "title": "IOS example",
              "description": "Set the enable secret using the strong scrypt hash.",
              "code": "enable secret type 9 MyStrongPass"
            },
            {
              "title": "IOS example",
              "description": "Assign the 'show ip route' command to privilege level 5.",
              "code": "privilege exec level 5 show ip route"
            }
          ],
          "lab": {
            "goal": "Harden remote IOS administration.",
            "environment": "An isolated IOS lab with one authorized and one unauthorized client subnet.",
            "steps": [
              "Configure hostname, domain, protected local identity, and SSH.",
              "Disable Telnet on VTY lines and add idle timeout.",
              "Restrict VTY access to the management subnet.",
              "Configure time and centralized logging.",
              "Test allowed and denied clients.",
              "Save and export the verified configuration."
            ],
            "expected": "Only the authorized source can open an accountable SSH session.",
            "verification": "Use show ssh, show users, show access-lists, show clock, logging output, and configuration review."
          },
          "examTips": [
            "Type 7 encryption is weak and easily cracked.",
            "Type 5, 8, and 9 use strong cryptographic hashes.",
            "Level 1 is User EXEC.",
            "Level 15 is Privileged EXEC."
          ],
          "practiceQuestions": []
        },
        {
          "title": "AAA, RADIUS, and TACACS+",
          "lead": "Central AAA separates identity verification, command or service permission, and records of what administrators did.",
          "keyIdeas": [
            "Authentication verifies identity; authorization decides allowed actions; accounting records activity",
            "RADIUS commonly supports network access and encrypts only the password field",
            "TACACS+ is TCP-based, encrypts more of the payload, and supports granular command authorization"
          ],
          "content": "AAA can use a local database, an external server group, or a sequence of methods. A method list describes the order and fallback. The keyword local means try the device database; local-case preserves username case; none permits without authentication and should be used only when intentionally required. A timeout is different from an explicit rejection: fallback behavior should not turn a valid denial into unintended access.\n\nRADIUS uses UDP and combines authentication and authorization in common operation. It is widely used for 802.1X, VPN, and network access. Traditional RADIUS protects the user password field but not the entire packet, so network path protection and shared-secret management matter. Accounting commonly uses a separate UDP port. TACACS+ uses TCP 49, separates AAA functions, and protects the packet body beyond the header.\n\nCisco environments commonly use it for device administration because command authorization can decide which CLI commands a user may run.\n\nRADIUS and TACACS+ are not “secure versus insecure” labels; choose according to use case and deploy protected, redundant servers. Configure an emergency local account and console behavior according to policy before enabling new-model AAA remotely. Test successful login, incorrect credentials, explicit denial, server timeout, authorization, and accounting. A method list typo can lock out every administrator. The AAA framework provides a scalable and secure method for managing access.\n\n- **Authentication**: Verifies the identity of the user (Who are you?).\n\n- **Authorization**: Determines what the user is allowed to do (What can you do?).\n\n- **Accounting**: Tracks what the user did, including commands entered and session duration (What did you do?).\n\nAAA can be implemented using a local database on the router, or delegated to an external server using RADIUS or TACACS+. RADIUS is an open standard protocol used extensively for network access (like 802.1X and VPNs). It uses UDP ports 1812 for Authentication/Authorization and 1813 for Accounting (legacy ports are 1645/1646).\n\nCrucially, RADIUS combines the Authentication and Authorization processes into a single exchange. Furthermore, it only encrypts the password field in the Access-Request packet; the rest of the payload, including the username, is sent in cleartext. TACACS+ is a Cisco-proprietary protocol (though largely open now) designed primarily for device administration. It uses TCP port 49, ensuring reliable delivery.\n\nUnlike RADIUS, TACACS+ strictly separates Authentication, Authorization, and Accounting into distinct processes. This allows for granular command authorization. Also, TACACS+ encrypts the entire payload of the packet, masking both the username and password from packet sniffers.",
          "practical": "Draw the full decision for one SSH login: device receives identity, contacts server, applies authorization, records accounting, and handles server unreachable versus rejected credentials.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            },
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            },
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "Enable the AAA framework globally.",
              "code": "aaa new-model"
            },
            {
              "title": "IOS example",
              "description": "Set the default login authentication to the local database.",
              "code": "aaa authentication login default local"
            },
            {
              "title": "IOS example",
              "description": "Define a RADIUS server named ISE.",
              "code": "radius server ISE"
            },
            {
              "title": "IOS example",
              "description": "Specify IP and ports for the RADIUS server.",
              "code": "address ipv4 10.1.1.100 auth-port 1812 acct-port 1813"
            },
            {
              "title": "IOS example",
              "description": "Define a TACACS+ server named ACS.",
              "code": "tacacs server ACS"
            },
            {
              "title": "IOS example",
              "description": "Specify IP for the TACACS+ server.",
              "code": "address ipv4 10.1.1.200"
            }
          ],
          "lab": {
            "goal": "Compare local, RADIUS, and TACACS+ AAA behavior.",
            "environment": "Packet Tracer or another authorized lab with supported AAA servers.",
            "steps": [
              "Create a protected local fallback and verify console access.",
              "Enable AAA new-model and define named authentication methods.",
              "Configure one RADIUS or TACACS+ server and shared secret.",
              "Apply the method to VTY access.",
              "Test success, bad password, server rejection, and server unreachable.",
              "Inspect server and device accounting records."
            ],
            "expected": "Central identity works and fallback occurs only under the intended condition.",
            "verification": "Use show aaa servers, test aaa where supported, active sessions, and server logs."
          },
          "examTips": [
            "Authentication is 'who', Authorization is 'what', Accounting is 'logging'.",
            "RADIUS uses UDP.",
            "RADIUS encrypts only the password.",
            "RADIUS combines Auth and Authz.",
            "TACACS+ uses TCP port 49.",
            "TACACS+ encrypts the ENTIRE payload.",
            "TACACS+ separates AAA functions."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Standard and extended IPv4 ACL design",
          "lead": "ACLs are ordered stateless tests with an implicit deny, so intent, placement, direction, and verification must be explicit.",
          "keyIdeas": [
            "Standard ACLs match source IPv4; extended ACLs add destination, protocol, and ports",
            "First match wins and unmatched traffic reaches an implicit deny",
            "Apply an ACL to the correct interface and direction, then test both permitted and denied paths"
          ],
          "content": "A standard IPv4 ACL identifies only the source address. Place it near the destination when broader early placement would block that source from unrelated services. An extended ACL can identify source, destination, IP protocol, and TCP or UDP ports, so it is usually placed near the source to stop unwanted traffic early. These are design guidelines; the real goal is precise policy with manageable operations.\n\nEntries are processed top to bottom. A packet stops at the first match. Every ACL has an implicit deny at the end, so a new ACL with only one deny can accidentally block everything else. Use host for one address and any for all; wildcard bits of 0 must match and bits of 1 are ignored. Named ACLs improve meaning and sequence numbers help insertion.\n\nDirection is from the router interface perspective: inbound before the routing decision, outbound after it. An IPv4 interface supports one ACL per protocol, direction, and interface. Router-generated traffic does not necessarily traverse an outbound interface ACL the same way forwarded traffic does, so tests should represent actual sources. Write policy in plain language first. Order specific exceptions before broad matches, add logging selectively, review shadowed entries, and schedule a rollback for remote changes.\n\nVerify attachment, counters, routing, and end-to-end positive and negative tests. Standard IPv4 ACLs are the simplest form of traffic filtering in Cisco IOS. They match traffic based solely on the source IPv4 address. Because they cannot distinguish between destination addresses or specific applications (ports), they are typically placed as close to the *destination* as possible to avoid inadvertently blocking traffic to other legitimate destinations.\n\nStandard ACLs are numbered 1-99 and 1300-1999. They use wildcard masks (inverse of subnet masks) to specify ranges of IP addresses. Every ACL ends with an implicit `deny any` rule. Extended IPv4 ACLs provide granular control over traffic flow. They can filter based on source IP, destination IP, Layer 4 protocol (TCP, UDP, ICMP), and source/destination port numbers.\n\nBecause they are highly specific, best practices dictate placing Extended ACLs as close to the *source* as possible. This prevents unwanted traffic from traversing the network and consuming bandwidth before being dropped at the destination. They are numbered 100-199 and 2000-2699, or can be named. Applying an ACL requires specifying the direction: inbound or outbound.\n\n- **Inbound**: The router checks the ACL before making a routing decision. This saves CPU cycles if the packet is dropped.\n\n- **Outbound**: The router routes the packet to the exit interface, then checks the ACL before transmitting it.\n\nAdding the `log` keyword to an ACE (Access Control Entry) generates a syslog message whenever a packet matches that line. Sequence numbers allow administrators to insert or delete specific lines within a named or numbered ACL without rewriting the entire list.",
          "practical": "For each ACL entry, write one packet that should match and one that should not. Then predict the exact counter that changes during testing.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            },
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            },
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "Permit the 192.168.1.0/24 subnet.",
              "code": "access-list 10 permit 192.168.1.0 0.0.0.255"
            },
            {
              "title": "IOS example",
              "description": "Explicitly deny all other traffic (optional, for logging).",
              "code": "access-list 10 deny any"
            },
            {
              "title": "IOS example",
              "description": "Permit HTTP traffic from 10.1.1.0/24 to host 192.168.1.100.",
              "code": "access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 192.168.1.100 eq 80"
            },
            {
              "title": "IOS example",
              "description": "Explicit deny all.",
              "code": "access-list 101 deny ip any any"
            },
            {
              "title": "IOS example",
              "description": "Apply ACL 101 inbound on an interface.",
              "code": "ip access-group 101 in"
            },
            {
              "title": "IOS example",
              "description": "Deny telnet and log the event.",
              "code": "access-list 101 deny tcp any any eq 23 log"
            }
          ],
          "lab": {
            "goal": "Implement a least-privilege IPv4 ACL without interrupting management.",
            "environment": "A routed Packet Tracer or IOS lab with user, server, and management subnets.",
            "steps": [
              "Write the allowed flows in source, destination, protocol, and port form.",
              "Order entries and include required return or supporting traffic.",
              "Configure a named extended ACL without applying it.",
              "Arrange console or rollback access and apply in the intended direction.",
              "Test required service, forbidden service, and management.",
              "Inspect counters and remove any unused or shadowed entry."
            ],
            "expected": "Required application access succeeds and the explicitly forbidden path fails without collateral impact.",
            "verification": "Use show access-lists, show ip interface, route checks, and positive and negative connection tests."
          },
          "examTips": [
            "Standard ACLs match only source IP.",
            "Place standard ACLs close to the destination.",
            "Extended ACLs match Src IP, Dst IP, Protocol, and Port.",
            "Place extended ACLs close to the source.",
            "Inbound ACLs are processed before routing.",
            "The 'log' keyword is CPU intensive; use it sparingly."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Layer 2 access security: port security, DHCP snooping, and DAI",
          "lead": "Access-layer protections bind expected devices and address behavior to the ports where trust enters the network.",
          "keyIdeas": [
            "Port security limits learned source MAC addresses on access ports",
            "DHCP snooping restricts server messages and builds IP-MAC-port bindings",
            "DAI validates ARP on untrusted ports using bindings or authorized exceptions"
          ],
          "content": "Port security can use static, dynamic, or sticky secure MAC addresses and a configured maximum. Protect silently drops violating frames, restrict drops and records a violation, and shutdown error-disables the port by default. Use it on suitable access ports, not dynamic trunks, and understand phone-plus-PC designs before setting a maximum. MAC addresses can be spoofed, so port security is one layer rather than strong identity.\n\nDHCP snooping treats user ports as untrusted and permits server Offer or Acknowledge messages only from trusted paths. It builds bindings from observed leases and can rate-limit DHCP on untrusted ports. Trust only the path toward legitimate servers; marking user ports trusted defeats the control. The binding table can support other features.\n\nDynamic ARP Inspection checks ARP sender claims on untrusted ports against DHCP snooping bindings. Hosts with static addresses may require ARP ACLs or controlled bindings. Trust uplinks carefully and validate VLAN coverage.\n\nIP Source Guard can also use bindings to restrict source address use. Deploy in stages: inventory static devices, enable snooping for selected VLANs, mark trusted uplinks, verify bindings, then enable DAI and monitor drops. Wrong trust or missing bindings can cause a broad outage, so maintain console access and rollback. Port Security is a Layer 2 feature applied to access switch ports to restrict input to an interface by identifying and limiting the MAC addresses of the workstations that are allowed to access the port.\n\nWhen a violation occurs (e.g., a hub is connected and multiple MACs are learned, exceeding the maximum), the port responds based on its configured violation mode:\n\n- **Shutdown** (Default): The port is placed in an err-disabled state and sends an SNMP trap/syslog.\n\n- **Restrict**: Drops unauthorized frames, increments a counter, and sends a syslog/trap.\n\n- **Protect**: Drops unauthorized frames silently without logging. DHCP Snooping acts like a firewall between untrusted hosts and trusted DHCP servers. It defines ports as **Trusted** (allowed to send DHCP Offer/Ack messages, usually connecting to the legitimate server) or **Untrusted** (only allowed to send DHCP Discover/Request messages). It builds a DHCP Snooping Binding Database mapping MAC addresses to assigned IP addresses.\n\nDynamic ARP Inspection (DAI) relies on this binding database. When an ARP reply is received on an untrusted port, DAI intercepts it and checks if the sender's MAC and IP match an entry in the DHCP Snooping database. If they don't match, the ARP packet is dropped, preventing ARP spoofing/poisoning man-in-the-middle attacks.",
          "practical": "Trace a client from DHCP lease to snooping binding to later ARP validation. Explain what each feature knows and what it still cannot prove.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            },
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "Enable port security on the interface.",
              "code": "switchport port-security"
            },
            {
              "title": "IOS example",
              "description": "Allow a maximum of 2 MAC addresses.",
              "code": "switchport port-security maximum 2"
            },
            {
              "title": "IOS example",
              "description": "Set the violation mode to restrict.",
              "code": "switchport port-security violation restrict"
            },
            {
              "title": "IOS example",
              "description": "Enable DHCP snooping globally.",
              "code": "ip dhcp snooping"
            },
            {
              "title": "IOS example",
              "description": "Configure an interface as trusted.",
              "code": "ip dhcp snooping trust"
            },
            {
              "title": "IOS example",
              "description": "Enable DAI for VLAN 10.",
              "code": "ip arp inspection vlan 10"
            }
          ],
          "lab": {
            "goal": "Protect a user VLAN from a rogue DHCP server and ARP spoofing.",
            "environment": "A switch lab with client, legitimate server path, and simulated rogue host.",
            "steps": [
              "Enable DHCP snooping globally and for the user VLAN.",
              "Trust only the legitimate server uplink and set a client rate limit.",
              "Obtain a client lease and verify the binding.",
              "Attempt a rogue DHCP offer and observe the drop.",
              "Enable DAI for the VLAN and test legitimate and forged ARP.",
              "Document any static-host exception."
            ],
            "expected": "Legitimate address assignment and ARP work while rogue server and forged mappings are blocked.",
            "verification": "Use show ip dhcp snooping, show ip dhcp snooping binding, show ip arp inspection, and counters."
          },
          "examTips": [
            "Default violation mode is Shutdown.",
            "Protect mode does not log violations or increment counters.",
            "Restrict mode logs and increments counters.",
            "DHCP Snooping blocks rogue DHCP servers.",
            "DAI requires DHCP Snooping (or static ARP ACLs) to function."
          ],
          "practiceQuestions": []
        },
        {
          "title": "Wireless Security Protocols: 802.11, WPA, WPA2, and WPA3",
          "lead": "Securing WLANs with modern encryption and authentication standards.",
          "keyIdeas": [
            "WEP vs WPA",
            "TKIP vs AES-CCMP",
            "WPA3 SAE",
            "802.1X/EAP"
          ],
          "content": "Wireless networks transmit data through the air, making encryption mandatory.\n\n- **WEP**: Legacy, highly vulnerable, uses static RC4 keys.\n\n- **WPA**: Introduced TKIP to fix WEP's flaws, but is now deprecated.\n\n- **WPA2**: The longstanding standard. Uses AES-CCMP for strong encryption. Supports Personal (Pre-Shared Key) and Enterprise (802.1X/EAP with a RADIUS server) modes.\n\n- **WPA3**: The latest standard.\n\n- **WPA3-Personal**: Replaces PSK with Simultaneous Authentication of Equals (SAE), providing forward secrecy and protection against offline dictionary attacks. WPA3-Enterprise offers 192-bit cryptographic strength for highly sensitive networks. Wireless security includes authentication, encryption, management-frame protection where supported, segmentation, and lifecycle. WPA2 with AES-CCMP remains common; WPA3-Personal uses SAE, and enterprise modes use 802.1X/EAP with RADIUS. Avoid WEP and legacy TKIP. A pre-shared key is difficult to revoke for one person and should be strong and rotated when membership changes.\n\nEnterprise identity improves accountability but requires certificate and RADIUS design. Separate guests and untrusted devices, protect controller administration, detect rogue or evil-twin APs, and validate server certificates so clients do not give credentials to an impersonator.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Description",
                "Layer"
              ],
              "rows": [
                [
                  "Port Security",
                  "Restricts MACs",
                  "2"
                ],
                [
                  "ACL",
                  "Filters IP",
                  "3/4"
                ],
                [
                  "IPS",
                  "Deep Inspection",
                  "7"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "Configure a WLAN to use WPA2 with AES encryption (WLC CLI).",
              "code": "wlan wpa wpa2 aes"
            },
            {
              "title": "IOS example",
              "description": "Enable WPA2-Enterprise mode.",
              "code": "security wpa akm 802.1x"
            }
          ],
          "lab": {
            "goal": "Practice wireless security protocols: 802.11, wpa, wpa2, and wpa3 in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Configure a WLAN with WPA2-Personal and a strong PSK.",
              "Configure a second WLAN with WPA2-Enterprise, pointing to a RADIUS server.",
              "Capture wireless frames to observe the 4-way handshake."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "WPA2 uses AES-CCMP.",
            "WPA3 uses SAE instead of PSK.",
            "Enterprise mode always implies 802.1X/RADIUS authentication."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Site-to-site and remote-access VPN concepts",
          "lead": "VPNs protect traffic across an untrusted network, but identity, endpoint security, routes, and policy still determine trust.",
          "keyIdeas": [
            "Site-to-site VPNs connect networks; remote-access VPNs connect users or devices",
            "IPsec provides authentication, integrity, anti-replay, and encryption services",
            "A tunnel protects a path, not every endpoint or application"
          ],
          "content": "A site-to-site VPN commonly joins office or cloud networks through gateways. A remote-access VPN terminates individual user or device sessions. Both create a logical protected path over infrastructure the organization does not control. Interesting traffic, routes, authentication, and security policy determine what can use the tunnel.\n\nIPsec uses protocols and security associations to protect IP traffic. IKE negotiates peers and keying; ESP commonly provides confidentiality, integrity, origin authentication, and anti-replay. Tunnel mode protects the original IP packet inside a new packet and is common between gateways. Exact configuration is beyond the CCNA objective, but the services and use cases matter.\n\nFull tunneling sends client traffic through organizational controls; split tunneling sends selected traffic through the VPN and other traffic directly. Split tunneling can save bandwidth but introduces another path. VPN access should use strong authentication, least privilege, device posture where appropriate, logging, and rapid revocation.\n\nA successful tunnel state does not prove applications are reachable. Operators still verify routing, NAT exemptions where required, ACL or firewall policy, DNS, maximum transmission unit, and return path.",
          "practical": "Compare a branch site-to-site VPN and an employee remote-access VPN by peer identity, protected networks, routes, authentication, logging, and likely troubleshooting evidence.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        }
      ]
    },
    {
      "title": "Domain 6: Automation and Programmability",
      "weight": "10% of exam",
      "intro": "Move from device-by-device CLI toward controllers, APIs, data models, configuration tools, cloud management, and carefully supervised AI-assisted operations.",
      "topics": [
        {
          "title": "Automation Impact on Network Management",
          "lead": "Automation turns repeated device changes into versioned, testable workflows that can be applied consistently at scale.",
          "keyIdeas": [
            "Box-by-box management is inefficient, error-prone, and scales poorly.",
            "Automation introduces Infrastructure as Code (IaC) principles to networking.",
            "Idempotence ensures that applying a configuration repeatedly yields the same result without unintended side effects.",
            "Closed-loop automation allows for self-healing and proactive network monitoring.",
            "Network engineers must evolve into Network Reliability Engineers (NREs) by learning Python, JSON, YAML, and Git."
          ],
          "content": "Network automation replaces repeated manual changes with versioned, testable workflows. It improves consistency and scale, but it does not remove the need to understand routing, switching, security, and failure behavior. A script can reproduce a mistake across hundreds of devices as easily as it can deploy a correct configuration.\n\nHistorically, network engineers have relied heavily on the Command Line Interface (CLI) to configure devices. This approach, often referred to as \"box-by-box\" management, entails opening a terminal emulator (like PuTTY or SecureCRT), establishing an SSH or Telnet connection to a router or switch, and sequentially entering configuration commands. While this method offers granular control over individual devices, it is fraught with critical shortcomings when applied to large-scale, dynamic environments.\n\n## Limits of manual configuration\n\nA common weakness of traditional network management is human error. A single mistyped command, such as a misplaced access control list (ACL) entry or an incorrect routing protocol metric, can precipitate catastrophic network outages. Troubleshooting these configuration errors often requires hours of careful log analysis and configuration comparisons. Furthermore, the lack of standardization across device configurations (often a byproduct of different engineers applying their unique stylistic preferences over time) leaves a mixed set of configurations whose behavior is difficult to predict.\n\n## Scale and repeatability\n\nAs enterprise networks expand to encompass hundreds or thousands of devices, spanning on-premises data centers, branch offices, and multi-cloud environments, the box-by-box approach becomes difficult to manage. Provisioning a new service, such as deploying a new VLAN or updating Quality of Service (QoS) policies across the entire infrastructure, can become a multi-week project involving extensive maintenance windows and change control board approvals. This operational bottleneck slows service delivery, delaying the deployment of critical applications and services.\n\n## Configuration drift and security\n\nIn a manually managed network, ensuring that all devices adhere to a unified golden configuration baseline is nearly impossible. Over time, ad-hoc changes made during late-night troubleshooting sessions or emergency workarounds accumulate, resulting in configuration drift. This drift not only complicates troubleshooting efforts but also introduces severe security vulnerabilities. If a critical security patch or an updated ACL needs to be deployed rapidly to mitigate a newly discovered threat, the manual process is simply too slow to provide an effective response, leaving the organization exposed to potential breaches.\n\n## What network automation changes\n\nNetwork automation directly addresses these inherent limitations by introducing software engineering principles into network operations. By using programmatic interfaces, configuration management tools, and centralized controllers, automation enables engineers to treat Infrastructure as Code (IaC). This shift provides several practical benefits that reshape how networks are designed, deployed, and maintained.\n\n## Consistency and idempotence\n\nAutomation enforces a rigorous standard of consistency across the network infrastructure. By abstracting the configuration state into declarative templates or structured data models (such as YAML or JSON), engineers can ensure that identical configurations are applied to identical devices without variation. Furthermore, advanced automation tools employ the concept of idempotence. An idempotent operation is one that produces the same outcome regardless of how many times it is executed.\n\nIn the context of networking, this means an automation script will assess the current state of a device and only apply the necessary changes to bring it into alignment with the desired state. If the device is already in the correct state, the script performs no action, entirely eliminating the risk of unintended modifications.\n\n## Faster provisioning\n\nBy replacing manual keystrokes with automated workflows, the time required to provision new services or deploy infrastructure updates is drastically reduced. What previously took weeks of planning and execution can now be accomplished in minutes. This acceleration allows the IT department to align closely with the rapid pace of modern software development, enabling Continuous Integration and Continuous Deployment (CI/CD) pipelines to without interruption integrate network provisioning into their automated workflows.\n\nThe network is no longer a bottleneck but a dynamic, responsive asset that actively facilitates business objectives.\n\n## Monitoring and closed-loop automation\n\nAutomation extends beyond configuration management; it encompasses the continuous monitoring and optimization of network performance. Modern network automation platforms ingest vast amounts of telemetry data (e.g., flow data, SNMP traps, syslog messages) in real-time. By applying advanced analytics and machine learning algorithms to this data, these platforms can proactively identify anomalies, predict potential failures, and even execute automated remediation scripts before an outage occurs.\n\nThis concept, known as closed-loop automation, is an advanced form of network management, where the network inherently self-heals and optimizes its performance based on predefined policies.\n\n## Security and compliance\n\nAutomation provides a powerful mechanism for enforcing security policies and maintaining regulatory compliance. Security configurations, such as firewall rules, intrusion prevention system (IPS) signatures, and access control lists, can be deployed consistently and rapidly across the entire infrastructure. Furthermore, automation tools can continuously audit device configurations against established security baselines, instantly detecting and remediating any deviations (configuration drift). In the event of a security breach, automated incident response playbooks can rapidly isolate compromised hosts, update firewall rules to block malicious traffic, and gather forensic data, significantly reducing the Mean Time to Respond (MTTR).\n\n## Skills for network engineers\n\nThe transition towards network automation necessitates a corresponding evolution in the skill set of network engineers. While an understanding of core networking protocols (e.g., OSPF, BGP, STP) remains necessary, engineers must now complement this knowledge with software development skills. Proficiency in programming languages like Python, familiarity with data encoding formats (JSON, XML, YAML), and expertise in using configuration management tools (Ansible, Puppet, Chef) and version control systems (Git) are rapidly becoming mandatory requirements.\n\nThe modern network engineer is effectively transforming into a Network Reliability Engineer (NRE), applying software engineering practices to ensure the reliability, scalability, and security of the network infrastructure.\n\nAutomation substantially changes network management. It represents a fundamental departure from the manual, error-prone practices of the past, ushering in a new era of agility, consistency, and intelligent operations. As enterprise networks continue to grow in complexity and scale, embracing network automation is no longer a strategic advantage; it is an important operational capability. The CCNA 200-301 exam accurately reflects this change in approach, placing a significant emphasis on the concepts, tools, and protocols that underpin modern network automation and programmability.",
          "tables": [
            {
              "headers": [
                "Characteristic",
                "Traditional Management",
                "Automated Management"
              ],
              "rows": [
                [
                  "Methodology",
                  "Box-by-box, manual CLI entry",
                  "Centralized, programmatic API driven"
                ],
                [
                  "Scalability",
                  "Low - operations grow linearly with devices",
                  "High - operations scale dynamically"
                ],
                [
                  "Consistency",
                  "Prone to configuration drift and human error",
                  "Enforced via templates (Golden Image)"
                ],
                [
                  "Provisioning Time",
                  "Days to weeks",
                  "Minutes to hours"
                ],
                [
                  "Skillset",
                  "Vendor CLI, protocols (OSPF, BGP)",
                  "Python, REST APIs, JSON/YAML, Git"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "Used in traditional networking to manually compare configuration drift before automation platforms took over this role.",
              "code": "show archive config differences"
            }
          ],
          "lab": {
            "goal": "Practice automation impact on network management in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Lab Exercise: Identifying Configuration Drift",
              "Log into your core switch and perform a 'show run'.",
              "Save the configuration to a text file.",
              "Have a colleague make a minor, undocumented change to an ACL.",
              "Attempt to find the change manually using CLI commands.",
              "Reflect on how much time this took and how an automated tool like Ansible or Cisco DNA Center could highlight this drift instantly."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Remember that the primary drivers for network automation are speed, consistency, and the reduction of human error.",
            "Understand the concept of 'idempotence' - it means running a script multiple times will only make changes if the device is not already in the desired state.",
            "Expect scenario questions asking why a company should migrate from manual CLI to automated solutions."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Traditional vs Controller-based Networking",
          "lead": "Explore the fundamental shift from distributed control planes to centralized, software-defined architectures.",
          "keyIdeas": [
            "Traditional networks feature distributed control planes where every device makes independent routing decisions.",
            "The Data Plane (Forwarding Plane) is responsible for physically moving packets, often using hardware ASICs.",
            "The Control Plane is the 'brain' responsible for running routing protocols (OSPF, BGP) and building the routing table.",
            "SDN decouples the control plane from the data plane, centralizing intelligence in the SDN Controller.",
            "SDN uses Northbound APIs to communicate with applications and Southbound APIs to program the network hardware."
          ],
          "content": "Traditional networks distribute control across individual devices. Each router runs routing protocols, each switch participates in Layer 2 control protocols, and every device builds the forwarding state it needs. Engineers configure and inspect those devices through a management plane, usually with CLI, SNMP, NETCONF, RESTCONF, or a platform interface.\n\n## Three planes\n\nThe data plane forwards frames and packets. The control plane learns topology and decides which forwarding entries should exist. The management plane lets people and software configure devices, collect state, and review events. These planes are logical responsibilities, even when one appliance performs all three.\n\nDistributed control has useful failure properties. A router can continue making decisions if a central management platform is unavailable. It also creates operational work because policy must be expressed consistently across many devices and because each device has only part of the network's state.\n\n## Controller-based design\n\nA controller-based architecture centralizes some control and management functions. Applications express policy through northbound interfaces. The controller translates that policy into device-specific state through southbound interfaces. Southbound communication may use NETCONF, RESTCONF, OpenFlow, vendor APIs, or automated CLI depending on the platform.\n\nCentralized does not necessarily mean one physical server. Controllers are normally deployed with redundancy, distributed components, and recovery procedures. Devices may retain local forwarding and some local control so traffic continues during a controller outage.\n\n## Comparing the models\n\nController-based designs provide a broader view of topology, identity, telemetry, and policy. They can apply a change consistently, validate intent, and coordinate overlays or segmentation. The tradeoffs include controller availability, platform permissions, software defects, integration complexity, and the size of the failure domain when an incorrect policy is deployed widely.\n\nThe useful exam distinction is responsibility. In a traditional design, a device's control plane directly builds much of its forwarding state. In a controller-based design, a controller or policy system calculates or coordinates more of that state and programs the infrastructure. Engineers still verify the resulting device behavior, packet path, and failure handling.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Traditional Networking",
                "Controller-Based (SDN) Networking"
              ],
              "rows": [
                [
                  "Control Plane",
                  "Distributed (runs on every device)",
                  "Centralized (runs on the controller)"
                ],
                [
                  "Network View",
                  "Localized / Myopic",
                  "Global / Holistic"
                ],
                [
                  "Device Role",
                  "Autonomous routing & forwarding",
                  "Primarily just forwarding (Data Plane)"
                ],
                [
                  "Configuration Method",
                  "CLI, Box-by-Box",
                  "APIs, Centralized GUI/Templates"
                ],
                [
                  "Traffic Engineering",
                  "Complex, limited by hop-by-hop protocols",
                  "Dynamic, end-to-end optimization"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "Displays the routing table, which is the output of the traditional distributed control plane.",
              "code": "show ip route"
            },
            {
              "title": "IOS example",
              "description": "Displays the Cisco Express Forwarding table, representing the Data Plane's highly optimized forwarding information.",
              "code": "show ip cef"
            }
          ],
          "lab": {
            "goal": "Practice traditional vs controller-based networking in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Lab Exercise: Visualizing the Planes",
              "On a Cisco router, type 'debug ip ospf hello' and watch the terminal. This traffic is generated and consumed by the router's CPU: it is Control Plane traffic.",
              "Now, ping through the router from one PC to another. The router forwards these ICMP packets using hardware ASICs without CPU intervention: this is Data Plane traffic.",
              "Finally, SSH into the router. This administrative connection represents the Management Plane."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Memorize the functions of the three planes: Management (access), Control (routing protocols), and Data (forwarding packets).",
            "Understand that in a pure SDN environment, the control plane is physically removed from the switches and routers.",
            "Northbound APIs connect the controller to upper-level applications, while Southbound APIs connect the controller to the network hardware."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Controller-Based Architectures: Underlay, Overlay, and Fabric",
          "lead": "Understand how modern networks abstract physical infrastructure to create flexible, highly scalable virtual topologies.",
          "keyIdeas": [
            "The Underlay is the physical, routed infrastructure providing basic IP reachability between network devices.",
            "The Overlay is a logical, virtual network built on top of the underlay using encapsulation protocols like VXLAN.",
            "A Fabric is the combination of the underlay, overlay, and the SDN controller that manages them as a single system.",
            "The underlay typically uses a loop-free Layer 3 spine-and-leaf topology, eliminating Spanning Tree Protocol.",
            "Overlays enable endpoint mobility and strict logical segmentation without requiring stretched VLANs."
          ],
          "content": "Controller-based networks often separate physical reachability from logical policy. The underlay moves packets among network devices. The overlay creates logical connections across that foundation. A fabric combines the two with shared control, identity, segmentation, and automation.\n\n## Underlay\n\nThe underlay is the physical network of links, interfaces, and routed paths. It needs stable addressing, sufficient capacity, fast convergence, and redundant reachability. Modern campus and data-center underlays commonly prefer Layer 3 links and equal-cost paths because routed links contain Layer 2 failure domains and allow more links to forward at once.\n\nThe underlay should be simple enough to troubleshoot without depending entirely on the controller. Engineers still verify optics, interfaces, neighbors, routing adjacencies, MTU, latency, and loss. If the underlay cannot carry a packet between tunnel endpoints, the overlay cannot repair it.\n\n## Overlay\n\nThe overlay builds logical connectivity across the underlay. Tunnel endpoints encapsulate an original frame or packet, carry it through the physical network, and remove the outer header at the destination. VXLAN is a common overlay encapsulation. It can carry Layer 2 segments across a Layer 3 network and uses a larger identifier space than ordinary VLANs.\n\nOverlay policy can group users or workloads by identity and role instead of physical switch port. Multiple virtual networks can share the same hardware while remaining logically separated. This supports mobility and segmentation, but it also adds tunnel state, endpoint mapping, policy distribution, and new troubleshooting boundaries.\n\n## Fabric\n\nA fabric is the coordinated system of underlay, overlay, edge nodes, border nodes, control functions, and policy. Edge nodes attach endpoints and apply local policy. Control components track endpoint location and reachability. Border nodes connect the fabric to outside networks. A management platform automates deployment and turns higher-level intent into device configuration.\n\nTroubleshooting should preserve the separation. First prove underlay reachability between the relevant nodes. Then inspect tunnel state and endpoint location. Finally check virtual-network membership, identity, and policy. Mixing all three layers at once makes a simple physical failure look like a policy problem and makes a policy denial look like a routing failure.",
          "tables": [
            {
              "headers": [
                "Attribute",
                "Underlay Network",
                "Overlay Network"
              ],
              "rows": [
                [
                  "Nature",
                  "Physical infrastructure (switches, cables)",
                  "Logical/Virtual topology"
                ],
                [
                  "Forwarding Method",
                  "Traditional IP Routing (OSPF, IS-IS)",
                  "Tunneling / Encapsulation (VXLAN, CAPWAP)"
                ],
                [
                  "Knowledge of Endpoints",
                  "None. Only knows switch loopback IPs.",
                  "Full knowledge of endpoint MAC/IPs."
                ],
                [
                  "Purpose",
                  "Provide reliable transport between network nodes",
                  "Provide services, mobility, and segmentation to users"
                ],
                [
                  "Topology",
                  "Typically Spine-and-Leaf",
                  "Flexible, abstracted from physical layout"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "Used to verify the underlay routing table in a Cisco SD-Access environment.",
              "code": "show ip route isis"
            },
            {
              "title": "IOS example",
              "description": "Shows the configuration of the Network Virtualization Endpoint, the interface responsible for VXLAN encapsulation in the overlay.",
              "code": "show run interface nve1"
            }
          ],
          "lab": {
            "goal": "Practice controller-based architectures: underlay, overlay, and fabric in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Lab Exercise: Conceptualizing the Tunnel",
              "Imagine a VPN. A VPN is a type of overlay. When you connect a VPN from home to your office, your home router (underlay) routes the encrypted IPsec packet, completely unaware of the corporate data inside.",
              "In a fabric, VXLAN acts like this VPN, but between switches. The core switches only see the outer VXLAN IP headers and route them, ignoring the inner payload."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "If a question asks about the physical cables and routing protocol used to connect switches in an SDN environment, the answer is the Underlay.",
            "If a question asks about how mobility, segmentation, or tunneling (VXLAN/CAPWAP) is achieved, the answer is the Overlay.",
            "Remember that modern underlays heavily favor Layer 3 routed access to eliminate STP and use ECMP."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Cisco DNA Center Architecture and APIs",
          "lead": "Master the core components of Cisco's Intent-Based Networking controller and how it interfaces with devices and applications.",
          "keyIdeas": [
            "DNA Center is an Intent-Based Networking (IBN) controller that translates business intent into network configurations.",
            "Southbound APIs (CLI, NETCONF, SNMP) are used by the controller to communicate down to physical network devices.",
            "Northbound APIs (REST) are exposed by the controller to allow external applications (like ServiceNow) to interact with it.",
            "DNA Center provides a centralized GUI organized into four pillars: Design, Policy, Provision, and Assurance.",
            "Assurance uses telemetry and machine learning to proactively monitor network health and troubleshoot issues."
          ],
          "content": "Cisco DNA Center is a controller and management platform used to design, provision, apply policy, and monitor enterprise networks. The CCNA focus is the role of the platform and the direction of its interfaces, not memorizing every screen.\n\n## Design and provisioning\n\nDesign functions describe sites, buildings, floors, network settings, credentials, address pools, and images. Provisioning assigns devices to sites and applies the required configuration. Templates and repeatable workflows reduce variation, but they should be reviewed, tested, and staged because an incorrect template can affect many devices.\n\n## Policy and assurance\n\nPolicy expresses intended access and segmentation. In software-defined access designs, virtual networks and scalable group information help separate traffic according to role. Assurance collects telemetry and correlates device, client, application, and path information. It helps an engineer narrow a complaint, but its conclusion should be confirmed with device state and packet-path evidence.\n\n## Northbound and southbound interfaces\n\nNorthbound APIs expose platform data and workflows to applications, scripts, and service-management tools. A script might retrieve device health, create a task, or connect an alert to a ticketing system. Southbound mechanisms communicate with network devices. Depending on capability, those mechanisms may include NETCONF, RESTCONF, SNMP, telemetry, or automated CLI.\n\nAPI access needs the same care as administrative access. Use named identities, narrow permissions, protected tokens, approved source systems, logging, and tested rollback. Check asynchronous task status rather than assuming that an accepted request completed successfully. A controller can simplify consistent operations, but it also becomes a sensitive concentration of authority and information.",
          "tables": [
            {
              "headers": [
                "API Direction",
                "Communication Path",
                "Typical Protocols",
                "Primary Use Case"
              ],
              "rows": [
                [
                  "Northbound",
                  "DNA Center <--> External Apps",
                  "REST, HTTP/HTTPS",
                  "Integration with ITSM, custom Python automation scripts"
                ],
                [
                  "Southbound",
                  "DNA Center <--> Network Devices",
                  "NETCONF, RESTCONF, SSH/CLI, SNMP",
                  "Pushing configurations and pulling telemetry from switches"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "A standard REST API call (using curl) directed at DNA Center's Northbound API to authenticate and receive an access token.",
              "code": "curl -X POST https://<dnac-ip>/dna/system/api/v1/auth/token"
            }
          ],
          "lab": {
            "goal": "Practice cisco dna center architecture and apis in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Lab Exercise: Interacting with DNA Center Northbound APIs",
              "Cisco DevNet provides a free, always-on DNA Center sandbox. Navigate to developer.cisco.com.",
              "Use an API tool like Postman.",
              "Make a POST request to the authentication endpoint using the DevNet credentials to obtain an API token.",
              "Make a GET request to `/dna/intent/api/v1/network-device` and include the token in your headers.",
              "Observe the JSON response containing the inventory of all physical devices managed by that controller."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Expect direct questions on the difference between Northbound and Southbound APIs. North = Applications/Code. South = Hardware.",
            "Remember the four workflow pillars of DNA Center: Design, Policy, Provision, Assurance.",
            "If a scenario mentions opening a ServiceNow ticket automatically based on a network event, it is describing a Northbound API integration."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Understanding REST APIs in Networking",
          "lead": "Learn how HTTP methods and URIs are used to programmatically interact with network controllers and devices.",
          "keyIdeas": [
            "REST APIs operate over HTTP/HTTPS, treating network configurations and operational data as 'resources'.",
            "A standard API request requires a URI (the address), an HTTP Verb (the action), Headers (metadata), and optionally a Payload (data).",
            "HTTP verbs map directly to CRUD operations: POST (Create), GET (Read), PUT/PATCH (Update), DELETE (Delete).",
            "HTTP Status codes indicate success (2xx), client errors (4xx), or server errors (5xx).",
            "APIs allow for structured, programmatic configuration, eliminating the fragility of screen-scraping traditional CLI outputs."
          ],
          "content": "A REST API lets software work with resources through HTTP. A resource might represent a device, interface, site, policy, or task. The API documentation defines the URI, supported methods, required headers, data schema, authentication method, and response codes.\n\n## Request structure\n\nA request contains a method, URI, headers, and sometimes a body. GET retrieves a representation. POST commonly creates a resource or starts an operation. PUT replaces a resource at a known URI. PATCH changes selected fields. DELETE requests removal. Exact behavior is defined by the API, so do not assume that every platform uses the methods identically.\n\nHeaders describe the request. Authorization carries a credential or token. Accept states which response format the client can process. Content-Type describes the body being sent, commonly application/json. The body must be valid according to both JSON syntax and the API's schema.\n\n## Responses and status codes\n\nThe response contains a status code, headers, and often a body. Codes in the 200 range indicate successful handling. A 201 response commonly means a resource was created. A 202 response means the request was accepted for later processing, so the client must check task status. Codes in the 400 range describe client-side problems such as invalid input, missing authentication, denied access, or an unknown resource. Codes in the 500 range indicate that the server failed while handling the request.\n\n## Safe automation workflow\n\nRead the API documentation and retrieve the current state before changing anything. Validate the target list, build one request, and test it in a lab or limited scope. Record the request and response without exposing secrets. Confirm the returned task result and retrieve the resource again to verify the final state. Define rollback before applying the same change widely.\n\nIdempotence matters. Repeating an idempotent request produces the same intended state rather than creating additional objects or changes. GET, PUT, and DELETE are designed to be idempotent in HTTP semantics, although a particular API can still have side effects. POST is not generally idempotent unless the API provides an idempotency mechanism.\n\nREST does not remove networking knowledge. A successful API response can still install the wrong prefix, VLAN, permission, or interface state. Engineers must understand the model, validate the payload, and confirm what the network actually did.",
          "tables": [
            {
              "headers": [
                "CRUD Operation",
                "HTTP Verb",
                "Description",
                "Networking Example"
              ],
              "rows": [
                [
                  "Create",
                  "POST",
                  "Creates a new resource on the server.",
                  "Creating a new VLAN (e.g., VLAN 20) on a switch."
                ],
                [
                  "Read",
                  "GET",
                  "Retrieves information without modifying the state.",
                  "Retrieving the current routing table or interface status."
                ],
                [
                  "Update",
                  "PUT",
                  "Completely replaces an existing resource.",
                  "Replacing an entire interface configuration."
                ],
                [
                  "Update",
                  "PATCH",
                  "Partially modifies an existing resource.",
                  "Changing only the description of an interface, leaving the IP intact."
                ],
                [
                  "Delete",
                  "DELETE",
                  "Removes a resource from the server.",
                  "Removing a specific static route from the configuration."
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "A basic Python snippet using the requests library to send an HTTP GET request to a router via RESTCONF.",
              "code": "import requests\nresponse = requests.get('https://10.10.20.1/restconf/data/ietf-interfaces:interfaces', auth=('cisco', 'cisco'), verify=False)"
            }
          ],
          "lab": {
            "goal": "Practice understanding rest apis in networking in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Lab Exercise: Using Postman to Make REST API Calls",
              "Download and install Postman (a free API client).",
              "Set the HTTP Method drop-down to 'GET'.",
              "Enter the URI for a public API, such as 'https://api.github.com/users/cisco'.",
              "Click 'Send'.",
              "Observe the Response area at the bottom. Note the Status Code (200 OK) and examine the JSON payload returned, which contains data about the Cisco GitHub account."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Memorize the CRUD to HTTP Verb mapping perfectly: Create=POST, Read=GET, Update=PUT/PATCH, Delete=DELETE.",
            "Know the difference between PUT and PATCH. PUT replaces the entire resource; PATCH only updates the specified attributes.",
            "Remember that 4xx status codes mean the client (your script) did something wrong, while 5xx codes mean the server (the router/controller) had a problem."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Configuration Management Mechanisms: Puppet, Chef, Ansible",
          "lead": "Differentiate between the three major configuration management tools used to enforce Infrastructure as Code.",
          "keyIdeas": [
            "Configuration management tools enable Infrastructure as Code (IaC) and ensure idempotent configuration deployments.",
            "Puppet uses an agent-based, pull model, and its configuration files are called Manifests (written in Puppet DSL).",
            "Chef uses an agent-based, pull model, and its configuration files are called Recipes/Cookbooks (written in Ruby).",
            "Ansible is agentless, uses a push model via SSH/NETCONF, and its configuration files are called Playbooks (written in YAML).",
            "Ansible is widely favored in networking because it does not require agents to be installed on legacy network hardware."
          ],
          "content": "Configuration-management tools describe desired state and apply it repeatedly across many systems. They reduce manual variation, support review through version control, and help identify configuration drift. They do not decide what the correct network design should be.\n\n## Infrastructure as code and idempotence\n\nInfrastructure as code stores configuration intent in text files that can be reviewed, tested, versioned, and reproduced. Idempotence means a tool can run again without making unnecessary changes once the target already matches the desired state. A useful workflow separates data from templates, validates input, previews changes, limits scope, and records the result.\n\n## Agent-based and agentless models\n\nPuppet and Chef are commonly associated with agent-based operation. A client on the managed node communicates with a central service and applies policy. This model is common on servers but may be unsuitable for network devices that cannot run third-party agents.\n\nAnsible is commonly agentless. A control node connects through existing management protocols such as SSH, NETCONF, or an API. An inventory identifies targets, variables supply device-specific data, and a playbook organizes tasks. Agentless does not mean unauthenticated or risk-free. The control node still needs protected credentials, limited permissions, logging, and a safe way to recover from a bad change.\n\n## Puppet, Chef, and Ansible terminology\n\nPuppet uses manifests written in its declarative language. Chef uses recipes, often grouped into cookbooks, and is closely associated with Ruby. Ansible uses YAML playbooks that contain plays and tasks applied to inventory groups. The CCNA expects recognition of these broad differences, especially agent-based versus agentless, pull versus push, and the names of their configuration files.\n\n## Operational safeguards\n\nKeep automation source in version control and require review for important changes. Test syntax and data before connecting to devices. Use check or preview modes when they accurately represent the platform. Start with one lab device, then a small production group, and stop when validation fails. Protect secrets outside the repository. After deployment, compare actual device state with the intended result and preserve enough logs to explain what changed.\n\nAutomation makes a correct process repeatable. It also makes an incorrect process repeatable. The network model, failure boundaries, approval process, and verification plan remain the engineer's responsibility.",
          "tables": [
            {
              "headers": [
                "Feature",
                "Ansible",
                "Puppet",
                "Chef"
              ],
              "rows": [
                [
                  "Architecture",
                  "Agentless",
                  "Agent-based (typically)",
                  "Agent-based"
                ],
                [
                  "Communication Model",
                  "Push (Control node pushes config)",
                  "Pull (Agent pulls config from Master)",
                  "Pull (Client pulls from Server)"
                ],
                [
                  "Configuration Language",
                  "YAML",
                  "Puppet DSL (Ruby-like)",
                  "Ruby"
                ],
                [
                  "File Terminology",
                  "Playbooks",
                  "Manifests",
                  "Recipes & Cookbooks"
                ],
                [
                  "Transport Protocol",
                  "SSH / NETCONF",
                  "HTTPS (REST API)",
                  "HTTPS (REST API)"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "The command used on an Ansible control node to execute a YAML playbook against a specific list of hosts defined in the inventory file.",
              "code": "ansible-playbook configure_vlans.yml -i inventory.txt"
            }
          ],
          "lab": {
            "goal": "Practice configuration management mechanisms: puppet, chef, ansible in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Lab Exercise: Writing a Basic Ansible Playbook (Conceptual)",
              "Create a text file named 'deploy_snmp.yml'.",
              "Begin the file with '---' to indicate a YAML document.",
              "Define the hosts: `hosts: routers`",
              "Define the task using the Cisco IOS module:",
              "`tasks:`",
              "`- name: Configure SNMP Community`",
              "`cisco.ios.ios_config:`",
              "`lines:`",
              "`- snmp-server community CISCO_RO read`",
              "This single playbook can now be pushed to 100 routers simultaneously."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "Create a mental matching table: Ansible = Agentless/Push/Playbooks/YAML. Puppet = Agent/Pull/Manifests. Chef = Agent/Pull/Recipes/Ruby.",
            "Remember that Ansible connects to devices the same way a human does (SSH), which is why it is 'agentless'.",
            "Understand that the primary goal of all these tools is to prevent configuration drift through idempotence."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Data Encoding Formats: JSON, XML, and YAML",
          "lead": "Understand the syntax and use cases of the three primary data serialization languages used in network automation.",
          "keyIdeas": [
            "Data encoding formats allow disparate systems to exchange structured, machine-readable data.",
            "XML uses a verbose system of opening and closing tags enclosed in angle brackets (<tag>data</tag>).",
            "JSON uses key-value pairs enclosed in curly braces {} and arrays in square brackets []. It is the standard for REST APIs.",
            "YAML relies strictly on indentation (spaces) to define structure, making it highly human-readable and ideal for Ansible.",
            "A fundamental skill for modern networking is the ability to visually translate data between these three formats."
          ],
          "content": "Structured data lets software exchange values without scraping the columns of a show command. A parser can distinguish a string, number, Boolean, list, object, or null and act on a known field. The schema and API documentation give those fields meaning. JSON represents objects with braces and key-value pairs, arrays with brackets, strings in double quotes, and lowercase true, false, and null.\n\nCommas separate members but do not follow the last member.\n\nJSON is common in REST APIs and maps naturally to dictionaries and lists in programming languages. Whitespace is mostly for readability. XML uses opening and closing tags, attributes, namespaces, and a document hierarchy. It is more verbose but has mature schema and transformation systems. NETCONF commonly carries XML-encoded data modeled by YANG. XML and JSON are encodings; YANG is a data-modeling language.\n\nYAML emphasizes human-written configuration with indentation, key-value pairs, and hyphenated list items.\n\nSpaces, not tabs, should define indentation. Ansible playbooks commonly use YAML. YAML can represent complex types, so quoting and tool validation still matter. When reading an example, identify the outer object, nested objects, arrays, keys, and value types before interpreting the networking meaning. Never edit structured production data without validation: a syntactically valid payload can still request the wrong interface, prefix, or administrative state.",
          "tables": [
            {
              "headers": [
                "Format",
                "Syntax Markers",
                "Verbosity",
                "Primary Use Case"
              ],
              "rows": [
                [
                  "XML",
                  "Angle brackets < >, closing tags",
                  "High (Very verbose)",
                  "Legacy APIs, NETCONF"
                ],
                [
                  "JSON",
                  "Curly braces { }, square brackets [ ], double quotes",
                  "Medium",
                  "REST APIs (DNA Center, Meraki, Webex)"
                ],
                [
                  "YAML",
                  "Indentation (spaces), hyphens for lists",
                  "Low (Very clean)",
                  "Configuration Management (Ansible Playbooks)"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "A handy CLI command to format and validate a JSON file, making it easier to read on a terminal screen (pretty-printing).",
              "code": "python3 -m json.tool data.json"
            }
          ],
          "lab": {
            "goal": "Practice data encoding formats: json, xml, and yaml in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Lab Exercise: Translating Formats",
              "Write down a physical description of your router using YAML. Include hostname, IP address, and a list of interfaces.",
              "Without using an online converter, translate that YAML data structure into JSON, ensuring you use the correct curly braces, brackets, and double quotes.",
              "Finally, translate the JSON into XML, creating an opening and closing tag for every single key."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "If you see < > tags, it's XML. If you see { } and lots of double quotes, it's JSON. If you see just words and indentation, it's YAML.",
            "Remember that YAML uses hyphens `-` to denote items in a list (an array).",
            "JSON requires strings to be in double quotes. Single quotes will cause a parsing error in strict JSON."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "Network Programmability and Python Scripting",
          "lead": "Explore the role of Python and its key libraries in orchestrating network automation and API interactions.",
          "keyIdeas": [
            "Python is the dominant programming language for network automation due to its readability and extensive library ecosystem.",
            "The 'Netmiko' library is used for establishing SSH connections and sending CLI commands to legacy devices.",
            "The 'NAPALM' library provides a vendor-neutral abstraction layer for interacting with devices from Cisco, Juniper, Arista, etc.",
            "The 'requests' library is the standard tool for making HTTP REST API calls (GET, POST, etc.) within Python.",
            "Python scripts allow for the programmatic parsing of JSON data, replacing the fragile process of screen-scraping CLI output."
          ],
          "content": "Python is widely used to call APIs, transform structured data, generate configuration, and check many devices consistently. CCNA does not require advanced software engineering, but a network operator should understand variables, lists, dictionaries, conditions, loops, functions, modules, and basic error handling. The requests library can send HTTP methods to a REST API. A script constructs a URL, supplies authentication and content headers, sets a timeout, sends the request, checks the status code, and parses JSON only when the response actually contains it.\n\nProduction code validates TLS certificates; verify=False is a lab shortcut that should not become a normal design. Tokens and passwords belong in protected secret storage rather than source code. A loop can query many devices, but scale multiplies mistakes. Validate each target, limit concurrency, handle timeout and partial failure, log without exposing secrets, and provide a dry-run for changes. Store source data and produce a separate result so the operation remains auditable.\n\nIdempotent logic compares actual and desired state and changes only what differs. Libraries such as Netmiko help interact with CLI-oriented devices over SSH, while NAPALM provides a more consistent abstraction for selected multivendor operations. Modern model-driven APIs are preferable when they expose the required capability because structured results are easier to validate than screen text. A safe workflow retrieves state first, validates assumptions, proposes a small change, tests in a lab, reviews the exact diff, applies to a limited population, verifies, and expands gradually.\n\nAutomation removes repetition; it does not remove change control or engineering responsibility.",
          "tables": [
            {
              "headers": [
                "Python Library",
                "Primary Function",
                "Typical Target Device"
              ],
              "rows": [
                [
                  "Netmiko",
                  "SSH connection management and CLI command execution",
                  "Legacy switches/routers without APIs"
                ],
                [
                  "NAPALM",
                  "Vendor-neutral configuration and data retrieval",
                  "Multivendor environments"
                ],
                [
                  "Requests",
                  "Executing HTTP REST API calls",
                  "SDN Controllers (DNA Center) and modern API-enabled devices"
                ],
                [
                  "JSON",
                  "Parsing JSON strings into Python dictionaries",
                  "Any device returning JSON payloads"
                ]
              ]
            }
          ],
          "commands": [
            {
              "title": "IOS example",
              "description": "The standard bash command used to install these essential networking libraries into a Python environment using the pip package manager.",
              "code": "pip install netmiko requests napalm"
            }
          ],
          "lab": {
            "goal": "Practice network programmability and python scripting in a controlled topology.",
            "environment": "Cisco Packet Tracer, CML, GNS3, or authorized physical Cisco equipment.",
            "steps": [
              "Lab Exercise: Reading a JSON Response in Python",
              "In a Python interpreter, import the json library.",
              "Create a JSON string variable: `json_data = '{\"interface\": \"Gig1\", \"status\": \"up\"}'`",
              "Parse it into a Python dictionary: `py_dict = json.loads(json_data)`",
              "Access the specific data point by its key: `print(py_dict['status'])`",
              "This demonstrates how Python can easily extract actionable data from an API response without complex regular expressions."
            ],
            "expected": "The configuration behaves as described and no unrelated path is changed.",
            "verification": "Use relevant show commands, end-to-end tests, and the running configuration to prove the result."
          },
          "examTips": [
            "If a question asks about connecting to legacy devices via SSH in a Python script, look for Netmiko as the answer.",
            "If a question asks about making REST API calls from Python, the answer is the 'requests' library.",
            "Remember that Python uses indentation to define code blocks (loops, if statements), just like YAML uses it for data structure."
          ],
          "practiceQuestions": [],
          "practical": ""
        },
        {
          "title": "NETCONF, RESTCONF, data models, and Terraform",
          "lead": "Model-driven interfaces and infrastructure-as-code tools represent desired state in structured, reviewable form.",
          "keyIdeas": [
            "YANG describes structured configuration and operational data",
            "NETCONF commonly uses XML; RESTCONF exposes model data through HTTP methods",
            "Terraform declares desired resource state and plans change before applying it"
          ],
          "content": "Traditional screen scraping treats CLI output as text, which changes across releases and is difficult to validate. Model-driven management uses schemas. YANG defines the hierarchy, types, constraints, and operations for configuration and operational data. A model is not the transported data itself.\n\nNETCONF exchanges structured RPC messages, commonly encoded in XML over a secure transport. It works with datastores and operations such as get-config and edit-config. RESTCONF exposes YANG-modeled resources through REST-like HTTP methods and typically uses JSON or XML. Authentication, authorization, TLS, status codes, and content types remain important.\n\nTerraform is a declarative infrastructure-as-code tool. A configuration describes desired resources. Providers translate those resources into platform API calls. Terraform compares configuration and known state, presents a plan, and applies approved changes. State can contain sensitive values and must be protected. A plan needs human review; dependency or provider behavior can still produce disruptive change.\n\nAnsible commonly expresses ordered tasks and can operate without a resident agent on network devices.\n\nPuppet and Chef are associated with broader configuration-management models. For CCNA, compare mechanisms and recognize that every tool ultimately depends on trustworthy identity, APIs, data models, source control, validation, and rollback.",
          "practical": "Read a small JSON interface record and identify keys, values, arrays, objects, and booleans. Then write: in plain language: the resource change a Terraform plan should show before approval.",
          "tables": [],
          "commands": [],
          "lab": null,
          "examTips": [],
          "practiceQuestions": []
        },
        {
          "title": "Cloud-managed networking and AI-assisted operations",
          "lead": "Modern platforms centralize intent, telemetry, and recommendations, but operators remain responsible for evidence and change impact.",
          "keyIdeas": [
            "Cloud-managed devices use provider control services while forwarding may remain local",
            "Machine learning can cluster anomalies and predict conditions from telemetry",
            "Generative tools can explain or draft configuration but can be confidently wrong"
          ],
          "content": "Cloud-managed networking places dashboards, policy, inventory, analytics, and configuration coordination in a provider-hosted service. Devices establish protected management communication to the cloud while user traffic may continue to switch or route locally. Operators must understand provider availability, licensing, administrative identity, data handling, and what happens if management connectivity is lost.\n\nMachine-learning systems can analyze baselines, group similar events, forecast capacity, or flag unusual clients and paths. Their result is a probability or recommendation, not direct proof of cause. Training data, changing environments, false positives, and opaque features affect quality. Confirm with device state, packet path, logs, and controlled tests.\n\nGenerative AI can summarize documentation, translate intent into a draft, or suggest troubleshooting steps. It can also invent commands, omit platform differences, expose confidential configurations, or propose a change with a large blast radius. Use approved services, remove secrets, verify against authoritative documentation, test in a lab, peer-review, and preserve a rollback.\n\nAutomation should make reasoning more repeatable, not hide it. A human owner approves consequential production changes and verifies the outcome.",
          "practical": "Ask an approved assistant to draft a harmless lab change. Independently verify every command, identify assumptions, test it on a disposable topology, and compare observed behavior with the explanation.",
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
