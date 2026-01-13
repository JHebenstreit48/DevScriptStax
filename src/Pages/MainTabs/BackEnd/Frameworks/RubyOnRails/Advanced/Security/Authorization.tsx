import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Authorization = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/Security/Authorization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Authorization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Authorization;
