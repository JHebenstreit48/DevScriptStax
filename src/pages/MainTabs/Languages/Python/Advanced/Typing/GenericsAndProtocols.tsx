import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
