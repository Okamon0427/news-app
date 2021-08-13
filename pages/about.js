import { Stack, Text } from "@chakra-ui/react"
import Meta from '../components/Meta';

const about = () => {
  return (
    <div>
      <Meta title='About' />
      <Stack spacing={3}>
        <Text fontSize="2xl">Welcome to the Latest News App</Text>
        <Text fontSize="lg">Many latest articles, such as technology, business, health, and sports, can be seen in the app. On top of that, you can find the news related to your favorite things by using keyword search.</Text>
      </Stack>
    </div>
  )
}

export default about;