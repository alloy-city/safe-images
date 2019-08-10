# [WIP] safe-images
Find all unsafely served images in Alloy database

## TODO
1. Find images in mongo DB resources collection that are served through unsafe HTTP
2. Download them all, so that they can be served by the Alloy servers
3. Update the documents in the DB with the new in-domain URL
