import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PopularExtensions = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW/PopularExtensions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Popular Extensions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PopularExtensions;
