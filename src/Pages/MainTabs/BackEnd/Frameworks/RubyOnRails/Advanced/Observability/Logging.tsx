import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Logging = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/Observability/Logging';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Logging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Logging;
