import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Helmet = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Security/Helmet';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Helmet" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Helmet;
