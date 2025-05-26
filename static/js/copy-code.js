document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('pre code');

    console.log("Copy code script loaded");

  
    codeBlocks.forEach((codeBlock) => {
        // Create and add the copy button
        const button = document.createElement('button');
        button.textContent = 'Copy code';
        button.className = 'copy-code-button';
        
        // Insert the button above the code block
        codeBlock.parentNode.insertBefore(button, codeBlock);
  
        // Add click event for copying the code
        button.addEventListener('click', () => {
            // Write the text content to the clipboard
            navigator.clipboard.writeText(codeBlock.textContent.trim()).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => button.textContent = 'Copy code', 1500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
  });
  