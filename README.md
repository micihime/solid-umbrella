## Issue I need help with

I am using Remix with Mantine. I want to have a form where I upload some data and a file. However, I am not able to read the file properties or the file content when using Mantine components in a form.

## STEPS HOW TO REPRODUCE:

1. insert some text into the input, select some file to upload and submit
2. check the console log in terminal
      
When using simple form, I can see file name, size and content logged to the console.
When using Mantine form components with file input, I am not able to see the file content or anything.
      
I am not able to read the file properties or the file content in /mantinesimple and in /mantinehandler routes.

# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
