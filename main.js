console.log("pls don't hack anything")

function themeSwitcher() {
  return {
    themes: [
      '',     
      '3baka', 
    ],

    theme: '',

    init() {
        this.$nextTick(() => {
            const saved = localStorage.getItem('data-theme') || '';
            this.theme = this.themes.includes(saved) ? saved : '';
            
            if (this.theme !== '') {
                document.documentElement.setAttribute('data-theme', this.theme);
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        });
    },

    saveTheme() {
      const sel = this.theme;
      if (this.themes.includes(sel) && sel !== '') {
        localStorage.setItem('data-theme', sel);
      } else {
        localStorage.setItem('data-theme', '');
      }
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
    // I don't think putting email in plaintext is a good idea, so:
    const mailb64 = "dmlydHVhbGdydWIzOUB0dXRhbWFpbC5jb20";
    
    var mailpt = atob(mailb64);
    const a = document.createElement("a");
    a.href = "mailto:"+mailpt;
    a.textContent = mailpt;
    a.target = "_blank";
    a.rel = "noopener";

    const container = document.getElementById("email-container");
    if (container) {
        container.appendChild(a);
    }

    // ^ not much better, but still...
});
