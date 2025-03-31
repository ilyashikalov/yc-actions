# yc-actions
GitHub Actions for Yandex Cloud

# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log. 

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time now

## Example usage

```yaml
uses: actions/yc-actions@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  who-to-greet: 'Peter the Great'
```
