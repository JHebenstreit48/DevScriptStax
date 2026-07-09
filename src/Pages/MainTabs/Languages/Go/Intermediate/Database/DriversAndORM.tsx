import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DriversAndORM = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/Database/DriversAndORM';

  return (
    <>
      <PageLayout>
        <PageTitle title="Drivers & ORM" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DriversAndORM;
