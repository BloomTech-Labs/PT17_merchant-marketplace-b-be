This codebase follows all of the Labs Engineering standards.

The back-end has been deployed using Heroku and can be found here: https://merchant-marketplace-b-api.herokuapp.com

Summary of endpoints:

Profiles
| Request | Returns |
| ----- | ----- |
| GET /profile/
| GET /profile/:id/
| POST /profile/ | returns body and message
| PUT /profile | returns body and message
| DELETE /profile/:id/

POSTING ITEMS
| Request | Returns |
| ----- | ----- |
| GET /item/profile/:profileId/
| GET /item/:itemId/ | returns body
| GET /item/ | returns all published items
| GET /item /drafts/:profileID/ | fetches draft items via seller id
| POST /item/ | don’t forget to post seller_profile_id
| PUT /item/:id | returns body
| DELETE /item/:id/ | returns id

TAG_ITEM
| Request | Returns |
| ----- | ----- |
| POST /item/:itemId/tag/:tagId/

CATEGORY_ITEM
| Request | Returns |
| ----- | ----- |
| POST /item/:itemId/categories/:catId/

PHOTO
| Request | Returns |
| ----- | ----- |
| GET /photo/:item_id/ | return body
| POST /photo/ | return body. Don’t forget to post item_id

CATEGORY
| Request | Returns |
| ----- | ----- |
| GET /category/ | return list of categories
| GET /category/:itemId/
| POST /category/ | return body

TAG
| Request | Returns |
| ----- | ----- |
| GET /tag/ | return list of tags
| GET /tag/item/:itemId/ | return items with tags
| POST /tag/ | return body
