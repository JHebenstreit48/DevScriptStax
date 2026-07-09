import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ForeignDataWrappers = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW/ForeignDataWrappers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Foreign Data Wrappers (FDW)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ForeignDataWrappers;
