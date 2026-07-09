import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Helmet = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Security/Helmet';

  return (
    <>
      <PageLayout>
        <PageTitle title="Helmet" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Helmet;
