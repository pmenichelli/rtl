# Demo app

I took the freedom to modify a few things in this demo app (hope that's fine). I implemented a search page where you can search for any tv show and then click on it.
Going to the show page a Hero component shows the main info of the show and below the different episodes can be seen listed by season with their thumbnails and basic description.

A couple of things to note: Please read all the comments in the code as I tried to document there why I did what I did.

Some things lef to do are:

- Add Unit and BDD tests, this is mandatory in a real world app.
- Should organize code more using export defaults or index files to export stuff so imports are neater.
- Might leverage typescript or at least Proptypes
- Probably should give proper feedback to the user about the app state (just added a "loading" div to inditcate it's loading, but could have added error feedback for requests for example or a nice loading animation).
- Now all requests are done every time, we could implement some serviceworker cache and also avoid some requests in some scenarios by passing some props when routing to other view.
- Should take care of pagination when there are too many seasons and episodes
- Unhandled routes should redirect to search page or at least show a nice not found message
- Should test for A11Y issues.
- Inline styles for background images is not an elegant approach, should improve that.
- Used a placeholder image service to save the cases when the API does not return images (that's ugly I know).
- Item component is not very responsive in small viewports, would need more time to adjust that.
- The hero component is using a few values that seem hardcoded, I took the idea from a codepen too. I would never leave it as that. At least organize the CSS a bit more using variables so it's more readable.

The approach I've take can be summarized as following:

- Two categories of components, container components to handle logic (pages folder) and presentational components (components folder)
- I used redux for state management (although it might not be necessary for an app this small) and redux-thunk for side effects
- Used react-router-dom for the two pages
- Also implemented a small tv shows service to handle requests to the API
- My design skills are quite bad so I took a couple of simple ideas from codepen I quickly found
- Forgive me for the double quote in all strings (")

The following instructions are just the default isntructions that come with the README file created by `create-react-app`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
