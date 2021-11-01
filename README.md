# All I See Is Beans
This is a github repo for our website [here](https://alliseeisbeans.com/)

## Notes
- Followed the steps [here](https://medium.com/swlh/deploying-a-react-app-to-google-cloud-run-with-github-actions-ae24ac6cb85a#d93d) to set up Google Cloud Integration (although the automatic CI/CD function is still broken)

## Our Outlets

| Plugin | README |
| ------ | ------ |
| Website | https://alliseeisbeans.com/ |
| Instagram | https://www.instagram.com/alliseeisbeans/ |
| Facebook Page | https://www.facebook.com/profile.php?id=100074053327356 |
| Reddit (In progress) | https://www.reddit.com/r/alliseeisbeans/ |

## Commands to Update

```sh
docker build -t gcr.io/alliseeisbeans/<name> ./
```

Second Tab:

```sh
docker push gcr.io/alliseeisbeans/<name>
```

