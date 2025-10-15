import { Container, Filters, TopBar} from "@/components/shared/index";
import { ProductsGroupList } from "@/components/shared/products-group-list";


export default function Home() {
  return (
   <>
    <Container className="mt-10" >
      <h1 className="font-extrabold py-5" >Все заказы</h1>
    </Container>
    <TopBar/> 
    
    <Container className="mt-10 pb-14" >
      <div className="flex gap-[80px]" >
        {/* Фильтрация */}
        <div className="w-[250px]" >
          <Filters/>
        </div>

        {/* Список Товаров */}
        <div className="flex-1" >
          <div className="flex flex-col gap-16" >
            <ProductsGroupList title={"Пиццы"} items={[
              {
              id: 1,
              name: 'Штука',
              imageUrl: '/next.svg',
              price: 550,
              items: [{price: 550}],
              },
              {
                id: 2,
                name: 'Штука',
                imageUrl: '/next.svg',
                price: 10,
                items: [{price: 80}],
                },
                {
                  id: 3,
                  name: 'ДДДДДДДДТД',
                  imageUrl: '/next.svg',
                  price: 20000000,
                  items: [{price: 2}],
                  },  
            ]} categoryId={1} />
            <ProductsGroupList title={"Комбо"} items={[
              {
              id: 1,
              name: 'Штука',
              imageUrl: '/next.svg',
              price: 550,
              items: [{price: 550}],
              },
              {
                id: 2,
                name: 'Штука',
                imageUrl: '/next.svg',
                price: 10,
                items: [{price: 80}],
                },
                {
                  id: 3,
                  name: 'ДДДДДДДДТД',
                  imageUrl: '/next.svg',
                  price: 20000000,
                  items: [{price: 2}],
                  },
                       
            ]} categoryId={2} />
            <ProductsGroupList title={"Шо"} items={[
              {
              id: 1,
              name: 'Штука',
              imageUrl: '/next.svg',
              price: 550,
              items: [{price: 550}],
              },
              {
                id: 2,
                name: 'Штука',
                imageUrl: '/next.svg',
                price: 10,
                items: [{price: 80}],
                },
                {
                  id: 3,
                  name: 'ДДДДДДДДТД',
                  imageUrl: '/next.svg',
                  price: 20000000,
                  items: [{price: 2}],
                  },
                       
            ]} categoryId={3} />
          </div>
        </div>
      </div>
    </Container>
  
   
   </>
  );
}
