# WEB103 Project 2 - *Women Who Shaped STEM*

Submitted by: **Stephanie B**

About this web app: ** Women Who Shaped STEM is a web app that highlights ten women who made important contributions to science, technology, engineering, and mathematics. The homepage displays all ten women as clickable cards, and each card links to a detail page with a fuller bio and fun fact. It was built using Node.js, Express, and PostgreSQL for the backend, with vanilla HTML, CSS, and PicoCSS for styling.**

Time spent: **2** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**


The following **optional** features are implemented:

- [ ] The user can search for items by a specific attribute

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src= womenInStemRender.gif />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows


## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.
One thing I struggled with was keeping my data consistent across different files. I had fixed some broken image URLs in my HTML earlier, but the database (which was from a separate data file) still had the old URLs, so a bunch of images broke again once I switched to fetching from the database. I also ran into some git issues with mismatched branch names and a folder being tracked when it shouldn't have been.

## License

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
