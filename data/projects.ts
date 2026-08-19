export type StatItem = { value: string; label: string };
export type LayerItem = { title: string; points: string[] };
export type ListBlock = { title: string; items: string[] };

export type Project = {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  cardStat: StatItem;
  tags: string[];
  coreFunction: string;
  layers: LayerItem[];
  operatesOn?: ListBlock;
  useCases?: ListBlock;
  users?: ListBlock;
  characteristics?: ListBlock;
  impactStats: StatItem[];
  closing?: string;
};

export const projects: Project[] = [
  {
    slug: 'allianz-insight-reporting',
    client: 'Allianz',
    sector: 'Insurance',
    title: 'Allianz Insight Reporting',
    summary:
      'A cloud data warehouse and ETL pipeline that turns 13+ disconnected source systems into same-day, drill-down financial insight — while cutting compute cost by 40%.',
    cardStat: { value: '40%', label: 'compute cost reduction' },
    tags: ['Azure Synapse', 'PySpark', 'Power BI', 'ADLS Gen2'],
    coreFunction:
      'A three-tier cloud BI platform that ingests data from 13+ disparate source systems, standardizes it through an automated ETL pipeline, and serves governed, drill-down analytics through Power BI.',
    layers: [
      {
        title: 'Tier 1 — Data ingestion',
        points: [
          'Data arrives from 13+ disparate sources: CSV files, core banking systems, accounting systems, card management platforms, treasury systems, and external feeds',
          'Nothing arrives standardized — formats vary widely across sources',
        ],
      },
      {
        title: 'Tier 2 — Transformation engine',
        points: [
          'An automated ETL pipeline powered by PySpark runs daily, cleansing, validating, and applying metadata-driven transformations',
          'Data flows through three warehouse layers: InsightSource (raw ingest), InsightStaging (cleansed, de-duplicated, standardized), and InsightWarehouse (fully optimized, denormalized tables for analytics)',
          'Runs on Azure Synapse — right-sized from DWU500 to DWU300 — with ADLS Gen2 as the underlying data lake',
          'Synapse Pipelines orchestrates jobs; Python and stored procedures handle complex transformations',
        ],
      },
      {
        title: 'Tier 3 — Analytics & outputs',
        points: [
          'Power BI dashboards and 9+ production reports read directly from InsightWarehouse',
          'Role-based access with drill-down capability to transaction-level detail',
          'Governance layers apply row-level security and encryption for compliance',
        ],
      },
    ],
    useCases: {
      title: 'What it solves operationally',
      items: [
        'Replaces manual extraction across 13 systems and hours-long report waits with a pipeline that runs nightly',
        'Strategic insight moves from days to minutes — a question like "what\'s our total GWP this quarter?" gets answered in seconds, with drill-down to individual transactions',
        'The 40% cost reduction came from right-sizing the compute tier while optimized SQL and set-based transformations preserved performance',
      ],
    },
    impactStats: [
      { value: '13+', label: 'source systems unified' },
      { value: '9+', label: 'production Power BI reports' },
      { value: '40%', label: 'compute cost reduction' },
    ],
    closing:
      'A classic cloud BI architecture where the craft is in the ETL design — handling dirty data gracefully, denormalizing for speed, and keeping the whole pipeline auditable and compliant.',
  },
  {
    slug: 'customs-document-notification-system',
    client: 'Sri Lanka Customs',
    sector: 'Government / Trade',
    title: 'Customs Document Notification System (CDNS)',
    summary:
      'A mobile-optimized portal connecting 17,000+ registered importers and agents to Sri Lanka Customs\u2019 clearance system in real time — replacing phone-based status checks with live, 10-step visibility.',
    cardStat: { value: '17,000+', label: 'registered users' },
    tags: ['AsyCuDa World Integration', 'React', 'Push Notifications', 'RBAC'],
    coreFunction:
      'A web-based portal, part of ARMS Phase 1, that connects to Sri Lanka Customs\u2019 AsyCuDa World system and surfaces real-time customs declaration status to importers, consignees, and freight forwarders through a mobile-optimized interface.',
    layers: [
      {
        title: 'Layer 1 — User access & authentication',
        points: [
          'Secure login with account lockout protection, password recovery, and T&C enforcement',
          'Registration validated against eReg, Sri Lanka\u2019s business registration system, to verify company legitimacy',
          'Role-based access for consignees, declarants, and freight forwarders',
          'Up to 3 simultaneous device logins per subscription',
        ],
      },
      {
        title: 'Layer 2 — Data integration & management',
        points: [
          'Real-time connection to AsyCuDa World to fetch declaration status updates',
          'Pulls CusDec metadata: declaration number, office code, declarant name, submission timestamp',
          'Tracks the full 10-step clearance pipeline from submission through exit note',
          'Stores itemised duty breakdowns (CID, EIC, VAT, PAL, SSL) and penalty flags',
          'Generates push notifications directly from AsyCuDa World events',
        ],
      },
      {
        title: 'Layer 3 — Business logic & outputs',
        points: [
          'First-time access to a CusDec triggers identity confirmation; disputed declarations auto-escalate to RMS and CIU',
          'Three-tier subscription plans based on monthly declaration volume',
          'Dashboard aggregates all registered TINs and companies under one account with live active-declaration counts',
          'Colour-coded declaration list flags penalties or detention, with drill-in to full clearance timeline',
        ],
      },
    ],
    operatesOn: {
      title: 'What it operates on',
      items: [
        'Declaration submissions, metadata, and tariff codes from AsyCuDa World',
        'Assessment results, valuation adjustments, and payment status',
        'Risk channel assignment — red (physical examination), green (immediate release), yellow (document review)',
        'Examination outcomes and exit notes',
      ],
    },
    users: {
      title: 'User base',
      items: [
        'High-volume consignees (22 registered) — 80+ declarations per month',
        'Medium-volume consignees (811 registered) — up to 80 declarations per month',
        'Low-volume consignees (16,018 registered) — up to 5 declarations per month',
        'Declarants (1,666 registered) — freight forwarders and customs agents filing on behalf of others',
      ],
    },
    impactStats: [
      { value: '10', label: 'clearance stages tracked live' },
      { value: '17,000+', label: 'importers & agents registered' },
      { value: '3', label: 'user roles supported' },
    ],
    closing:
      'Eliminates the need to call Customs offices for status updates, speeds up duty and penalty payment, and flags suspicious filings for investigation automatically.',
  },
  {
    slug: 'data-analytics-tool',
    client: 'Sri Lanka Customs — Risk Management Directorate',
    sector: 'Government / Risk Intelligence',
    title: 'Data Analytics Tool (DAT)',
    summary:
      'An internal risk-intelligence platform consolidating six legacy customs databases into one governed source of truth, supporting live risk targeting across roughly 3,500 declarations a day.',
    cardStat: { value: '3,500', label: 'declarations processed daily' },
    tags: ['ETL', 'RBAC', 'Fraud Detection', 'Risk Targeting'],
    coreFunction:
      'An internal analytics platform, part of ARMS Phase 1, that ingests customs transaction data from six disparate databases, transforms it into analysis-ready datasets, and surfaces risk intelligence through role-based dashboards for the Risk Management Directorate.',
    layers: [
      {
        title: 'Layer 1 — Data ingestion & storage',
        points: [
          'An ETL framework extracts, transforms, and loads data from six Customs databases into a central RMS Database: AsyCuDa World (Oracle), Re-Registration DB (MySQL), Risk Management DB (MySQL), Valuation DB (MySQL), eCCR System (MS SQL), and legacy nCen/Cen (MS Access)',
          'RMS Database acts as a single source of truth, updated on a near-daily cadence',
          'All data stays strictly on Sri Lanka Customs\u2019 internal network — no cloud or external exposure',
        ],
      },
      {
        title: 'Layer 2 — Extraction & transformation',
        points: [
          'A SQL query engine with dynamic variable support (date ranges, trader names, commodity codes, origin countries)',
          'System administrators define reusable, parameterized queries — run across different date ranges or trader profiles without re-coding',
          'Datasets generated from queries are cached and indexed for fast retrieval across multiple dashboards',
        ],
      },
      {
        title: 'Layer 3 — Visualization & access control',
        points: [
          'Data representations — charts, graphs, heatmaps, tables, timelines — built on top of datasets',
          'Admins assemble representations into tailored dashboards per officer role or directorate unit',
          'Role-based access control filters visualizations to only the data fields a user is authorized to see',
          'Datasets and visualizations export to PDF/Excel for compliance reporting and audit trails',
        ],
      },
    ],
    useCases: {
      title: 'Core operational use cases',
      items: [
        'Risk-based trade targeting — flag high-risk declarations before physical inspection using trader history, commodity type, origin, and value anomalies',
        'Fraud detection — surface patterns of misdeclaration across commodities, traders, and origin countries',
        'Policy impact analysis — track whether new tariffs or trade policies are achieving intended outcomes',
        'Operational decision-making — compare trader compliance profiles and benchmark inspection outcomes',
      ],
    },
    impactStats: [
      { value: '6', label: 'legacy databases unified' },
      { value: '~3,500', label: 'CusDecs processed daily' },
      { value: '0', label: 'external / cloud exposure' },
    ],
    closing:
      'Replaces manual extraction into spreadsheets with automated pipelines, reusable datasets, and full audit logging — enabling faster, better-justified enforcement decisions.',
  },
  {
    slug: 'dilmah-modern-data-platform',
    client: 'Dilmah',
    sector: 'FMCG / Manufacturing',
    title: 'Dilmah Modern Data Platform',
    summary:
      'A lakehouse-based financial reporting platform spanning 23 report areas across multiple Dilmah entities, cutting close-cycle reporting turnaround from 5–7 days to 1–2.',
    cardStat: { value: '5–7 days → 1–2', label: 'reporting turnaround' },
    tags: ['Databricks', 'Azure Synapse', 'Power BI', 'Medallion Architecture'],
    coreFunction:
      'An automated financial reporting platform that ingests transaction data from Oracle ERP across multiple Dilmah operating entities, applies standardized consolidation logic, and surfaces financial insight through interactive Power BI dashboards.',
    layers: [
      {
        title: 'Bronze — ingestion & staging',
        points: [
          'Raw data extracted from Oracle ERP and related finance systems via automated Azure Synapse pipelines',
          'Lands in ADLS Gen2 in original format with minimal transformation',
          'Separate bronze zones per source system preserve data lineage and allow rollback',
        ],
      },
      {
        title: 'Silver — transformation & standardization',
        points: [
          'Oracle GL codes mapped to a standardized chart of accounts across entities',
          'Entity-specific cost allocation logic (sales-based, quantity-based, or fixed rules, e.g. for T-Lounges)',
          'Reconciliation checks validate GL balance before consolidation, and inter-company transactions are eliminated across legal entities',
          'Stored as Delta tables / Parquet for efficient, ACID-compliant querying',
        ],
      },
      {
        title: 'Gold — analytics-ready reporting',
        points: [
          'Pre-aggregated datasets organized by domain: Management P&L, Group Consolidated P&L, Quarterly Review, Overheads, Customer Analysis, Ratio Analysis, Balance Sheet',
          'Power BI dashboards support multi-quarter selection, month-level drill-down, and multi-company comparison',
          'Budget-vs-actual and year-to-date variance analysis, with currency conversion built in',
        ],
      },
    ],
    useCases: {
      title: 'Core operational use cases',
      items: [
        'Board-level management reporting with drill-down into variance drivers across entities',
        'Automated statutory and quarterly consolidation, replacing manual spreadsheet work',
        'Customer and product-level profitability analysis for pricing and portfolio decisions',
        'Multi-currency, multi-entity visibility that spreadsheets couldn\u2019t previously support',
      ],
    },
    impactStats: [
      { value: '23', label: 'report areas covered' },
      { value: '5–7 → 1–2 days', label: 'close-cycle turnaround' },
      { value: '3', label: 'medallion layers (bronze/silver/gold)' },
    ],
    closing:
      'A single source of truth eliminated weeks of manual consolidation per close cycle and removed conflicting versions of "the numbers" across finance teams.',
  },
  {
    slug: 'amana-bank-bi-dashboard',
    client: 'Amana Bank',
    sector: 'Banking',
    title: 'Amana Bank BI Dashboard',
    summary:
      'An enterprise data warehouse and 7-dashboard Power BI suite serving 2,500GB of banking history with 4-level drill-down, from branch summary to raw transaction lines.',
    cardStat: { value: '2,500 GB', label: 'historical data warehoused' },
    tags: ['SSIS', 'SQL Server', 'Power BI', 'Data Warehousing'],
    coreFunction:
      'An automated enterprise analytics platform that ingests transaction data from multiple banking source systems, consolidates it into a centralized warehouse, and surfaces insight through interactive Power BI dashboards with real-time filtering and drill-down.',
    layers: [
      {
        title: 'Layer 1 — Ingestion & source systems',
        points: [
          'Sources: Oracle Core Banking (accounts, deposits, withdrawals, balances), Card Management System, POS System, ATM System, and supplementary CSV feeds',
          'Data pulled on scheduled intervals via SSIS packages',
        ],
      },
      {
        title: 'Layer 2 — ETL & data warehouse',
        points: [
          '7 ETL packages orchestrated by SQL Server Agent, each handling one source system end to end',
          'Staging layer buffers raw extracts before cleaning; stored procedures apply validation, deduplication (upsert logic), and dimension enrichment',
          'Production warehouse holds cleansed, normalized fact and dimension tables optimized for analytical queries',
          '2,500 GB of historical data (2016–2020), growing ~1,244 GB annually — requiring partitioning and indexing for performance',
        ],
      },
      {
        title: 'Layer 3 — Reporting & analytics',
        points: [
          '7 Power BI dashboards: Overview, Advances & Advance Details, Deposits & Deposit Details, Month-End Outstanding & Deposits, and Daily/Monthly/Yearly Comparison',
          'Real-time slicers for year, branch, customer type, and product classification',
          '4-level drill-down: branch summary → product/segment detail → customer level → raw transaction lines',
          'Any drill-down view exports to Excel for ad-hoc analysis or compliance documentation',
        ],
      },
    ],
    useCases: {
      title: 'Core operational use cases',
      items: [
        'Portfolio monitoring — track advances and deposits across branches in real time, spot concentration risk',
        'Branch performance analysis against targets for regional managers',
        'Ad-hoc analysis without IT involvement — analysts self-serve custom slices instantly',
        'Regulatory and audit response via transaction-level drill-down and raw data export',
      ],
    },
    impactStats: [
      { value: '7', label: 'production Power BI dashboards' },
      { value: '4', label: 'levels of drill-down' },
      { value: '1,244 GB', label: 'annual data growth handled' },
    ],
    closing:
      'Reporting that took 2–3 days in spreadsheets now refreshes overnight — branch managers get self-service performance data without submitting a single request.',
  },
  {
    slug: 'customer-data-platform',
    client: 'Enterprise CDP Engagement',
    sector: 'Retail / Telecom / Automotive',
    title: 'Customer Data Platform (CDP)',
    summary:
      'A unified identity-resolution and activation platform stitching customer data across app, web, CRM, and billing — driving proven 5–15% revenue lift from precision targeting.',
    cardStat: { value: '5–15%', label: 'revenue lift from targeting' },
    tags: ['Identity Resolution', 'Real-Time Segmentation', 'GDPR/CCPA'],
    coreFunction:
      'A unified data aggregation and activation system that collects customer data from every business touchpoint, reconciles identity across systems, builds real-time customer profiles, and enables precision targeting at scale.',
    layers: [
      {
        title: 'Layer 1 — Ingestion & source integration',
        points: [
          'Sources: mobile app events, web analytics, CRM, transactional data, billing systems, and partner/CSV feeds',
          'Ingested via event APIs, batch uploads, or direct database connectors, on real-time or scheduled intervals',
        ],
      },
      {
        title: 'Layer 2 — Identity resolution & profile unification',
        points: [
          'Deterministic (email, phone, ID) and probabilistic (behavioral) matching stitches the same person across systems',
          'Profiles merge demographic, behavioral, transactional, and digital-footprint data, plus consent flags, into one persistent record',
          'Profiles update in real time as new events arrive',
        ],
      },
      {
        title: 'Layer 3 — Segmentation, analytics & activation',
        points: [
          'Behavioral and demographic audience segmentation — high-value repeat buyers, churn risk, first-time buyers, location-based groups',
          'Real-time triggers: cart abandonment, high engagement, high-value purchase',
          'Dashboards for journey visualization, cohort performance, campaign ROI, and channel attribution',
        ],
      },
      {
        title: 'Layer 4 — Privacy, compliance & activation output',
        points: [
          'Consent management, role-based data access, PII encryption, and GDPR/CCPA-compliant deletion and export workflows',
          'Unified segments push to email platforms, ad networks, SMS/push services, CRM, and e-commerce recommendation engines',
        ],
      },
    ],
    useCases: {
      title: 'Core operational use cases',
      items: [
        'Personalized campaigns with a proven 5–15% revenue lift over one-size-fits-all messaging',
        'Marketing spend optimization — 10–30% efficiency improvement by targeting highest-performing segments',
        'Early churn detection and automated win-back campaigns',
        'Lead scoring that prioritizes high-intent prospects for sales',
      ],
    },
    impactStats: [
      { value: '5–15%', label: 'revenue lift proven' },
      { value: '10–30%', label: 'marketing efficiency gain' },
      { value: 'ms', label: 'event processing latency' },
    ],
    closing:
      'Removes data silos between marketing, sales, and product teams — everyone works from one governed customer record instead of conflicting spreadsheets.',
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
