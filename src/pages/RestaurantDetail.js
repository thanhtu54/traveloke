import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import RestaurantSmallGallery from "../components/RestaurantSmallGallery";
import BreadcrumbMain from "../components/BreadcrumbMain";
import {
  IoBusinessOutline,
  IoCalendarOutline,
  IoReceiptOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaParking } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import Footer from "../components/Footer";
import DateTimePicker from "../components/DateTimePicker/DateTimePicker";
import useSWR from "swr";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import NumberButton from "../components/NumberButton";
import RestaurantFeedBack from "../components/RestaurantFeedBack";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const RestaurantDetail = () => {
  let { id } = useParams();
  const { data = [] } = useSWR(
    `https://pbl6-travelapp.herokuapp.com/hotel/${id}/room/`,
    fetcher
  );

  const property = {
    imageUrl: "/images/restaurant/res2_1.jpg",
    imageAlt: "Restaurant",
    beds: 3,
    baths: 2,
    title: "Akira Back - JW Marriott Hotel Hanoi",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <>
      <Navbar />
      <Box py="5">
        <Box w="6xl" mx="auto">
          <BreadcrumbMain urls={["Home", "Restaurant", "Booking"]} />
          <Box>
            <SimpleGrid mt="7" columns={{ base: 1, md: 2 }}>
              <RestaurantSmallGallery />
              <Box>
                <Heading mb="10">Stellar Steakhouse</Heading>
                <Flex alignItems="baseline" mb="4">
                  <IoBusinessOutline />
                  <Flex flexDirection="column" ml="5px">
                    <Text fontWeight="bold">?????a ch???</Text>
                    <Text>C???u Gi???y, H?? N???i, Vi???t Nam</Text>
                  </Flex>
                </Flex>
                <Flex alignItems="baseline" mb="4">
                  <IoTimeOutline />
                  <Flex flexDirection="column" ml="5px">
                    <Text fontWeight="bold">Gi??? ho???t ?????ng</Text>
                    <Text>6:00 pm ??? 9:00 pm h??ng ng??y</Text>
                  </Flex>
                </Flex>
                <Flex alignItems="baseline" mb="4">
                  <GiForkKnifeSpoon />
                  <Flex flexDirection="column" ml="5px">
                    <Text fontWeight="bold">???m th???c</Text>
                    <Text>Nh?? h??ng b??t t???t, Qu???c t???, Teppanyaki</Text>
                  </Flex>
                </Flex>
                <Flex alignItems="baseline" mb="4">
                  <FaParking />
                  <Flex flexDirection="column" ml="5px">
                    <Text fontWeight="bold">Chi ti???t b??i ?????u xe</Text>
                    <Text>B??i ?????u xe kh??ch s???n</Text>
                  </Flex>
                </Flex>
                <Flex alignItems="baseline" mb="4">
                  <AiOutlineCreditCard />
                  <Flex flexDirection="column" ml="5px">
                    <Text fontWeight="bold">C??c l???a ch???n thanh to??n</Text>
                    <Text>AMEX, JCB, MasterCard, Visa</Text>
                  </Flex>
                </Flex>
                <Stack>
                  <Box d="flex">
                    <Box mr="25px" width="390px">
                      <Text mb="4">?????t b??n:</Text>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<IoCalendarOutline />}
                        />
                        <DateTimePicker />
                      </InputGroup>
                    </Box>
                    <Box mr="25px">
                      <Text mb="4">S??? ng?????i:</Text>
                      <NumberButton />
                    </Box>
                  </Box>

                  <Box d="flex" alignItems="baseline">
                    <IoReceiptOutline />
                    <Text as="button" align="left" ml="10px" mb="2">
                      Thanh to??n t???i nh?? h??ng
                    </Text>
                  </Box>
                  <Box>
                    <Button
                      w="300px"
                      color="white"
                      bg="blue.500"
                      _hover={{
                        bg: "blue.300",
                      }}
                      _focus={{ boxShadow: "none" }}
                    >
                      ?????t b??n
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>
          <Box my="10">
            <Heading>????nh gi?? nh?? h??ng</Heading>
            <Box my="10" alignItems="center">
              <Tabs align="center" isManual variant="enclosed">
                <TabList>
                  <Tab>T???t c???</Tab>
                  <Tab>5 sao</Tab>
                  <Tab>4 sao</Tab>
                  <Tab>3 sao</Tab>
                  <Tab>2 sao</Tab>
                  <Tab>1 sao</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                  </TabPanel>
                  <TabPanel>
                    <RestaurantFeedBack />
                    <RestaurantFeedBack />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
          <Box my="10">
            <Heading>Nh?? h??ng li??n quan</Heading>
            <Flex my="10">
              <Box
                w="xs"
                rounded="lg"
                shadow="lg"
                cursor="pointer"
                _hover={{ shadow: "xl" }}
                mr="10"
              >
                <Image
                  src={property.imageUrl}
                  alt={property.imageAlt}
                  roundedTop="lg"
                  objectFit="cover"
                />

                <Box p="5">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.rooms} tables &bull; {property.available}{" "}
                      available
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {property.title}
                  </Box>

                  {/* <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box> */}

                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                w="xs"
                rounded="lg"
                shadow="lg"
                cursor="pointer"
                _hover={{ shadow: "xl" }}
                mr="10"
              >
                <Image
                  src={property.imageUrl}
                  alt={property.imageAlt}
                  roundedTop="lg"
                  objectFit="cover"
                />

                <Box p="5">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.rooms} tables &bull; {property.available}{" "}
                      available
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {property.title}
                  </Box>

                  {/* <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box> */}

                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                w="xs"
                rounded="lg"
                shadow="lg"
                cursor="pointer"
                _hover={{ shadow: "xl" }}
                mr="10"
              >
                <Image
                  src={property.imageUrl}
                  alt={property.imageAlt}
                  roundedTop="lg"
                  objectFit="cover"
                />

                <Box p="5">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.rooms} tables &bull; {property.available}{" "}
                      available
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {property.title}
                  </Box>

                  {/* <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box> */}

                  <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default RestaurantDetail;
