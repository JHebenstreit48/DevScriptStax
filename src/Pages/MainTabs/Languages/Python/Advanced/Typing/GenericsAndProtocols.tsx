import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GenericsAndProtocols = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Typing/GenericsAndProtocols';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Generics & Protocols" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GenericsAndProtocols;
