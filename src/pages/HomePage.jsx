import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Bienvenido a un mundo de libros 
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
            Un lector vive mil vidas antes de morir. La persona que nunca lee solamente una
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            En nuestra plataforma podras visualizar diferentes libros, contando con una pequeña reseña de ellos.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link to={"/nuevoLibro"}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Crear Libro
            </Button>
            </Link>
            <Link to={"/libros"}>
            <Button rounded={'full'}>Mis libros</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            "https://i.ibb.co/HphvJcx/biblioteca.jpg"          }
        />
      </Flex>
    </Stack>
  );
}