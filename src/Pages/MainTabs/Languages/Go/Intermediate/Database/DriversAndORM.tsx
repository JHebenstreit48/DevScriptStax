import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
