import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GenericsAndProtocols = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Typing/GenericsAndProtocols';

  return (
    <>
      <PageLayout>
        <PageTitle title="Generics & Protocols" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GenericsAndProtocols;
