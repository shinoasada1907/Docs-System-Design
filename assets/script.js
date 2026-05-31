/* Khóa học System Design — script dùng chung */
(function () {
  if (window.hljs) {
    document.querySelectorAll("pre code").forEach((el) => window.hljs.highlightElement(el));
  }

  // Nút copy code
  document.querySelectorAll(".code-block").forEach((block) => {
    const btn = block.querySelector(".copy-btn");
    const code = block.querySelector("pre code");
    if (!btn || !code) return;
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(code.innerText).then(() => {
        const old = btn.textContent;
        btn.textContent = "Đã copy!";
        btn.classList.add("copied");
        setTimeout(() => { btn.textContent = old; btn.classList.remove("copied"); }, 1500);
      });
    });
  });

  // Đánh dấu mục đang xem
  const here = location.pathname.split("/").pop();
  document.querySelectorAll(".nav a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });

  // Toggle sidebar mobile
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menuBtn");
  const overlay = document.getElementById("overlay");
  function toggle(open) {
    if (!sidebar) return;
    sidebar.classList.toggle("open", open);
    if (overlay) overlay.classList.toggle("show", open);
  }
  if (menuBtn) menuBtn.addEventListener("click", () => toggle(!sidebar.classList.contains("open")));
  if (overlay) overlay.addEventListener("click", () => toggle(false));
  document.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => toggle(false)));
})();
