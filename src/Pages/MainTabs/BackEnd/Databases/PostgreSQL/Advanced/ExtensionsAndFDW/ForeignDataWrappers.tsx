import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
