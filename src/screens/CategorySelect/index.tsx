import React from "react";
import { FlatList } from "react-native-gesture-handler";


import { Button } from '../../components/Forms/Button';

import { categories } from "../../util/categories";

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Sepator,
  Footer
} from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelecCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelecCategory,
}: Props) {
  
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Sepator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelecCategory}/>
      </Footer>
    </Container>
  );
}
