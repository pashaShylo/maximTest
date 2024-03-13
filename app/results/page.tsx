import { db } from "../../db";

const getData = async () => {
  const data = await db.userResult.findMany();
  return data;
};

export default async function BlogPage() {
  const res = await getData();

  return (
    <div>
      <h1 className="text-4xl">Результати</h1>
      <div className="flex flex-col gap-8">
        {res.map((item: any, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <h1 className="text-left text-2xl">{item.userName}</h1>
            {item.result.map((item2: any) => {
              return (
                <div
                  key={item2.question}
                  className="grid grid-cols-2 gap-4 text-left"
                >
                  <h2>{item2.question}</h2>
                  <p className="text-center">{item2.answer}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
