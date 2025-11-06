// ============================================
// ZERO TRUST VAULT - COMPLETE APPLICATION
// ============================================

// ============================================
// CONFIGURATION & CONSTANTS
// ============================================
const TRUSTED_IP = "103.25.10.5"
const IP_CHECK_INTERVAL = 5000 // 5 seconds
let ipCheckTimer = null

const FILES_DATABASE = {
  admin: [
    {
      id: "admin-001",
      name: "System Administration Guide.txt",
      type: "public",
      size: "245 KB",
      created: "2025-01-15",
      content: `ZERO TRUST VAULT - SYSTEM ADMINISTRATION GUIDE
================================================

Version: 2.1
Last Updated: January 2025
Classification: Public

1. OVERVIEW
-----------
This document provides comprehensive guidelines for system administrators managing the Zero Trust Vault infrastructure.

2. USER MANAGEMENT
------------------
- Admin users have full access to all system resources
- Create user accounts with role-based permissions
- Monitor user activity and login patterns
- Enforce password policies and MFA requirements

3. SECURITY PROTOCOLS
---------------------
- IP-based access control enabled
- Real-time IP monitoring activated
- VPN detection mechanisms in place
- Session timeout after 30 minutes of inactivity

4. BACKUP & RECOVERY
--------------------
- Daily automated backups at 02:00 UTC
- Weekly full system backups
- Recovery point objective (RPO): 1 day
- Recovery time objective (RTO): 4 hours

5. SYSTEM MAINTENANCE
---------------------
- Scheduled maintenance: Sundays 22:00-23:00 UTC
- Patch management cycle: Monthly
- Security updates: As needed (critical patches immediate)

6. INCIDENT RESPONSE
--------------------
- Report security incidents to: security@zerotrustvault.com
- Response time: Critical issues within 1 hour
- Full audit trail maintained for all incidents

7. COMPLIANCE
-------------
- SOC 2 Type II certified
- ISO 27001 compliant
- GDPR data protection requirements met
- Regular third-party security audits conducted

For support: admin-support@zerotrustvault.com`,
    },
    {
      id: "admin-002",
      name: "Server Infrastructure Report.txt",
      type: "restricted",
      size: "512 KB",
      created: "2025-01-20",
      accessLevel: "admin",
      content: `CONFIDENTIAL - SERVER INFRASTRUCTURE REPORT
=============================================

Classification: RESTRICTED - Admins Only
Date: January 2025
Department: IT Operations

EXECUTIVE SUMMARY
-----------------
Current infrastructure supports 10,000+ concurrent users with 99.95% uptime.

HARDWARE SPECIFICATIONS
------------------------
- Production Servers: 48 units
- CPU: Intel Xeon Platinum 8380
- RAM: 512 GB per server
- Storage: 50 TB SSD + 200 TB HDD backup

NETWORK TOPOLOGY
----------------
- Primary Data Center: NYC (5000 users)
- Secondary Data Center: SF (3000 users)
- Tertiary Data Center: London (2000 users)
- Load Balancing: Active-Active configuration

SECURITY INFRASTRUCTURE
-----------------------
- Firewalls: Palo Alto Networks
- IDS/IPS: Suricata Advanced Threat Protection
- DDoS Protection: Cloudflare Enterprise
- SSL/TLS: 256-bit encryption on all traffic

DATABASE CONFIGURATION
----------------------
- Primary: PostgreSQL 14.5
- Replicas: 3 read-only instances
- Backup: Automated daily snapshots
- Query optimization: 99.8% cache hit rate

PERFORMANCE METRICS
-------------------
- Average Response Time: 87ms
- P99 Latency: 320ms
- Throughput: 50,000 requests/second
- Database Queries/Second: 100,000

FUTURE UPGRADES
----------------
- Kubernetes migration: Q2 2025
- Database sharding: Q3 2025
- Edge CDN expansion: Q4 2025

For inquiries: infrastructure@zerotrustvault.com`,
    },
    {
      id: "admin-003",
      name: "Financial Report Q4 2024.txt",
      type: "restricted",
      size: "1.2 MB",
      created: "2025-01-10",
      accessLevel: "admin",
      content: `CONFIDENTIAL - FINANCIAL REPORT Q4 2024
=========================================

Classification: RESTRICTED - Executives & Admins Only
Report Date: January 15, 2025
Fiscal Quarter: Q4 2024

REVENUE SUMMARY
---------------
Total Revenue: $8.5 Million
- Enterprise Licenses: $5.2M (61%)
- Premium Services: $2.1M (25%)
- Support & Training: $1.2M (14%)

EXPENSE BREAKDOWN
-----------------
Infrastructure Costs: $2.1M (25%)
Development & R&D: $1.8M (21%)
Sales & Marketing: $2.0M (24%)
Operations & Support: $1.4M (16%)
Administrative: $0.8M (10%)
Other Expenses: $0.4M (4%)

NET PROFIT
----------
Total Profit: $2.8 Million
Profit Margin: 32.9%
Year-over-Year Growth: 45%

KEY PERFORMANCE INDICATORS
--------------------------
- Customer Acquisition: 250 new customers
- Customer Retention: 96.5%
- Monthly Recurring Revenue: $1.9M
- Annual Contract Value: $22.8M

INVESTOR METRICS
----------------
- Earnings Per Share: $0.85
- Book Value: $15.2M
- Return on Investment: 18.5%
- Debt-to-Equity Ratio: 0.35

OUTLOOK
-------
Q1 2025 Revenue Projection: $9.2M
Annual Growth Target: 50%
Market Expansion: 5 new regions
Product Innovation: 8 new features planned

For financial inquiries: finance@zerotrustvault.com`,
    },
  ],
  manager: [
    {
      id: "mgr-001",
      name: "Team Performance Report.txt",
      type: "public",
      size: "189 KB",
      created: "2025-01-18",
      content: `TEAM PERFORMANCE REPORT - JANUARY 2025
======================================

Department: Operations & Support
Report Date: January 20, 2025
Reporting Period: January 1-31, 2025

TEAM OVERVIEW
-------------
Total Team Members: 45
- Full-time: 42
- Contract: 3
Average Tenure: 3.2 years

PERFORMANCE METRICS
-------------------
Customer Satisfaction Score: 4.8/5.0
Average Resolution Time: 2.4 hours
First Contact Resolution: 78%
On-time Ticket Closure: 95%

INDIVIDUAL ACHIEVEMENTS
-----------------------
- Top Performer: Sarah Johnson (450 tickets resolved)
- Most Improved: Mike Chen (35% improvement from last month)
- Customer Service Excellence: Emma Williams (4.95/5 rating)

TRAINING & DEVELOPMENT
----------------------
- Certification Completions: 18 team members
- Cross-training Programs: 6 active
- Leadership Development: 5 participants

GOALS FOR NEXT MONTH
--------------------
1. Increase customer satisfaction to 4.9/5.0
2. Reduce resolution time to 2.2 hours
3. Achieve 80% first contact resolution
4. Complete team compliance training

CHALLENGES
----------
- High ticket volume during peak season
- Need for advanced troubleshooting skills
- Staffing gaps in specialized areas

For team inquiries: operations@zerotrustvault.com`,
    },
    {
      id: "mgr-002",
      name: "Project Management Update.txt",
      type: "public",
      size: "267 KB",
      created: "2025-01-22",
      content: `PROJECT MANAGEMENT STATUS UPDATE
=================================

Report Date: January 22, 2025
Reporting Manager: James Peterson

ACTIVE PROJECTS
---------------
Project Alpha: 75% Complete
- Timeline: On schedule
- Budget: Within 5% of estimate
- Team: 8 members assigned

Project Beta: 45% Complete
- Timeline: 2 weeks ahead
- Budget: 10% under budget
- Team: 12 members assigned

Project Gamma: 60% Complete
- Timeline: 1 week behind (expected recovery)
- Budget: Within estimate
- Team: 6 members assigned

RESOURCE ALLOCATION
-------------------
- Total Staff Hours This Month: 2,400
- Allocated to Projects: 1,920 (80%)
- Administrative Work: 320 (13%)
- Training & Development: 160 (7%)

RISK ASSESSMENT
---------------
- Low Risk Projects: 2
- Medium Risk Projects: 1
- High Risk Projects: 0
- Mitigation Strategies: In place for all projects

UPCOMING MILESTONES
-------------------
February 5: Project Alpha Phase 2 Kickoff
February 10: Project Beta Design Review
February 20: Project Gamma Beta Testing Start

BUDGET STATUS
-------------
Total Budget: $450,000
Spent to Date: $287,500 (64%)
Projected Final: $440,000 (98% of budget)

For project information: projects@zerotrustvault.com`,
    },
    {
      id: "mgr-003",
      name: "Departmental Guidelines.txt",
      type: "restricted",
      size: "445 KB",
      created: "2025-01-12",
      accessLevel: "manager",
      content: `DEPARTMENTAL GUIDELINES & PROCEDURES
====================================

Classification: RESTRICTED - Managers Only
Effective Date: January 2025

CODE OF CONDUCT
---------------
- Professional behavior expected at all times
- Zero tolerance for discrimination or harassment
- Confidentiality of sensitive information mandatory
- Compliance with all company policies required

PERFORMANCE EXPECTATIONS
------------------------
- Punctuality: 9 AM - 5 PM, 5-day work week
- Dress Code: Business casual
- Communication: Respond to emails within 4 hours
- Attendance: 95% minimum monthly attendance

DISCIPLINARY PROCEDURES
-----------------------
Level 1: Verbal warning
Level 2: Written warning (placed on file)
Level 3: Suspension (1-3 days)
Level 4: Termination

REMOTE WORK POLICY
------------------
- 2 days remote per week authorized
- Prior manager approval required
- VPN mandatory for remote access
- No sensitive data on personal devices

EXPENSE REPORTING
-----------------
- Submit within 14 days of expense
- Attach receipts for items over $25
- Manager approval required
- Reimbursement within 5 business days

CONFLICT RESOLUTION
-------------------
- Direct conversation first
- HR mediation if needed
- Formal review as final step
- All disputes handled confidentially

PROFESSIONAL DEVELOPMENT
------------------------
- Annual training budget: $2,500 per employee
- Conference attendance: Up to 2 per year
- Certification support: Available
- Internal mentorship program encouraged

For policy clarification: hr@zerotrustvault.com`,
    },
  ],
  employee: [
    {
      id: "emp-001",
      name: "Employee Handbook.txt",
      type: "public",
      size: "678 KB",
      created: "2025-01-01",
      content: `EMPLOYEE HANDBOOK - 2025
========================

Welcome to Zero Trust Vault!

This handbook outlines the policies, benefits, and procedures for all employees.

COMPANY MISSION
---------------
To provide enterprise-grade security solutions that empower organizations to protect their most valuable assets with zero compromise on accessibility.

CORE VALUES
-----------
1. Security First: Always prioritize data protection
2. Innovation: Continuously improve our products
3. Integrity: Operate with honesty and transparency
4. Collaboration: Work together toward common goals
5. Excellence: Deliver quality in everything we do

BENEFITS PACKAGE
----------------
- Health Insurance: Medical, dental, vision
- 401(k) Retirement Plan: 4% company match
- Paid Time Off: 15 days vacation, 10 holidays
- Life Insurance: 2x annual salary
- Disability Insurance: Short and long-term

WORK ENVIRONMENT
----------------
- Office Hours: 9 AM - 5 PM
- Casual dress code encouraged
- Flexible work arrangements available
- Free coffee and snacks
- Gym membership subsidy: $50/month

COMMUNICATION CHANNELS
----------------------
- Email: Primary communication method
- Slack: For instant messaging
- Meetings: Schedule via Outlook
- Escalations: Direct to your manager

CODE OF ETHICS
--------------
- Treat all colleagues with respect
- Maintain professional standards
- Avoid conflicts of interest
- Report violations immediately
- Protect company confidentiality

SAFETY POLICIES
---------------
- Report hazards immediately
- Follow all safety procedures
- Emergency exits clearly marked
- First aid kit locations available
- Mental health resources available

TECHNOLOGY USAGE
-----------------
- Company equipment: Business use only
- Personal device security: Recommended
- Password management: Required
- VPN: Use for remote access
- Data classification: Follow guidelines

PERFORMANCE REVIEWS
-------------------
- Annual reviews: Every January
- Mid-year check-ins: July
- Goal setting: Q1 each year
- Feedback: Ongoing and encouraged

LEAVE POLICIES
---------------
- Vacation: 15 days annually
- Sick Leave: 10 days annually
- Parental Leave: 12 weeks
- Bereavement Leave: 3-5 days
- Unpaid Leave: Negotiable

PROFESSIONAL DEVELOPMENT
------------------------
- Training Budget: $2,000 annually
- Certifications: Supported
- Conferences: Limited availability
- Internal Courses: Free access
- Mentorship: Available

For handbook questions: hr@zerotrustvault.com`,
    },
    {
      id: "emp-002",
      name: "Technical Documentation.txt",
      type: "public",
      size: "523 KB",
      created: "2025-01-14",
      content: `TECHNICAL DOCUMENTATION GUIDE
==============================

Version: 3.2
Last Updated: January 2025

SYSTEM REQUIREMENTS
-------------------
- Browser: Chrome, Firefox, Safari (latest versions)
- Internet Speed: Minimum 5 Mbps
- RAM: 4GB minimum
- Storage: 100MB available space

GETTING STARTED
---------------
1. Create account at zerotrustvault.com
2. Verify email address
3. Set up two-factor authentication
4. Complete profile information
5. Accept terms and conditions

LOGIN PROCESS
-------------
1. Visit login page
2. Enter username and password
3. Select your role
4. IP verification automatic
5. Access dashboard

NAVIGATING THE DASHBOARD
------------------------
Overview Tab:
- Security status monitoring
- IP address information
- Access level display
- Session duration tracking

Files Tab:
- Browse available documents
- Filter by access level
- Preview file contents
- Download secure documents

Security Tab:
- View activity logs
- Monitor IP changes
- Track login history
- Review security events

FILE OPERATIONS
---------------
Preview: Click preview to view content
Download: Click download to save locally
Search: Use search bar to find files
Filter: Use tabs to filter by type

TROUBLESHOOTING
---------------
Can't login: Check credentials and role
IP mismatch: IP has changed, logout and login
Slow performance: Check internet connection
File won't download: Try different browser

SECURITY TIPS
-------------
- Never share login credentials
- Always use HTTPS connections
- Log out after each session
- Report suspicious activity
- Keep your IP address consistent

SHORTCUTS
---------
Alt + O: Open Overview
Alt + F: Open Files
Alt + S: Open Security Logs
Alt + L: Logout

For technical support: support@zerotrustvault.com`,
    },
    {
      id: "emp-003",
      name: "Daily Operations Checklist.txt",
      type: "public",
      size: "298 KB",
      created: "2025-01-19",
      content: `DAILY OPERATIONS CHECKLIST
===========================

Morning Routine (9:00 - 9:30 AM)
---------------------------------
[ ] Check and respond to urgent emails
[ ] Review calendar for scheduled meetings
[ ] Check project status updates
[ ] Review team communications
[ ] Set daily priorities

Work Session 1 (9:30 AM - 12:30 PM)
-----------------------------------
[ ] Focus on high-priority tasks
[ ] Attend scheduled meetings
[ ] Collaborate with team members
[ ] Document progress
[ ] Update task status

Lunch Break (12:30 PM - 1:30 PM)
--------------------------------
[ ] Step away from desk
[ ] Take proper lunch break
[ ] Recharge and relax
[ ] Return refreshed

Work Session 2 (1:30 PM - 5:00 PM)
----------------------------------
[ ] Continue project work
[ ] Attend remaining meetings
[ ] Review completed tasks
[ ] Send end-of-day updates
[ ] Prepare for next day

End of Day Routine (4:45 PM - 5:00 PM)
--------------------------------------
[ ] Complete daily time tracking
[ ] Update task management system
[ ] Send summary to manager
[ ] Secure all work materials
[ ] Logout of systems
[ ] Log out of Zero Trust Vault

WEEKLY GOALS
-----------
Monday: Week planning
Tuesday-Thursday: Execution
Friday: Review and reporting

MONTHLY OBJECTIVES
------------------
- Complete assigned projects
- Maintain quality standards
- Contribute to team goals
- Engage in professional development
- Submit required reports

For operational guidance: operations@zerotrustvault.com`,
    },
  ],
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Application initializing...")

  // Check if user is logged in
  const user = checkSession()
  if (!user) {
    return
  }

  // Initialize UI
  initializeDashboard(user)
  initializeEventListeners()
  startIPMonitoring()

  console.log("[v0] Application initialized successfully")
})

// ============================================
// SESSION MANAGEMENT
// ============================================
function checkSession() {
  const userJSON = sessionStorage.getItem("user")
  if (!userJSON) {
    window.location.href = "index.html"
    return null
  }
  return JSON.parse(userJSON)
}

function logout(reason = "Session ended") {
  sessionStorage.clear()
  window.location.href = "index.html"
}

// ============================================
// DASHBOARD INITIALIZATION
// ============================================
function initializeDashboard(user) {
  document.getElementById("userName").textContent = user.name
  document.getElementById("userRole").textContent = `Role: ${user.role.charAt(0).toUpperCase() + user.role.slice(1)}`
  document.getElementById("userAvatar").textContent = user.name.charAt(0).toUpperCase()
  document.getElementById("accessLevelText").textContent = user.role.toUpperCase()
  document.getElementById("trustedIP").textContent = user.loginIP

  // Load files for user role
  loadUserFiles(user.role)

  // Display initial IP status
  updateIPStatus(user)

  // Update session duration
  updateSessionDuration(user.loginTime)
}

// ============================================
// FILE MANAGEMENT
// ============================================
function loadUserFiles(role) {
  console.log("[v0] Loading files for role:", role)

  const files = FILES_DATABASE.admin.concat(FILES_DATABASE.manager).concat(FILES_DATABASE.employee)
  const filesGrid = document.getElementById("filesGrid")
  filesGrid.innerHTML = ""

  files.forEach((file) => {
    const fileCard = createFileCard(file, role)
    filesGrid.appendChild(fileCard)
  })
}

function createFileCard(file, role) {
  const card = document.createElement("div")

  // Check if user has access to this file
  const hasAccess = !file.accessLevel || file.accessLevel === role || role === "admin"

  card.className = `file-card ${file.type === "restricted" ? "restricted" : ""}`

  const accessColor = file.type === "restricted" ? "#ff3366" : "#00cc66"
  const accessText = file.type === "restricted" ? "Restricted" : "Public"

  card.innerHTML = `
        <div class="file-icon-section">
            <div class="file-icon">📄</div>
            <span class="file-access-badge access-${file.type}">${accessText}</span>
        </div>
        <div class="file-name">${file.name}</div>
        <div class="file-meta">
            <span>${file.size}</span>
            <span>${file.created}</span>
        </div>
        <div class="file-actions">
            <button class="btn-preview" data-file-id="${file.id}">Preview</button>
            <button class="btn-download" data-file-id="${file.id}" ${!hasAccess ? 'data-blocked="true"' : ""}>Download</button>
        </div>
    `

  card.querySelector(".btn-preview").addEventListener("click", () => {
    previewFile(file)
  })

  card.querySelector(".btn-download").addEventListener("click", (e) => {
    if (e.target.dataset.blocked === "true") {
      showCustomPopup(
        "error",
        "Access Denied",
        `You do not have sufficient privileges to download this file. Required role: ${file.accessLevel || "higher"}.`,
      )
      return
    }
    downloadFile(file)
  })

  return card
}

// ============================================
// FILE PREVIEW & DOWNLOAD
// ============================================
function previewFile(file) {
  document.getElementById("modalFileName").textContent = file.name
  document.getElementById("modalFileContent").textContent = file.content
  document.getElementById("fileModal").classList.add("active")

  // Store current file for download
  window.currentFile = file
}

function downloadFile(file) {
  const user = JSON.parse(sessionStorage.getItem("user"))

  // Check IP match for restricted files
  if (file.type === "restricted") {
    const currentIP = document.getElementById("currentIP").textContent
    if (currentIP !== user.loginIP) {
      showCustomPopup(
        "error",
        "IP Mismatch",
        "Cannot download restricted files with changed IP address. Your IP has changed since login.",
      )
      return
    }
  }

  const element = document.createElement("a")
  const fileContent = file.content
  const blob = new Blob([fileContent], { type: "text/plain" })
  const url = URL.createObjectURL(blob)

  element.setAttribute("href", url)
  element.setAttribute("download", file.name)
  element.style.display = "none"

  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
  URL.revokeObjectURL(url)

  // Log the download
  addSecurityLog(`Downloaded: ${file.name}`, "success")
  showCustomPopup("success", "Download Complete", `${file.name} has been downloaded successfully.`)
}

// ============================================
// IP MONITORING & VPN DETECTION
// ============================================
function startIPMonitoring() {
  console.log("[v0] Starting IP monitoring...")

  // Check IP immediately
  checkCurrentIP()

  // Check every 5 seconds
  ipCheckTimer = setInterval(checkCurrentIP, IP_CHECK_INTERVAL)
}

async function checkCurrentIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json", {
      method: "GET",
      cache: "no-cache",
    })

    const data = await response.json()
    const currentIP = data.ip

    console.log("[v0] Current IP:", currentIP)

    // Update UI
    document.getElementById("currentIP").textContent = currentIP
    document.getElementById("lastCheckTime").textContent = new Date().toLocaleTimeString()

    // Check IP match
    const user = JSON.parse(sessionStorage.getItem("user"))
    checkIPMatch(currentIP, user.loginIP)
  } catch (error) {
    console.error("[v0] IP check failed:", error)
  }
}

function checkIPMatch(currentIP, trustedIP) {
  const matchStatus = document.getElementById("ipMatchStatus")
  const matchIcon = document.getElementById("matchIcon")
  const statusValue = document.getElementById("securityStatus")
  const accessWarning = document.getElementById("accessWarning")

  if (currentIP === trustedIP) {
    matchStatus.textContent = "MATCHED"
    matchStatus.style.color = "var(--success-color)"
    matchIcon.textContent = "✓"
    statusValue.textContent = "VERIFIED"
    statusValue.style.color = "var(--success-color)"

    if (accessWarning) {
      accessWarning.style.display = "none"
    }

    document.getElementById("vpnStatusIcon").textContent = "✓"
    document.getElementById("vpnStatus").textContent = "NOT DETECTED"
    document.getElementById("vpnStatus").style.color = "var(--success-color)"
  } else {
    console.warn("[v0] SUSPICIOUS IP DETECTED!")
    console.warn("[v0] Expected:", trustedIP)
    console.warn("[v0] Current:", currentIP)

    matchStatus.textContent = "MISMATCHED"
    matchStatus.style.color = "var(--danger-color)"
    matchIcon.textContent = "✗"
    statusValue.textContent = "ALERT"
    statusValue.style.color = "var(--danger-color)"

    if (accessWarning) {
      accessWarning.style.display = "block"
    }

    document.getElementById("vpnStatusIcon").textContent = "⚠️"
    document.getElementById("vpnStatus").textContent = "SUSPICIOUS IP DETECTED"
    document.getElementById("vpnStatus").style.color = "var(--danger-color)"

    addSecurityLog(`⚠️ SUSPICIOUS IP DETECTED: ${currentIP}`, "danger")

    showCustomPopup(
      "warning",
      "🚨 Suspicious IP Detected",
      "VPN or IP change detected. Your session will be terminated for security reasons.",
      () => {
        logout("Security: IP mismatch detected")
      },
    )
  }
}

// ============================================
// SESSION TRACKING
// ============================================
function updateSessionDuration(loginTime) {
  const startTime = new Date(loginTime)

  setInterval(() => {
    const now = new Date()
    const diff = now - startTime

    const hours = Math.floor(diff / 3600000)
    const minutes = Math.floor((diff % 3600000) / 60000)
    const seconds = Math.floor((diff % 60000) / 1000)

    const duration = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    document.getElementById("sessionDuration").textContent = duration
  }, 1000)
}

// ============================================
// SECURITY LOGGING
// ============================================
const securityLogs = []

function addSecurityLog(message, type = "info") {
  const log = {
    timestamp: new Date(),
    message: message,
    type: type,
  }

  securityLogs.unshift(log)

  // Keep last 50 logs
  if (securityLogs.length > 50) {
    securityLogs.pop()
  }

  console.log("[v0] Security Log:", message)
}

function displaySecurityLogs() {
  const logsContainer = document.getElementById("logsContainer")
  logsContainer.innerHTML = ""

  securityLogs.forEach((log) => {
    const logCard = document.createElement("div")
    logCard.className = `file-card`
    logCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div class="file-name" style="margin: 0;">${log.message}</div>
                    <div class="file-meta" style="margin-top: 8px;">
                        <span>${log.timestamp.toLocaleTimeString()}</span>
                    </div>
                </div>
                <span style="font-size: 20px;">${log.type === "success" ? "✓" : log.type === "danger" ? "✗" : "ℹ"}</span>
            </div>
        `
    logsContainer.appendChild(logCard)
  })
}

// ============================================
// EVENT LISTENERS
// ============================================
function initializeEventListeners() {
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", () => {
      const section = item.dataset.section
      switchSection(section)

      document.querySelectorAll(".menu-item").forEach((m) => m.classList.remove("active"))
      item.classList.add("active")
    })
  })

  document.querySelector(".modal-close").addEventListener("click", () => {
    document.getElementById("fileModal").classList.remove("active")
  })

  document.querySelector(".btn-close-modal").addEventListener("click", () => {
    document.getElementById("fileModal").classList.remove("active")
  })

  document.getElementById("modalDownloadBtn").addEventListener("click", () => {
    if (window.currentFile) {
      downloadFile(window.currentFile)
      document.getElementById("fileModal").classList.remove("active")
    }
  })

  document.querySelector(".btn-logout").addEventListener("click", () => {
    logout("User logout")
  })

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter
      filterFiles(filter)

      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
    })
  })

  // Close modal on background click
  document.getElementById("fileModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("fileModal")) {
      document.getElementById("fileModal").classList.remove("active")
    }
  })
}

function switchSection(section) {
  // Hide all sections
  document.querySelectorAll(".section-container").forEach((s) => {
    s.style.display = "none"
  })

  // Show selected section
  const selectedSection = document.getElementById(`${section}-section`)
  if (selectedSection) {
    selectedSection.style.display = "block"
  }

  // Special handling for security logs
  if (section === "security") {
    displaySecurityLogs()
  }
}

function filterFiles(filter) {
  const user = JSON.parse(sessionStorage.getItem("user"))
  const files = FILES_DATABASE.admin.concat(FILES_DATABASE.manager).concat(FILES_DATABASE.employee)
  const filesGrid = document.getElementById("filesGrid")
  filesGrid.innerHTML = ""

  let filtered = files
  if (filter === "public") {
    filtered = files.filter((f) => f.type === "public")
  } else if (filter === "restricted") {
    filtered = files.filter((f) => f.type === "restricted")
  }

  filtered.forEach((file) => {
    const fileCard = createFileCard(file, user.role)
    filesGrid.appendChild(fileCard)
  })
}

// ============================================
// UI UTILITIES
// ============================================
function updateIPStatus(user) {
  // Initial IP display
  document.getElementById("currentIP").textContent = "Detecting..."
}

function showCustomPopup(type, title, message, callback = null) {
  const popup = document.getElementById("customPopup")
  const icon = document.getElementById("popupIcon")
  const titleEl = document.getElementById("popupTitle")
  const messageEl = document.getElementById("popupMessage")
  const btn = document.getElementById("popupBtn")

  titleEl.textContent = title
  messageEl.textContent = message

  if (type === "success") {
    icon.textContent = "✓"
    icon.style.background = "linear-gradient(135deg, #00cc66, #00ff88)"
  } else if (type === "error") {
    icon.textContent = "✗"
    icon.style.background = "linear-gradient(135deg, #ff3366, #ff5588)"
  } else if (type === "warning") {
    icon.textContent = "⚠"
    icon.style.background = "linear-gradient(135deg, #ff9900, #ffbb00)"
  }

  popup.classList.add("active")

  btn.onclick = () => {
    popup.classList.remove("active")
    if (callback) {
      setTimeout(callback, 300)
    }
  }
}

// Initialize logs on page load
addSecurityLog("Session started", "success")
