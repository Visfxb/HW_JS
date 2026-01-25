let isEdit = false;

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "e") {
        e.preventDefault();
        if (!isEdit) {
            const div = document.getElementById("text");
            const textarea = document.createElement("textarea");
            textarea.id = "text";
            textarea.value = div.textContent;
            div.replaceWith(textarea);
            isEdit = true;
        }
    }

    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        if (isEdit) {
            const textarea = document.getElementById("text");
            const div = document.createElement("div");
            div.id = "text";
            div.textContent = textarea.value;
            textarea.replaceWith(div);
            isEdit = false;
        }
    }
});