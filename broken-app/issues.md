# Broken App Issues

The app wasn't using JSON format for it's requests.

There was missing error handling.

The callback function for the post method had to be asynchronous to await the Promise.all() method that was used to manage the array of axios requests.

There weren't any node packages set up.