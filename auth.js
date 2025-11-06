// Authentication & Login Logic
const trustedIP = "103.25.10.5"

// Demo users (pre-registered)
const demoUsers = {
  admin: {
    password: "admin123",
    role: "admin",
    name: "Administrator",
  },
  manager: {
    password: "manager123",
    role: "manager",
    name: "Manager",
  },
  employee: {
    password: "emp123",
    role: "employee",
    name: "Employee",
  },
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

document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault()

  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  const role = document.getElementById("role").value

  // First check registered users from localStorage
  const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
  const registeredUser = registeredUsers.find((u) => u.username === username)

  // Verify credentials
  let user = null
  let isRegistered = false

  // Check registered users first
  if (registeredUser && registeredUser.password === password) {
    if (registeredUser.role !== role) {
      showCustomPopup(
        "error",
        "Role Mismatch",
        "The selected role does not match your registered account. Please select the correct role.",
      )
      return
    }
    user = registeredUser
    isRegistered = true
  }
  // Then check demo users
  else if (demoUsers[username] && demoUsers[username].password === password) {
    if (demoUsers[username].role !== role) {
      showCustomPopup(
        "error",
        "Role Mismatch",
        "The selected role does not match your account. Please select the correct role.",
      )
      return
    }
    user = demoUsers[username]
  } else {
    showCustomPopup("error", "Invalid Credentials", "Username or password is incorrect. Please try again.")
    return
  }

  // Get current IP
  try {
    const ipResponse = await fetch("https://api.ipify.org?format=json")
    const ipData = await ipResponse.json()
    const currentIP = ipData.ip

    // Store session data
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        username,
        role,
        name: user.name || user.fullname,
        loginIP: currentIP,
        loginTime: new Date().toISOString(),
        isRegistered,
      }),
    )

    showCustomPopup("success", "Login Successful", "Redirecting to dashboard...", () => {
      window.location.href = "dashboard.html"
    })
  } catch (error) {
    console.error("[v0] IP fetch error:", error)
    showCustomPopup(
      "error",
      "Connection Error",
      "Unable to verify IP address. Please check your connection and try again.",
    )
  }
})

function checkSession() {
  const user = sessionStorage.getItem("user")
  if (!user) {
    window.location.href = "index.html"
    return null
  }
  return JSON.parse(user)
}

function logout(reason = "User logged out") {
  sessionStorage.clear()
  setTimeout(() => {
    window.location.href = "index.html"
  }, 2000)
}
