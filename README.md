[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Bookmark'd PART 1( MINI PROJECT )

![](<https://fthmb.tqn.com/N8UHZxApLqho5sUDbpSRyEy1tV8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bookmarks-56d0cca45f9b5879cc7123a4.jpg>)

Your goal for this week's homework is to build a bookmark app that lets users add a title and a link to save websites in one neat list.

#### Prerequisites

- Git
- JavaScript
- Node / Express
- Mongo / Mongoose

---

## The Bookmarks App

You will be building an app that lets users add a title and a link to save websites in one neat list. When users click on a title, it should take them to the linked website.

> :exclamation: GOTCHA - when testing it out, note that your links must start with http or https or else it will error!

_Example:_

![](https://i.imgur.com/yq9Ygeu.png)

✨ Fun Fact: This homework was inspired by a coding challenge used during a company's hiring process. So, treat it like you're trying to get that job!

## MVP

Listed below is the basic required functionality that your Bookmark'd app should have. Some of the user stories are purposefully ambiguous to allow you all to ‘solve’ the problems in a way that is intuitive and makes sense to you, as opposed to just checking off specific steps from homework.

## PART 1

#### Express API

- You should have a model for bookmarks that has the following schema:
  ```
  title: string
  url: string
  ```
- You should have routes for...
  - Index: Getting all bookmarks
  - Create: Posting a new bookmark
  - Delete: Deleting a bookmark
  - Update: Updating a bookmark
  - **Make sure you TEST ALL ROUTES with postman or CURL BEFORE you move onto creating the frontend!**

## Hungry for More?

- Add an array of tags to the schema so you can organize your bookmarks by tags
- Use `Create React App` to create a front end for your application and try using `fetch` to display an `index` off all of your bookmarks!

---

## Deliverables

A completed Express API

## Technical Requirements

1. Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

---

_Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
