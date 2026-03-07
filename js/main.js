const textarea = document.getElementById('protocolText');
const copyBtn = document.getElementById('copyBtn');

// Защита от дублирования текста (визуально, можно убрать, но оставим как есть)
// Текст уже вставлен в textarea в HTML.

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(textarea.value);
        
        // Эффект "успешного взлома"
        copyBtn.textContent = '✓ ПРОТОКОЛ ИЗЪЯТ';
        copyBtn.classList.add('copied');
        
        // Добавляем мигание фона
        document.body.style.backgroundColor = '#1f3f2f';
        setTimeout(() => {
            document.body.style.backgroundColor = '';
        }, 200);
        
        setTimeout(() => {
            copyBtn.textContent = '⏻ КОПИРОВАТЬ ПРОТОКОЛ';
            copyBtn.classList.remove('copied');
        }, 1800);
        
    } catch (err) {
        alert('⚠ СБОЙ ЗАПИСИ. ВЫДЕЛИТЕ ТЕКСТ ВРУЧНУЮ (CTRL+C)');
    }
});

// Консольный привет для "посвященных"
console.log(
    '%cSWILL ПРОТОКОЛ АКТИВИРОВАН // ДОСТУП ТОЛЬКО ДЛЯ SWILL WAY',
    'color: #8fbfbf; background: #0a0f1a; font-size: 12px; padding: 5px; border: 1px solid #2f5f7f;'
);