# AJAX Contact Form - How It Works

Your contact form now submits without page reload! Here's what happens:

## User Experience

**When someone fills out your form:**

1. They enter Name, Email, Message
2. Click "Send"
3. Button changes to "Sending..." (disabled)
4. Form submits in the background (no page reload!)
5. Success message appears: "✓ Message sent successfully! I'll get back to you soon."
6. Form clears automatically
7. After 5 seconds, message fades away

**If something goes wrong:**
- Error message appears: "✗ Something went wrong. Please try again or email me directly at calagman@gmail.com"
- Form stays filled so they can try again
- After 5 seconds, message fades away

## What Changed

✅ **No page redirect** - Users stay on your site
✅ **Instant feedback** - "Sending..." button state
✅ **Success/error messages** - Clear feedback
✅ **Form auto-clears** - After successful submission
✅ **Disabled state** - Can't submit twice while sending

## Technical Details

- Uses `fetch` API to submit form data to Formspree
- React state manages form status (idle, submitting, success, error)
- Form data sent with `FormData` API
- Messages auto-dismiss after 5 seconds
- Smooth animations for messages (slide in effect)

## Deploy

```bash
cd portfolio
git add app/page.js app/page.module.scss
git commit -m "Add AJAX contact form with success messages"
git push
```

## Testing

After deployment:
1. Go to www.catlagman.design
2. Scroll to Contact section
3. Fill out the form
4. Click Send
5. Watch for success message
6. Check calagman@gmail.com for the message

Perfect modern form UX! 🎉
