import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Instrumentation = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/Observability/Instrumentation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Instrumentation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Instrumentation;
