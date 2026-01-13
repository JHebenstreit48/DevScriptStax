import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WithESLint = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/Interoperability/WithESLint';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="With ESLint" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WithESLint;
