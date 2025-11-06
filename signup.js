// Signup Logic
document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
  e.preventDefault()

  const fullname = document.getElementById("fullname").value
  const email = document.getElementById("email").value
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  const confirmPassword = document.getElementById("confirmPassword").value
  const role = document.getElementById("role").value

  // Validation
  if (password !== confirmPassword) {
    showCustomPopup("error", "Password Mismatch", "Passwords do not match. Please try again.")
    return
  }

  if (password.length < 6) {
    showCustomPopup("error", "Weak Password", "Password must be at least 6 characters long.")
    return
  }

  if (!role) {
    showCustomPopup("error", "Role Required", "Please select your role to continue.")
    return
  }

  // Store user data (in real app, this would be sent to backend)
  const userData = {
    fullname,
    email,
    username,
    password,
    role,
    createdAt: new Date().toISOString(),
  }

  // Save to localStorage (simulating database)
  const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")

  // Check if username already exists
  if (existingUsers.some((u) => u.username === username)) {
    showCustomPopup("error", "Username Taken", "This username is already registered. Please choose another.")
    return
  }

  existingUsers.push(userData)
  localStorage.setItem("registeredUsers", JSON.stringify(existingUsers))

  // Success
  showCustomPopup(
    "success",
    "Account Created!",
    "Your account has been created successfully. Redirecting to login...",
    () => {
      window.location.href = "index.html"
    },
  )
})

function showCustomPopup(type, title, message, callback = null) {
  const popup = document.getElementById("customPopup")
  const icon = document.getElementById("popupIcon")
  const titleEl = document.getElementById("popupTitle")
  const messageEl = document.getElementById("popupMessage")
  const btn = document.getElementById("popupBtn")

  // Set content
  titleEl.textContent = title
  messageEl.textContent = message

  // Set icon and color based on type
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

  // Show popup
  popup.classList.add("active")

  // Handle button click
  btn.onclick = () => {
    popup.classList.remove("active")
    if (callback) {
      setTimeout(callback, 300)
    }
  }
}
